import React from 'react'
import {ReactComponent as ShoppinIcon} from '../../assets/shopping-bag.svg'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {connect} from 'react-redux'
import './cart-icon.styles.scss'

const cartIcon = ({toggleCartHidden,totalCount}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppinIcon className='shopping-icon'></ShoppinIcon>
        <span className='item-count'>{totalCount}</span>
    </div>
);


const mapstatetoprops = (state) =>({
    totalCount : selectCartItemsCount(state)
})
const mapdispatchtoprops= (dispatch)=>({
            toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(mapstatetoprops,mapdispatchtoprops)(cartIcon);