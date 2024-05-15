import React from 'react';

const Pagination = ({page, setpage}) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 900
        })
    }
    const handlenext = () =>{
         setpage((nextdata)=> nextdata + 1);
         scrollTop()
    }
    const handleprev =() => {
        setpage((prevdata) => prevdata - 1);
        scrollTop()
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl cursor-pointer">
            {page <= 1 ? null :  <p onClick={handleprev}>Prev</p> }
            <p>{page} of 1037</p>
            {page >= 1037 ? null :  <p onClick={handlenext}>Next</p>}
        </div>
    );
}

export default Pagination;
