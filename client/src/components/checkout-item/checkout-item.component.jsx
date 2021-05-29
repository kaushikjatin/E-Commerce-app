import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {addItem, removeItem} from '../../redux/cart/cart.actions';
import {decreaseQuantity} from '../../redux/cart/cart.actions'

const CheckoutItem=({cartItem,dispatch})=>{
    const {name,quantity,price,imageUrl}=cartItem
    return(
    <div className='checkout-item'>
        <div className='image-container'>
                <img alt='item image' src={imageUrl}></img>
        </div>
        <span className='name'>{name}</span>
        <div className='quantity'>
            <span className='arrow' onClick={()=>{dispatch(decreaseQuantity(cartItem))}}>&#10094;</span>
            <span className='value'>{quantity}</span>
            <span className='arrow' onClick={()=>{dispatch(addItem(cartItem))}}>&#10095;</span>
        </div>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={()=>{dispatch(removeItem(cartItem))}}>&#10005;</div>
    </div>
)}

export default connect(null)(CheckoutItem);
