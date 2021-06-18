import CartActionTypes from './cart.types'

export const toggleCartHidden =()=>({
    type:CartActionTypes.TOGGLE_HIDDEN_CART
})

export const addItem = (item)=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})

export const removeItem = (item) =>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})

export const decreaseQuantity = (item) =>({
    type:CartActionTypes.DECREASE_QUANTITY,
    payload:item
})

export const clearCart = ()=>({
    type:CartActionTypes.CLEAR_CART
})
