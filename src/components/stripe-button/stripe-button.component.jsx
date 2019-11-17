import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {


    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_xvcnVGc3nBssXaezxsMXyVLZ';

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing limited'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total price is $${priceForStripe}`}
            amount={price}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
