import { IoCloseOutline } from "react-icons/io5";
import axios from 'axios';
import React, { useEffect, useState} from 'react';



const SerchAnime = () => {
    const [getInput, setgetInput] = useState();
    const [Filter, setFilter] = useState([]);
    const Handlechange = (e) => {
           setgetInput(e.target.value)
    }

    const Fecthapi = async () => {
        try {
                const Url = `https://api.jikan.moe/v4/anime?q=${getInput}`;
                const response = await axios.get(Url);
                setFilter(response.data.data)
            } catch (error) {
               console.log(error)
            }
        }
        useEffect(() => {
            Fecthapi() 
        }, [])
        console.log(Filter)

    return (
        <>
        <div className='md:mr-4 mr-2 pt-2'>
         <div className="max-w-md mx-auto">   
            <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    </svg>
                </div>
                <input type="text"  onChange={Handlechange} name='serch' className="block w-full px-48  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Animee...." required /> 
                 <button  onClick={Fecthapi} className="text-white absolute end-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> 
            </div>
        </div>
          <div id='serch' className='h-[45vh] w-[400px] bg-gray-800 mt-5 rounded-lg overflow-y-auto overflow-auto scrollbar scrollbar-thumb-blue-500'>
              <div className='ml-4 pt-4'>
                  <div className='flex justify-between items-center'>
                  <span>Hasil pencaharian {getInput}</span>
                  <IoCloseOutline className="text-2xl mr-2"/>
                  </div>
                   {Filter.map((ress) => (
                      <>
                      <div className='flex pt-4'>
                      <img src={ress.images.jpg.image_url} alt="" className='w-14 rounded-sm' />
                      <div>
                       <p className='text-xs text-left mr-2'>{ress.title}</p>
                      </div>
                      </div>
                      </>
                   ))}
              </div>
          </div>
       </div> 
            
        </>
    );
}

export default SerchAnime;
