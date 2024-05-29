import React from 'react';
import Nav from '../Navbar/Nav'; 
import Menu from '../Menu/Menu';
import SerchAnime from '../SecrhAnime/SerchAnime';
import { useRef } from 'react';
import { useEffect } from 'react';
import Typed from "typed.js";


const Index= () => {
    const type = useRef();

    useEffect(() => {
        var typed = new Typed( type.current, {
            strings: [
                'Let see my recomended anime !!🚀🤔',
                'cek my recomended👇'
              ],
              typeSpeed: 100,
              loop: true,
              showCursor: true,
              cursorChar: '|',
              startDelay: 2000,
              fadeOut: true,
      
          });
          return () => {
            typed.destroy();
          };
      
    }, []);

    
    return (
        <>
        <div id="navbar" className='bg-transparent bg-opacity-80 backdrop-saturate-0 w-full h-20 -z-30 flex justify-between'>
             <Nav></Nav>
             <SerchAnime></SerchAnime>
        </div>
        <div>
              <Menu></Menu>
        </div>
        <div className='-z-20'>
            <p className='text-center md:mt-60 mt-2 md:text-5xl font-medium'> Hello !! Need help ? </p>
            <p className='text-center  md:text-5xl font-medium' ref={type}></p>
        <div className='flex justify-center md:mt-8 mt-4'>
            <button className='bg-transparent md:px-28 md:p-4 px-12 p-2 rounded-xl border hover:border-slate-500'>
                check my list
            </button>
        </div>
        </div>
        </>
    );
}

export default Index;
