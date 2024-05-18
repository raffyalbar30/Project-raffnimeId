import React, { useEffect, useState } from 'react';
import { Raffnimeapi } from '../../../libs/Api';
import { useParams } from 'react-router-dom';


const Detail = () => {
    let { id } = useParams();
    const [getDetail, setgetDetail] = useState([]);
    const detaildata =  async () => {
        try {
            const Response = await Raffnimeapi(`anime/${id}`);
            console.log(Response.data.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        detaildata();
    }, []);
    return (
                <>
                <p>hello world</p>
                    {getDetail.map(detailress => (
                      <div>
                      <img src={detailress.images.jpg.image_url} alt="" className='rounded-md h-[332px] w-[230px]' />
                      <p className='text-sm mt-2 text-slate-400 font-medium text-left'>{detailress.title}</p>
                       </div>
                 
                       ))} 
                    </>
    );
}

export default Detail;
