import { Raffnimeapi } from '../../libs/Api';
import { useEffect, useState } from 'react';

const Recomend = () => {
   const [recomended, setrecomended] = useState([]);
         const getAllrecomend = async () => {
             try {
                const Response = await Raffnimeapi(`top/anime?limit=5`);
                setrecomended(Response.data.data);
             } catch (error) {
               console.log(error)
             }
         }
         useEffect(()=> {
            getAllrecomend();
         }, []);

         
 
    return (
       <>
          <div className='flex gap-x-8 justify-center mt-8 mr-8 ml-8'>
                  <>
                    {recomended.map(dataress => (
                      <div key={dataress.mal_id}>
                      <img src={dataress.images.jpg.image_url} alt="" className='rounded-md h-[332px] w-[230px]' />
                      <p className='text-sm mt-2 text-slate-400 font-medium text-left'>{dataress.title}</p>
                       </div>
                       ))}
                    </>
          </div>
       </>
    );
}

export default Recomend;

