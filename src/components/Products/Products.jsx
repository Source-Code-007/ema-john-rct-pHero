import React, { useEffect, useState } from 'react';
import { clearLS, storedInLS } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])

    // fetch json data
    useEffect(() => {
        fetch('http://localhost:1000/products')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])


    //get data from local storage
    // useEffect(() => {
    //     let storedData = JSON.parse(localStorage.getItem('cartItem'))
    //     let newArr = []
    //     for (let id in storedData) {
    //         let existProduct = products.find(product => product.id === id)
    //         if (existProduct) {
    //             existProduct.quantity = storedData[id]
    //             newArr.push(existProduct)
    //         }
    //     };
    //     // console.log(newArr);
    //     setCart(newArr) //infinity loop
    // }, [products])

    // get data from local storage using custom hook
    let storedCart = useLoaderData()
    useEffect(() => {
        setCart(storedCart)
    }, [products])

    // cartFunc
    function cartFunc(product) {
        // We are updating the quantity for an existing product and add a new product with 1 quantity. 
        let newCart = []
        let existProduct = cart.find(pd => pd._id === product._id)
        if (existProduct) {
            existProduct.quantity += 1
            let restProduct = cart.filter(pd => pd._id !== product._id)
            newCart = [...restProduct, existProduct]
        } else {
            product.quantity = 1
            newCart = [...cart, product]
        }
        setCart(newCart)

        storedInLS(product._id) //localStorage
    }

      // clear cart 
      const handleClearCart = ()=>{
        setCart([])
        clearLS()
    }


    return (
        <div className='container max-w-7xl mx-auto py-14 space-y-10'>
            <h2 className='font-bold text-center text-4xl'>Your Products</h2>
            <div className='grid grid-cols-12 gap-4'>
                <div className='products col-span-9 grid grid-cols-3 gap-5'>
                    {
                        products.map(product => <Product cartFunc={cartFunc} product={product} key={product._id} />)
                    }
                </div>
                <div className='cart sticky top-6 col-span-3 self-baseline bg-orange-200 h-auto rounded-lg'>
                    <Cart cart={cart} clearCartFunc={handleClearCart}>
                        <Link to='/order'><button className='block mt-3 bg-green-500 rounded-lg font-bold text-slate-50 w-full'>Review Order {<FontAwesomeIcon icon={faMagnifyingGlassDollar} />}</button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;