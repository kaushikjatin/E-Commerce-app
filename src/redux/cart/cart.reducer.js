import CartActionTypes from './cart.types'
const Intital_state={
    hidden:true
}

const cartReducer = (state=Intital_state,action)=>{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_HIDDEN_CART:
            return{
                ...state,
                hidden:!state.hidden
            }
        default:
            return state
    }
};

export default cartReducer