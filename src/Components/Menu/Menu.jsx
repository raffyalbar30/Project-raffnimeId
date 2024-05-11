import React from 'react';
import Recomend from '../Allmenu/Recomend';
import Alltop from '../Allmenu/Alltop';
// import Seasonupcoming from '../Allmenu/Seasonupcoming';
// import Topanime from '../Allmenu/Topanime';
import Footer from '../Footer/footer';
const Menu = () => {
    return (
        <>
        <div className='w-full absolute top-0  -z-10'>
              <video className="w-full -z-10" loop>
              <source src="Img/landing-video.mp4" type="video/mp4"  className='h-12'/>
              </video>
        <div className='md:mt-12 mt-4 items-center'>
             <div className='flex justify-between items-center'>
             <p className='md:text-lg font-medium text-slate-400 md:ml-8'>RECOMENDATION ANIMELIST </p>
             <p className='md:text-sm font-medium text-slate-400 md:mr-8'>VIEW ALL</p>
             </div>
             <Recomend></Recomend>
         </div>
         <div className='md:mt-16 mt-4 items-center'>
             <div className='flex justify-between items-center'>
             <p className='md:text-lg font-medium text-slate-400 md:ml-8'>ALL TIME POPULER </p>
             <p className='md:text-sm font-medium text-slate-400 md:mr-8'>VIEW ALL</p>
             </div>
             <Alltop></Alltop>
         </div> 
         {/* <div className='md:mt-16 mt-4 items-center'>
             <div className='flex justify-between items-center'>
             <p className='md:text-lg font-medium text-slate-400 md:ml-8'>SEASON UP COMMING </p>
             <p className='md:text-sm font-medium text-slate-400 md:mr-8'>VIEW ALL</p>
             </div>
             <Seasonupcoming></Seasonupcoming>
         </div> */}
         {/* <div className='md:mt-20 mt-4 items-center'>
             <div className='flex justify-between items-center'>
             <p className='md:text-lg font-medium text-slate-400 md:ml-8'>TOP 15 ANIMELIST</p>
             <p className='md:text-sm font-medium text-slate-400 md:mr-8'>VIEW ALL</p>
             </div>
             <Topanime></Topanime>
         </div> */}
         <Footer></Footer>
        </div>
        </>
    );
}

export default Menu;
