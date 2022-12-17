import React from 'react';
import heroClipart from '../assets/hero-clipart.png';
import heroBackground from '../assets/hero-bg.jpeg';
function Hero() {
    return (
        <div
            className='h-[100vh] flex items-center justify-center'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${heroBackground}')`,
                backgroundSize: 'cover',
            }}>
            <div className='max-w-[80%] md:max-w-2xl space-y-4 '>
                <p className='text-4xl lg:text-5xl text-gray-100 font-bold drop-shadow-md'>
                    Find the perfect freelance services for your buissness
                </p>
                <div className='flex rounded gap-1'>
                    <input
                        type='text'
                        className='w-full px-5 py-3 rounded focus:outline-none drop-shadow-sm'
                        placeholder='Search here...'
                    />
                    <button className='bg-transparent border border-gray-300 px-3 lg:px-5 font-bold text-gray-100 rounded hover:bg-gray-100 hover:text-gray-900 drop-shadow-md'>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
