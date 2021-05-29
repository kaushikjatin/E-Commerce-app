const initial_state={
    currentUser:null
}

const userReducer =(state=initial_state,action)=>{
    switch(action.type){
        case 'Set_Current_User':
            return{
                ...state,
                currentUser:action.payload
            };
        default:
            return state;
    }
}

export default userReducer;