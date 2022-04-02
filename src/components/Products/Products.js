import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product'


const Products = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])
    const handleAddtoCart = (product) => {
        const newCart =[...cart,product]
    }
    return (
        <div>
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
    );
};

export default Products;