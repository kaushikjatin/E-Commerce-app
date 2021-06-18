import {takeLatest, put, call, take, all} from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import { SignInFailure , SignInSuccess,SignOutSuccess,SignOutFailure,SignUpSuccess,SignUpFailure } from './user.actions';
import { auth,googleprovider,createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils';

function* userSignInHandler(user){
    try{
        const userRef= yield call(createUserProfileDocument,user);
        const userSnapshot = yield userRef.get();
        yield put(
            SignInSuccess({id:userSnapshot.id,...userSnapshot.data() })
            );
    }catch(error){
        console.log(error);
        yield put(SignInFailure(error));
    }
}

function* googleSignInHandler(){
    try{
        const {user}= yield auth.signInWithPopup(googleprovider);
        yield userSignInHandler(user);
    }catch(error){
        console.log(error);
        yield put(SignInFailure(error));
    }
}

function* emailSignInHandler({payload}){
    try{
        const {email,password}=payload;
        const {user}=yield auth.signInWithEmailAndPassword(email,password);
        yield userSignInHandler(user);
    }
    catch(error){
        console.log(error);
        yield put(SignInFailure(error));
    }
}


function* userSessionHandler(){
    try{
        console.log("came here");
        const user = yield getCurrentUser();
        if(!user)  return;
        yield userSignInHandler(user);
    }catch(error){
        console.log(error);
        yield put(SignInFailure(error));
    }
}

function* SignOutHandler(){
    try{
        yield auth.signOut();
        yield put(SignOutSuccess());
    }catch(error){
        yield put(SignOutFailure(error));
    }
}

function* SignUpHandler({payload}){
    try{
            const {email,password,displayName}=payload;
            const {user} = yield auth.createUserWithEmailAndPassword(email,password);
            yield userSignInHandler([user,{displayName}])
    }catch(error){
        yield put(SignUpFailure(error));
    }
}

function* googleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START,googleSignInHandler);
}

function* emailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START,emailSignInHandler);
}

function* SignOutStart(){
    yield takeLatest(UserActionTypes.SIGNOUT_START,SignOutHandler);
}

function* SignUpStart(){
    yield takeLatest(UserActionTypes.SIGNUP_START,SignUpHandler);
}

function* checkUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,userSessionHandler);
}


export function* rootUserSaga(){
    yield all([call(googleSignInStart),call(emailSignInStart),call(checkUserSession),call(SignOutStart),call(SignUpStart)])
}