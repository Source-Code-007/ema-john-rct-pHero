import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import { clearLS } from '../../utilities/fakeDB';

const Order = () => {
    let storedCart = useLoaderData()
    let [cart, setCart] = useState(storedCart)

    // delete product functionality
    function deleteItems(product) {
        // delete items from cart
        let deleteProduct = cart.filter(dltPd => dltPd._id !== product._id)
        setCart(deleteProduct)

        // delete items from local storage
        let localStorageData = JSON.parse(localStorage.getItem('cartItem'))
        if (product._id in localStorageData) {
            delete localStorageData[product._id]
        }
        localStorage.setItem('cartItem', JSON.stringify(localStorageData))
    }
    // clear cart 
    const handleClearCart = ()=>{
        setCart([])
        clearLS()
    }

    return (
        <section className='grid grid-cols-12 py-20 gap-14 max-w-7xl mx-10 xl:mx-auto'>
            <div className='col-span-8 px-14 space-y-5'>
                {
                    cart.length?
                    cart.map(product => <OrderReview deleteItems={deleteItems} key={product._id} product={product} />)
                    : <h2 className='font-bold text-3xl h-[50vh] flex items-center justify-center'>No item available</h2>
                }
            </div>
            <div className='col-span-4 sticky top-2 self-baseline bg-orange-200 rounded-lg'>
                <Cart cart={cart} clearCartFunc={handleClearCart}>
                    <Link to='/checkout'><button disabled={!cart.length? true : false} className={`block mt-3 rounded-lg font-bold text-slate-50 w-full ${!cart.length? 'bg-green-300': 'bg-green-500'}`}>Proceed to checkout {<FontAwesomeIcon icon={faMagnifyingGlassDollar} />}</button></Link>
                </Cart>
            </div>
        </section>
    );
};

export default Order;