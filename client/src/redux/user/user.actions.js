import {UserActionTypes} from './user.types';

export const googleSignInStart=()=>({
    type:UserActionTypes.GOOGLE_SIGNIN_START
})

export const emailSignInStart=({email,password})=>({
    type:UserActionTypes.EMAIL_SIGNIN_START,
    payload:{email,password}
})

export const SignOutStart = ()=>({
    type:UserActionTypes.SIGNOUT_START
})

export const SignUpStart = ({email,password,displayName}) =>({
    type:UserActionTypes.SIGNUP_START,
    payload:{email,password,displayName}
})


export const SignInSuccess = (user)=>({
    type:UserActionTypes.SIGNIN_SUCCESS,
    payload:user
})

export const SignOutSuccess = ()=>({
    type:UserActionTypes.SIGNOUT_SUCCESS
})

export const SignUpSuccess = (user)=>({
    type:UserActionTypes.SIGNUP_SUCCESS,
    payload:user
})

export const SignInFailure = (error) =>({
    type:UserActionTypes.SIGNIN_FAILURE,
    payload:error
})

export const SignOutFailure = ()=>({
    type:UserActionTypes.SIGNOUT_FAILURE
})

export const SignUpFailure = (error)=>({
    type:UserActionTypes.SIGNOUT_FAILURE,
    payload:error
})

export const checkUserSession = ()=>({
    type:UserActionTypes.CHECK_USER_SESSION
})




