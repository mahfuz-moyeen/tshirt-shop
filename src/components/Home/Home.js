import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';

const Home = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])


    const handleAddtoCart = (product) => {
        const exists = cart.find(item=> item._id === product._id)
        if(!exists){
            const newCart = [...cart, product]
        setCart(newCart)
        }
        else{
            alert('Already add this item')
        }
        
    }

    const handleRemoveToCart = (product) => {
        const rest = cart.filter(item => item._id !== product._id)
        setCart(rest)
    }


    return (
        <div className=' grid grid-cols-12 w-11/12 mx-auto gap-5'>
            <div className='col-span-8 p-3 rounded-lg bg-orange-100'>
                <div className="max-w-2xl mx-auto py-5 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold text-orange-600 text-center">Customers also purchased</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                                handleAddtoCart={handleAddtoCart}
                            />)
                        }
                    </div>
                </div>
            </div>

            <div className='col-span-4 bg-orange-300 p-3 rounded-lg'>
                <Cart
                    cart={cart}
                    handleRemoveToCart={handleRemoveToCart}
                />
            </div>
        </div>
    );
};

export default Home;