import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';

const Cart = ({ cart, handleRemoveToCart }) => {
    let command;
    const handleCommand = () => {
        if (cart.length === 0) {
            command = <p>Please Add some items</p>
            return 'bg-red-500'
        }
        else if (cart.length < 3) {
            command = <p>Add 3 items..</p>
            return 'bg-yellow-500'
        }
        else if (cart.length > 3) {
            command = <p>wow ! You add up to 3 items</p>
            return 'bg-blue-500'
        }
        else {
            command = <p>Thank you for add 3</p>
            return 'bg-green-500'
        }
    }
    handleCommand();
    return (
        <div>
            <h2 className='text-center text-xl'>Cart</h2>
            <h2 className='text-center text-sm'>Add Item: {cart.length}</h2>
            <div className={`p-2 my-3 w-11/12 mx-auto text-center rounded-full text-white ${handleCommand()}`}>{command}</div>
            <div>
                {
                    cart.map(item =>
                        <div className='w-11/12 mx-auto flex justify-between items-center gap-4 my-5'>
                            <img src={item.picture} alt={item.name} className='w-10 h-10 rounded-full' />
                            <h2>{item.name}</h2>
                            <button onClick={() => handleRemoveToCart(item)}>
                                <TrashIcon className='w-6 h-6 hover:text-red-600' />
                            </button>
                        </div>
                    )
                }
            </div>
            <div className='text-center my-3 text-white'>
                {
                    cart.length === 0 ?
                        ''
                        :
                        cart.length < 3 ?
                            <p className='bg-orange-500 p-2 rounded-full'>No discount</p>
                            :
                            <p className='bg-green-500 p-2 rounded-full'>You got 50% discount</p>
                }
            </div>
        </div>
    );
};

export default Cart;