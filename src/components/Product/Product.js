import { ShoppingCartIcon } from '@heroicons/react/solid';
import React from 'react';

const Product = ({ product,handleAddtoCart }) => {
    const { _id, index, price, picture, name, gender } = product;
    return (
        <div className="group relative">
            <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={picture}
                    alt={name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="">{name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{gender}</p>
                </div>
                <div>
                <p className="font-medium text-gray-900">${price}</p>
                <button onClick={()=>handleAddtoCart(product)}><ShoppingCartIcon className='w-6 h-6 hover:text-orange-600'/> </button>
                </div>
            </div>
        </div>
    );
};

export default Product;