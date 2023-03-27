import React from 'react';

let Product = ({ product, cartFunc }) => {
    let { img, name, price, category, seller } = product
    return (
        <div className='rounded-lg p-4 bg-orange-200 space-y-2 relative'>
            <img src={img} alt={name} className='w-full h-96' />
            <div className='h-48'>
                <h2 className='text-xl font-semibold'>Name: {name}</h2>
                <p className='text-xl font-semibold'>Price: {price}$</p>
                <h3 className='text-xl font-semibold'>Category: {category}</h3>
                <h2 className='text-xl font-semibold'>Manufacturer: {seller}</h2>
                <button onClick={()=> cartFunc(price)} className='absolute bottom-2 left-2/4 -translate-x-2/4 bg-orange-500 rounded-lg px-4 py-2 font-bold text-slate-50 focus:outline-none'>Add to cart</button>
            </div>
        </div>
    )
}

export default Product;
