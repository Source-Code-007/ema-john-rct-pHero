import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';

const Order = () => {
    let products = useLoaderData()
    let [storedProducts, setStoredProducts] = useState(products)

    // delete product functionality
    function deleteItems(product){
        let deleteProduct = storedProducts.filter(dltPd => dltPd.id !== product.id)
        setStoredProducts(deleteProduct)
    }
    return (
        <section className='grid grid-cols-12 py-20 gap-14 max-w-7xl mx-10 xl:mx-auto'>
            <div className='col-span-8 px-14 space-y-5'>
                {
                    storedProducts.map(product => <OrderReview deleteItems={deleteItems} key={product.id} product={product} />)
                }
            </div>
            <div className='col-span-4 sticky top-2 self-baseline bg-orange-200 rounded-lg'>
                <Cart cart={storedProducts} clearCartFunc={()=>setStoredProducts([])}></Cart>
            </div>
        </section>
    );
};

export default Order;