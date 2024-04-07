import React from 'react';
import Nav from '../Navbar/Nav'; 
import Menu from '../Menu/Menu';

const Index= () => {
    return (
        <>
        <div className='bg-transparent backdrop-blur bg-opacity-70 backdrop-saturate-0 w-full h-20 -z-30'>
             <Nav></Nav>
        </div>
        <div>
              <Menu></Menu>
        </div>
        <div className='-z-20'>
            <p className='text-center md:mt-60 mt-2 md:text-5xl font-medium'>Nikonikoni Let's view my animae list </p>
            <p className='text-center md:text-5xl font-medium'>My recomended you can See narutoo</p>
        <div className='flex justify-center md:mt-8 mt-4'>
            <button className='bg-transparent md:px-28 md:p-4 px-12 p-2 rounded-xl border hover:border-slate-500'>
                Watch Animelist
            </button>
        </div>
        </div>
        </>
    );
}

export default Index;
