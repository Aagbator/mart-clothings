import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout-item.styles.scss';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const { name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={() => addItem(cartItem)} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
   // cartItem: cartItem
});

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);