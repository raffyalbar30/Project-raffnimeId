// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// const Seasonupcoming = () => {
//     const[Season,setSeason] = useState([]);
//     useEffect(()=> {
//         const getAllseasonup =  async () => {
//             try {
//                const data = await axios.get(`https://api.jikan.moe/v4/top/anime?limit=5`)
//                  setSeason(data.data.data);
//             } catch (error) {
//                console.log(error)
//             }
   
//         }
//         getAllseasonup()
  
//      }, []);
  
//     return (
//         <>
//         <div className='flex gap-x-8 justify-center mt-8 mr-8 ml-8'>
//                 <>
//                   {Season.map((all)=> (
//                     <div key={all.mal_id}>
//                     <img src={all.images.jpg.image_url} alt="" className='rounded-md h-[332px] w-[230px]' />
//                     <p className='text-sm mt-2 text-slate-400 font-medium text-left'>{all.title}</p>
//                      </div>
//                       ))}
                   
//                   </>
//         </div>
//      </>
//     );
// }

// export default Seasonupcoming;
