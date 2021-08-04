import React from 'react'
import {ReactComponent as ShoppinIcon} from '../../assets/shopping-bag.svg'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {connect} from 'react-redux'
import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
  } from './cart-icon.styles';
  
const cartIcon = ({toggleCartHidden,totalCount}) =>(
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{totalCount}</ItemCountContainer>
  </CartContainer>
);


const mapstatetoprops = (state) =>({
    totalCount : selectCartItemsCount(state)
})
const mapdispatchtoprops= (dispatch)=>({
            toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(mapstatetoprops,mapdispatchtoprops)(cartIcon);