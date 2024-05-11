import { IoCloseOutline, IoEyeSharp } from "react-icons/io5";
import axios from 'axios';
import React, { useEffect, useRef, useState} from 'react';
import { MdStarHalf } from "react-icons/md";
import { PiFilmSlateBold } from "react-icons/pi";




const SerchAnime = () => {
    const [getInput, setgetInput] = useState();
    const [Filter, setFilter] = useState([]);
    const [click, setclick] = useState();
    const [isLoading,setisLoading] = useState(false);
    const component = useRef();


    const Handlechange = (e) => {
     setgetInput(e.target.value)
    }

    useEffect(() => {
        const Outside = (e) =>{
           if (!component.current.contains(e.target)) {
              setclick(false)
           }
        }
  
        document.addEventListener("mousedown", Outside);
        return ()=> document.removeEventListener("mousedown", Outside);
     });
  

    const Fecthapi = async () => {
        try {
                setisLoading(true);
                const Url = `https://api.jikan.moe/v4/anime?q=${getInput}`;
                const response = await axios.get(Url);
                setFilter(response.data.data);
            } catch (error) {
               console.log(error);   
            } finally {
                setisLoading(false)
            }
        }

    const handleclick = (event) => {
        const valideteinput = getInput.trim();
        if (valideteinput == 0 ) return
            event.preventDefault() 
            setclick(true);
            Fecthapi();
    }
     const handleclose = () => {
         setclick(false);
    }


    return (
        <>
        <div className='md:mr-4 mr-2 pt-2 '>
         <div className="max-w-md mx-auto">   
            <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    </svg>
                </div>
                <input type="text"  onChange={Handlechange} name='serch' className="block w-full px-48  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Animee...." required /> 
                 <button  onClick={handleclick} disabled={isLoading} className=" text-white absolute end-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-4 py-2  disabled:opacity-50">Search</button> 
            </div>
        </div>

              <div id='serch' ref={component} className={`${click ?  'active' : 'hidden' } rounded-lg h-[45vh] w-[400px] bg-gray-800 mt-5 overflow-y-auto overflow-auto scrollbar scrollbar-thumb-blue-500 transition-opacity-30 inset-0  transition-all duration-200 ease-in-out `}>
                  <div className='ml-4 pt-4'>
                      <div className='flex justify-between items-center'>
                      <span>Hasil pencaharian {getInput}</span>
                      <IoCloseOutline className="text-2xl mr-2 cursor-pointer" onClick={handleclose}/>
                      </div>
                       {isLoading &&  <div  className="flex justify-center mt-24" role="status">
                               <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                             </svg>
                             <span class="sr-only">Loading...</span>
                              </div>
                        }
                       {!isLoading && Filter.map((ress) => (
                          <>
                          <div className='flex pt-4 pb-4'>
                          <img src={ress.images.jpg.image_url} alt="" className='w-14 rounded-sm' />
                          <div className="pl-2 pt-2">
                           <p className='text-xs text-left mr-2 cursor-pointer'>{ress.title}</p>
                           <div className="pt-2 flex">
                           <MdStarHalf />
                             <p className='text-xs pl-1 pr-2'>{ress.score}</p>
                           <PiFilmSlateBold />
                              <p className='text-xs pl-1 pr-2'>{ress.episodes}</p>
                            <IoEyeSharp />
                                <p className='text-xs '>{ress.members}</p>
                          </div>
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
