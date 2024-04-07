import React from 'react';


const Nav = () => {
    return (
        <div>
            <div className='flex justify-between items-center  '>
                 <p className='md:ml-4 mr-4 ml-2 md:text-2xl font-medium'>Raffnime.id</p>
                  {/* input serch */}
                   <div className='md:mr-4 mr-2 pt-2'>
                    <form className="max-w-md mx-auto">   
                        <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full px-48  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Animee...." required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                     </div>         

            </div>
        </div>
    );
}

export default Nav;
