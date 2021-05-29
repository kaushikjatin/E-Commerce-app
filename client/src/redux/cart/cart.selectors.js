import {createSelector} from 'reselect'

const selectcart = (state) => {return state.cart}

export const selectCartItems = createSelector(
    [selectcart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectcart],
    (cart) => cart.hidden
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((count,item)=> count + item.quantity , 0)
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((total,item) => total + item.quantity*item.price ,0) 
    }
)
