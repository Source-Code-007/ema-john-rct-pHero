import React from 'react';

let Product = ({ product, cartFunc }) => {
    let { img, name, price, category, seller } = product
    return (
        <div className='rounded-lg bg-green-300 space-y-2 relative'>
            <img src={img} alt={name} className='h-72 w-full' />
            <div className='h-64 p-4 space-y-2 text-lg'>
                <h2>Name: {name}</h2>
                <p>Price: {price}$</p>
                <h3>Category: {category}</h3>
                <h2>Manufacturer: {seller}</h2>
                <button onClick={()=> cartFunc(product)} className='absolute bottom-0 left-2/4 -translate-x-2/4 bg-green-500 w-full rounded-lg py-3 font-bold text-slate-50 focus:outline-none'>Add to cart</button>
            </div>
        </div>
    )
}

export default Product;
