import React from 'react';
import Nav from '../Navbar/Nav';
import SerchAnime from '../SecrhAnime/SerchAnime';

const Views = () => {
    return (
        <>
        <div id="navbar" className='bg-transparent bg-opacity-80 backdrop-saturate-0 w-full h-20 -z-30 flex justify-between'>
        <Nav></Nav>
        <SerchAnime></SerchAnime>
         </div>
        <div>
            <div>Benner</div>
            <div>allconten</div>
            <div>Pagination</div>
        </div>
        </>
    );
}

export default Views;
