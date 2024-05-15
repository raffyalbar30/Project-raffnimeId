import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/footer';
import { Raffnimeapi } from '../../libs/Api';

const Viewmanga = () => {
    const [page,setpage] = useState(1);
    const [Topmangaka, setTopmangaka] = useState([]);

    const getAllMangaka = async() => {
        try {
            const Response = await Raffnimeapi(`top/manga?page=${page}`);
            setTopmangaka(Response.data.data);
         } catch (error) {
            console.log(error);
         }
    }

    useEffect(()=> {
        getAllMangaka();
    }, [page]);

    return (
        <>
        <div className='w-full absolute top-0 -z-10'>
        <video className="w-full -z-10" loop>
        <source src="Img/landing-video.mp4" type="video/mp4"  className='h-12'/>
        </video>
        {/* MAPING LOAD DATA'S ALL ANIME */}
        <div className='mt-12'>
        <p className='md:text-lg font-medium text-slate-400 md:ml-8'>TOP MANGAKA #{page}</p>
          <div className='grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 justify-center mt-8 ml-4 mr-4 gap-4'>
            <>
              {Topmangaka.map(dataress => (
                <div key={dataress.mal_id}>
                <img src={dataress.images.jpg.image_url} alt="" className='rounded-md h-[332px] w-[230px]' />
                <p className='text-sm mt-2 text-slate-400 font-medium text-left'>{dataress.title}</p>
                 </div>
                 ))}
              </>
           </div>
        </div>
              {/* PAGINATION COMPONENT */}
              <Pagination page={page} setpage={setpage}></Pagination>
              {/* FOOTER */}
           <Footer></Footer>
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

export default Viewmanga;
