import React from 'react';

const OrderReview = ({ product, deleteItems }) => {
    const { id, name, img, price, shipping, category, quantity } = product
    return (
        <div className='flex justify-between items-center border-2 p-3 border-green-500 rounded-lg'>
            <div className='flex w-3/6 items-center gap-5'>
                <figure>
                    <img className='h-16 w-16' src={img} alt="" />
                </figure>
                <div>
                    <h3>Name: {name}</h3>
                    <p>Price: {price}$</p>
                    <p>Shipping: {shipping}$</p>
                    <p>Product Quantity: {quantity}$</p>
                </div>
            </div>
            <div>
                <button onClick={()=>deleteItems(product)} className='bg-orange-500 rounded-lg'>Delete</button>
            </div>
        </div>
    );
};

export default OrderReview;