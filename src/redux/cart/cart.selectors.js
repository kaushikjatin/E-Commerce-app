import {createSelector} from 'reselect'

const selectcart = (state) => state.cart

export const selectCartItems = createSelector(
    [selectcart],
    (cart) => cart.cartItems
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((count,item)=> count + item.quantity , 0)
)
