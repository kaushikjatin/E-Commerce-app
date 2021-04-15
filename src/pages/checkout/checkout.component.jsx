import React from 'react';
import './checkout.styles.scss'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButtonCheckOut from '../../components/stripe-button/stripe-button.component'

const checkout=({cartItems,total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

            {cartItems.map(cartItem =><CheckoutItem cartItem={cartItem}></CheckoutItem>)}

        <div className='total'>TOTAL: ${total}</div>
        <StripeButtonCheckOut price={total}></StripeButtonCheckOut>
        
    </div>
)


const mapstatetoprops=(state)=>({
    cartItems:selectCartItems(state),
    total:selectCartTotal(state)
})

export default connect(mapstatetoprops)(checkout);