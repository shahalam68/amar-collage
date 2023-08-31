import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="bg-purple-600 header-container">
            <nav className="mx-auto flex max-w-7xl items-center justify-between  lg:px-8 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="#" className=" p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-24 w-auto" src="/logo.png" alt="" />
                    </Link>
                </div>
                <div className=" lg:flex lg:gap-x-8">
                    <Link to="/" className="text-base font-semibold leading-6 text-white hover:text-orange-400 ">Home</Link>
                    <Link to="/courses" className="text-base font-semibold leading-6 text-white hover:text-orange-400">Courses</Link>
                    <Link to="/about" className="text-base font-semibold leading-6 text-white hover:text-orange-400">About</Link>
                    <Link to="/contact" className="text-base font-semibold leading-6 text-white hover:text-orange-400">Contact US</Link>
                    <Link className='pl-12 text-white hover:text-orange-400 text-xl'><FontAwesomeIcon icon ={faShoppingCart} /></Link>
                </div>
            </nav>

        </header>
    );
};

export default Header;