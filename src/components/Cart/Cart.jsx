import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

const Cart = ({ cart, clearCartFunc, children }) => {
    let totalQuantity = cart.reduce((prevVal, currCart) => prevVal + currCart.quantity, 0)
    let totalPrice = cart.reduce((prevVal, currCart) => prevVal + (currCart.price * currCart.quantity), 0)
    let totalShipping = cart.reduce((prevVal, currCart) => prevVal + (currCart.shipping * currCart.quantity), 0).toFixed(0)
    let tax = (totalPrice / 100 * 1).toFixed(0)
    let grandTotal = parseInt(totalPrice) + parseInt(totalShipping) + parseInt(tax)
    return (
        <div className="order-summary p-4 space-y-4 text-lg font-semibold">
            <h2 className='text-4xl text-center py-5'>Order Summary</h2>
            <p>Selected Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: {tax} </p>
            <p>Grand Total: ${grandTotal}</p>
            <button onClick={clearCartFunc} className='block bg-red-500 rounded-lg font-bold text-slate-50 w-full'>Clear Cart {<FontAwesomeIcon icon={faDolly} />}</button>
            {children}
        </div>
    );
};

export default Cart;