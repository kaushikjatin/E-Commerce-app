import CartActionTypes from './cart.types'
import {addItem} from './cart.utils';
const Intital_state={
    hidden:true,
    cartItems:[]
}

const cartReducer = (state=Intital_state,action)=>{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_HIDDEN_CART:
            return{
                ...state,
                hidden:!state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItem(state.cartItems,action.payload)
            }
        default:
            return state
    }
};

export default cartReducer