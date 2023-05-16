import React, { useEffect, useState } from 'react';
import { clearLS, storedInLS } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
    let [totalProducts, setTotalProducts] = useState([])
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(15)

    // fetch total products for pagination button
    useEffect(() => {
        fetch(`http://localhost:1000/products`)
            .then(res => res.json())
            .then(tProducts => setTotalProducts(tProducts))
    }, [])

    // fetch json data
    useEffect(() => {
        fetch(`http://localhost:1000/products?currentPage=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [currentPage, itemsPerPage])

    // get data from local storage using custom hook
    let storedCart = useLoaderData()
    useEffect(() => {
        setCart(storedCart)
    }, [])

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
    const handleClearCart = () => {
        setCart([])
        clearLS()
    }


    // For pagination (actually for pagination button)
    const totalProductPerPage = Math.ceil(totalProducts.length / itemsPerPage)
    const totalPage = [...Array(totalProductPerPage).keys()]
    console.log(totalProducts.length);


    return (
        <div className='container max-w-7xl mx-auto py-14 space-y-10'>
            <h2 className='font-bold text-center text-4xl'>Your Products</h2>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-9'>
                    <div className=' grid grid-cols-3 gap-5'>
                        {
                            products.map(product => <Product cartFunc={cartFunc} product={product} key={product._id} />)
                        }
                    </div>
                    <div className='text-center my-4 space-x-2'>
                        <p>Current Page: {currentPage}</p>
                        {
                            totalPage && totalPage.map((pageNumber) => {
                                return <button onClick={() => setCurrentPage(pageNumber)} key={pageNumber} className={`${pageNumber === currentPage ? 'bg-green-500' : 'bg-green-200'}`}>{pageNumber}</button>
                            })
                        }
                    </div>
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