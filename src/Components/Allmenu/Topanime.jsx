import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdStarHalf } from "react-icons/md";
import { PiFilmSlateBold } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";
import { FaBookOpenReader } from "react-icons/fa6";




const Topanime = () => {
    const [Topten,setTopten] = useState([]);
    useEffect(()=> {
        const getAlltopten =  async () => {
            try {
               const data = await axios.get(`https://api.jikan.moe/v4/top/anime?limit=15`)
                 setTopten(data.data.data);
            } catch (error) {
               console.log(error)
            }
   
        }
        getAlltopten()
  
     }, []);
    return (
         <> 
            <div>
                 <div className=''>
                      {Topten.sort(function(a, b){return a.rank - b.rank }).map(all => (
                          <>
                             <div className=' ml-8 flex items-center'  key={all.mal_id}>
                                 <p className='md:text-xl font-medium text-slate-400 mr-4'>#{all.rank}</p>
                                   <div className=' pt-4 w-full mr-24'>
                                         <div className='bg-slate-600 flex p-2 relative rounded-sm w-full items-center'>
                                               <img src={all.images.jpg.image_url} alt="" className=' h-[55px] w-[45px] items-center' />
                                                <div className='ml-6 pt-2'>
                                                  <div className='flex'>
                                                     <p className=' text-xs mr-4'>{all.title}</p>
                                                     <p className=' text-xs mr-4'>{all.title_synonyms}</p>
                                                  </div> 
                                                     <div className='flex gap-x-2 pt-1'>
                                                       <MdStarHalf />
                                                       <p className='text-xs '>{all.score}</p>
                                                       <PiFilmSlateBold />
                                                       <p className='text-xs '>{all.episodes}</p>
                                                       <IoEyeSharp />
                                                       <p className='text-xs '>{all.members}</p>
                                                     <div className='absolute right-0 mr-12 top-1 pt-2 flex gap-x-2'>
                                                         <FaBookOpenReader className='text-4xl' />
                                                     </div>
                                                     </div>
                                                </div>
                                         </div>
                                   </div>
                             </div>
                          </>
                      ))}
                 </div>
            </div>
         </>
    );
}

export default Topanime;
