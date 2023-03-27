import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

const Order = ({cart, clearCartFunc}) => {
    let totalPrice = cart.reduce((prevVal,currCart)=> prevVal+currCart.price,0)
    let totalShipping = cart.reduce((prevVal,currCart)=> prevVal+currCart.shipping,0).toFixed(0)
    let tax = (totalPrice/100*1).toFixed(0)
    let grandTotal = parseInt(totalPrice)+parseInt(totalShipping)+ parseInt(tax)
    return (
            <div className="order-summary p-4 space-y-4">
                <h2 className='font-bold text-2xl text-center py-5'>Order Summary</h2>
                <p className='font-semibold text-lg'>Selected Items: {cart.length}</p>
                <p className='font-semibold text-lg'>Total Price: ${totalPrice}</p>
                <p className='font-semibold text-lg'>Total Shipping Charge: ${totalShipping}</p>
                <p className='font-semibold text-lg'>Tax: {tax} </p>
                <p className='font-semibold text-lg'>Grand Total: ${grandTotal}</p>
                <button onClick={clearCartFunc} className='block bg-red-500 rounded-lg font-bold text-slate-50 w-full'>Clear Cart { <FontAwesomeIcon icon={faDolly} /> }</button>
                <button className='block bg-green-500 rounded-lg font-bold text-slate-50 w-full'>Review Order {<FontAwesomeIcon icon={faMagnifyingGlassDollar} />}</button>
            </div>
    );
};

export default Order;