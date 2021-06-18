import { UserActionTypes } from "./user.types";

const initial_state={
    currentUser:null
}

const userReducer =(state=initial_state,action)=>{
    switch(action.type){
        case UserActionTypes.SIGNIN_SUCCESS:
        case UserActionTypes.SIGNUP_SUCCESS:
            return{
                ...state,
                currentUser:action.payload
            }
        case UserActionTypes.SIGNOUT_SUCCESS:
            return{
                ...state,
                currentUser:null,
            }
        case UserActionTypes.SIGNIN_FAILURE:
        case UserActionTypes.SIGNOUT_FAILURE:
        case UserActionTypes.SIGNUP_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;