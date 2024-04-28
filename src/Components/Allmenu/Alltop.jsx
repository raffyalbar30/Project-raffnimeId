import axios from 'axios';
import { useState, useEffect } from 'react';
const Alltop = () => {
   const [Alltop, setAlltop] = useState([]);
   useEffect(()=> {
      const getAlltop =  async () => {
          try {
             const data = await axios.get(`https://api.jikan.moe/v4/top/manga?limit=5`)
               setAlltop(data.data.data);
          } catch (error) {
             console.log(error)
          }
 
      }
      getAlltop()

   }, []);

   

    return (
       <>
          <div className='flex gap-x-8 justify-center mt-8 mr-8 ml-8'>
                     {Alltop.map((all)=>(
                          <>
                           <div key={all.mal_id}>
                              <img src={all.images.jpg.image_url} alt="" className='rounded-md h-[320px] w-[230px]' />
                               <p className='text-xs mt-2 text-slate-400 font-medium text-left'>{all.title}</p>
                           </div>
                          </>
                     ))}
          </div>
       </>
    );
}

export default Alltop;

