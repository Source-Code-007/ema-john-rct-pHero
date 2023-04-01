import React, { useEffect, useState } from 'react';
import { fakeDB } from '../../utilities/fakeDB';
import Order from '../Order/Order';
import Product from '../Product/Product';

const Products = () => {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])

    // fetch json data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    //get data from local storage
    useEffect(() => {
        let storedData = JSON.parse(localStorage.getItem('cartItem'))
        let newArr = []
        for (let id in storedData) {
            let existProduct = products.find(product => product.id === id)
            if (existProduct) {
                existProduct.quantity = storedData[id]
                newArr.push(existProduct)
            }
        };
        // console.log(newArr);
        setCart(newArr) //infinity loop
    }, [products])


    // cartFunc
    function cartFunc(product) {
        // let newCart = [...cart, product]

        // We are updating the quantity for an existing product and add a new product with 1 quantity. 
        let newCart = []
        let existProduct = cart.find(pd => pd.id === product.id)
        if (existProduct) {
            existProduct.quantity += 1
            let restProduct = cart.filter(pd => pd.id !== product.id)
            newCart = [...restProduct, existProduct]
        } else {
            product.quantity = 1
            newCart = [...cart, product]
        }
        setCart(newCart)

        fakeDB(product.id) //localStorage
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
                        products.map(product => <Product cartFunc={cartFunc} product={product} key={product.id} />)
                    }
                </div>
                <div className='order sticky top-0 col-span-3 self-baseline bg-orange-200 h-auto rounded-lg'>
                    <Order cart={cart} clearCartFunc={clearCartFunc} />
                </div>
            </div>
        </div>
    );
};

export default Products;