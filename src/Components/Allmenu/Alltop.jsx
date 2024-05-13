
import { useState, useEffect } from 'react';
import { Raffnimeapi } from '../../libs/Api';


const Alltop = () => {
   const [Alltop, setAlltop] = useState([]);
   const getAlltop =  async () => {
       try {
          const data = await Raffnimeapi(`top/manga?limit=5`)
            setAlltop(data.data.data);
       } catch (error) {
          console.log(error)
       }

   }

   useEffect(()=> {
      getAlltop();
   }, []);


    return (
       <>
          <div className='flex gap-x-8 justify-center mt-8 mr-8 ml-8'>
                     {Alltop.map((dataress)=>(
                          <>
                           <div key={dataress.mal_id}>
                              <img src={dataress.images.jpg.image_url} alt="" className='rounded-md h-[320px] w-[230px]' />
                               <p className='text-xs mt-2 text-slate-400 font-medium text-left'>{dataress.title}</p>
                           </div>
                          </>
                     ))}
          </div>
       </>
    );
}

export default Alltop;

