import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    let storedCart = useLoaderData()
    let [cart, setCart] = useState(storedCart)

    // delete product functionality
    function deleteItems(product) {
        // delete items from cart
        let deleteProduct = cart.filter(dltPd => dltPd.id !== product.id)
        setCart(deleteProduct)

        // delete items from local storage
        let localStorageData = JSON.parse(localStorage.getItem('cartItem'))
        if (product.id in localStorageData) {
            delete localStorageData[product.id]
        }
        localStorage.setItem('cartItem', JSON.stringify(localStorageData))
    }

    return (
        <section className='grid grid-cols-12 py-20 gap-14 max-w-7xl mx-10 xl:mx-auto'>
            <div className='col-span-8 px-14 space-y-5'>
                {
                    cart.map(product => <OrderReview deleteItems={deleteItems} key={product.id} product={product} />)
                }
            </div>
            <div className='col-span-4 sticky top-2 self-baseline bg-orange-200 rounded-lg'>
                <Cart cart={cart} clearCartFunc={() => setCart([])}>
                    <Link to='/checkout'><button className='block mt-3 bg-green-500 rounded-lg font-bold text-slate-50 w-full'>Proceed to checkout {<FontAwesomeIcon icon={faMagnifyingGlassDollar} />}</button></Link>
                </Cart>
            </div>
        </section>
    );
};

export default Order;