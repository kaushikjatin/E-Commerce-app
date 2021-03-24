import React from 'react'
import {ReactComponent as ShoppinIcon} from '../../assets/shopping-bag.svg'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
import './cart-icon.styles.scss'

const cartIcon = ({toggleCartHidden}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppinIcon className='shopping-icon'></ShoppinIcon>
        <span className='item-count'>0</span>
    </div>
);

const mapdispatchtoprops= (dispatch)=>({
            toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(null,mapdispatchtoprops)(cartIcon);