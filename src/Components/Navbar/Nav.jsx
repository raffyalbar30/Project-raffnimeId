import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex justify-between items-center'> 
                 <p className='md:ml-4 mr-4 ml-2 md:text-2xl font-medium'><Link to={`/`}>Raffnime.id</Link></p>
            </div>
        </div>
    );
}

export default Nav;
