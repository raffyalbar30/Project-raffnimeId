import React, { useEffect, useState } from 'react';
import { Raffnimeapi } from '../../../libs/Api';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/footer';
import { CiPlay1 } from "react-icons/ci";
import { AiTwotoneCloseCircle } from "react-icons/ai";


const Detail = () => {
   
    let { id } = useParams();
    const [getDetail, setgetDetail] = useState([]);
    const [vidioplayer, setvidioplayer] = useState(true);
    const detaildata =  async () => {
        try {
            const Response = await Raffnimeapi(`anime/${id}`);
            setgetDetail(Response.data.data);
            console.log(Response.data.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        detaildata();
    }, []);

    const Handlevidioplayer = () => {
        setvidioplayer(true);
    }

    const Handleclosevidioplayer = () => {
        setvidioplayer(false);
    }


    return (
        <>
         <div className='w-full absolute top-0  -z-10'>
         {/* <video className="w-full -z-10" loop>
              
         </video> */}
        <div className='mt-24 ml-4'>
             {/* <div className='mt-4'>
                  <img src={getDetail.images.jpg.image_url} alt={getDetail.images.jpg.image_url} className='rounded-lg'/>  
            </div>  */}
            <div className='pb-4 pt-6'>
              <p className='text-2xl font-semibold'>{getDetail.title} / {getDetail.title_japanese}</p>
              <p>{getDetail.year} | {getDetail.rating}</p>  
              <p>{ getDetail.episodes} / { getDetail.duration}</p>
               <div className='pt-2 '>
                   <button className='px-8 py-2 border rounded-lg flex items-center gap-x-2 hover:border-blue-700' onClick={Handlevidioplayer}>
                    { <CiPlay1 className='text-lg' />}
                      View Trailer
                    </button>
               </div>
            </div>
            <div className='text-justify mr-8'>
               <p className='text-xl'>{getDetail.synopsis}</p>
            </div>  
        </div> 
          <div className={`fixed bottom-2 right-2 ${vidioplayer ? 'active' : 'hidden'}`}>
            <AiTwotoneCloseCircle onClick={Handleclosevidioplayer} />
            <iframe width="420" height="315"
               src={getDetail.trailer.url}>
            </iframe>  
         </div>  
       <Footer></Footer>
        </div>

        </>    
    );
}

export default Detail;
