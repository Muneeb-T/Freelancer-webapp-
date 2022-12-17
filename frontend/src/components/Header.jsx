import React from 'react';
import logo from '../assets/logo.png';
function Header() {
    return (
        <header className='bg-gray-900 p-3 px-10 md:px-20  bg-opacity-20 fixed w-full'>
            <div className='container flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-auto rounded-[40%] bg-gray-300 shadow-lg' src={logo} alt='logo' />
                    <p className='text-gray-100 text-4xl font-bold drop-shadow-md hidden sm:block'>
                        Freelancer
                    </p>
                </div>

                <div className='flex items-center gap-3'>
                    <button className='bg-transparent border border-gray-300  py-2 px-3 lg:px-5 font-bold text-gray-100 rounded hover:bg-gray-100 hover:text-gray-900'>
                        Login
                    </button>
                    <button className='bg-transparent border border-gray-300  py-2 px-3 lg:px-5 font-bold text-gray-100 rounded hover:bg-gray-100 hover:text-gray-900'>
                        Signup
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
