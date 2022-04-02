import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import './Header.css'
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav className='bg-orange-600'>
                <div className="h-8 w-8 md:hidden text-white cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <XIcon /> : <MenuAlt1Icon />}
                </div>
                <div className={`bg-orange-600 text-white flex flex-col md:flex-row items-center justify-end md:static w-full absolute ${open ? 'top-8': 'top-[-120px]'}`}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'order-review'}>Order Review</Link>
                </div>
            </nav>
            <h1 className='text-center my-5 text-4xl font-mono'>Welcome to  t-shirt mania</h1>
        </div>
    );
};

export default Header;