import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';


const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-times'>
        { cartItems.map(cartItem => 
            (<CartItem item={cartItem} key={cartItem.id}/> ) )}
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);