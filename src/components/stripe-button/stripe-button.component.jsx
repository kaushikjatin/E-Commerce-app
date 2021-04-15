import React from 'react';
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout'

const StripeButtonCheckOut = ({price}) =>{
    const priceForStripe=100 * price;
    const publishableKey='pk_test_51IfxkrSD1U5ZZOoaOXzYVdFvfzBEG4e0dPPObhWr3kPFE9VTlW0We91BZiNhUjZrlWdpxiIrpcBGeHKIncwnk3gj00VkkhK0vJ';
    const ontoken =(token) =>{
        console.log(token);
        alert('Payment SuccessFull');
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='Crown-Clothing'
        billingAddress
        shippingAddress
        description={`Your total price is ${price}`}
        amount={priceForStripe}
        token={ontoken}
        stripeKey={publishableKey}>
        </StripeCheckout>
    )

}

export default StripeButtonCheckOut;