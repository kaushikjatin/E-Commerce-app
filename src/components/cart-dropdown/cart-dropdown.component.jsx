import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import './cart-dropdown.styles.scss';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {withRouter} from 'react-router-dom'


const CartDropdown = ({cartItems,history,dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                (cartItems.map(cartItem =>(<CartItem key={cartItem.id} item={cartItem}></CartItem>)))
                :(<span className='empty-message'>YOUR CART IS EMPTY</span>)
            }
        </div>
         <CustomButton onClick={()=>{
             console.log(history);
             history.push('/checkout');
             dispatch(toggleCartHidden())
         }}>
        GO TO CHECKOUT
        </CustomButton>
    </div>
)


const mapstatetoprops=(state)=>({
        cartItems:selectCartItems(state)
})
export default withRouter(connect(mapstatetoprops)(CartDropdown));

