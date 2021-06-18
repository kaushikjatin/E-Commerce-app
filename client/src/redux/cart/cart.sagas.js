import {takeLatest, put, call, take, all} from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import  {clearCart} from './cart.actions'

function* clearCarthandler(){
        yield put(clearCart());
}

function* onSignOut(){
    yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS,clearCarthandler);
}

export function* rootCartSaga(){
    yield all([call(onSignOut)]);
}