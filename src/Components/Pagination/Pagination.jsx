import React from 'react';

const Pagination = ({page, setTopanime}) => {
    const handlenext = () =>{
         setTopanime((nextdata)=> nextdata + page);
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            <p>Prev</p>
            <p>{page} of 1068</p>
            <p onClick={handlenext}>Next</p>
        </div>
    );
}

export default Pagination;
