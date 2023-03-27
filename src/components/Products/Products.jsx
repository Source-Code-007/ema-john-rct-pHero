import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';

const Products = () => {
    let [data, setData] = useState([])
    let [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(products => setData(products.slice(0, 6)))
    }, [])

    // cartFunc
    function cartFunc(price) {
        let newCart = [...cart, price]
        setCart(newCart)
    }
    //clearCart
    function clearCartFunc() {
        setCart([])
    }

    return (
        <div className='container max-w-7xl mx-auto py-14 space-y-10'>
            <h2 className='font-bold text-center text-4xl'>Your Products</h2>
            <div className='grid grid-cols-12 gap-4'>
                <div className='products col-span-9 grid grid-cols-3 gap-5'>
                    {
                        data.map(product => <Product cartFunc={cartFunc} product={product} key={product.id} />)
                    }
                </div>
                <div className='order col-span-3 self-baseline bg-orange-200 h-auto rounded-lg'>
                    <Order cart={cart} clearCartFunc={clearCartFunc} />
                </div>
            </div>
        </div>
    );
};

export default Products;