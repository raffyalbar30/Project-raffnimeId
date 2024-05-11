import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <>
        <div className='w-full border border-gray-700 mt-12'></div>
        <div className='bg-transparent bg-opacity-80 w-full h-full mt-4'>
             <div className='mt-8 flex justify-between'>
                  <div className='pt-12 ml-8 pb-8'>
                      <p className='text-2xl font-semibold'>👋 Hello !! terimakasih sudah berkunjung di RaffnimeId</p>
                      <div className='pt-2'>
                      <p className='text-[15px] text-slate-300'>Sebenernya masih banyak site animelist yang lebih bagus kenapa disini ?</p>
                      <p className='text-[15px] text-slate-300'>Tapi engga pph ko makasih ya udah berkunjung selamat explore beberapa animelist disini yak.</p>
                      <p className='text-[15px] text-slate-300'>Aligatoo !!!</p>
                      </div>
                  </div>
                  <div className='pt-12 pb-8 ml-6 cursor-pointer'>
                      <p className='text-2xl font-semibold'>Sitemap</p>
                      <div className='pt-4'>
                      <p className='text-[20px] text-slate-300'>Beranda</p>
                      <p className='text-[20px] text-slate-300 pt-2'>Fitur-fitur</p>
                      <p className='text-[20px] text-slate-300 pt-2'>Teknologi</p>
                      <p className='text-[20px] text-slate-300 pt-2'>FAQ</p>
                      <p className='text-[20px] text-slate-300 pt-2'>Animelisted</p>
                      <p className='text-[20px] text-slate-300 pt-2'>Open API</p>
                      </div>
                  </div>
                  <div className='pl-4 mr-2 cursor-pointer'>
                  <div className='pt-12 pb-8'>
                      <p className='text-2xl font-semibold'>Let's try Comunication</p>
                      <div className='pt-4'>
                      <p className='text-[15px] text-slate-300'>Lihat beberapa mediasosial admin yang ganteng !!</p>
                      <p className='text-[15px] text-slate-300'>di beberapa media sosial berikut :</p>
                      <div className='flex gap-x-4 pt-8'>
                          <div className='flex justify-center'>
                          <FaInstagram className='mt-2 text-[25px]' />
                          </div>
                          <div className='flex justify-center'>
                          <FaFacebook className='mt-2 text-[25px]' />
                          </div>
                          <div className='flex justify-center'>
                          <FaTwitter className='mt-2 text-[25px]' />
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
             </div>
        </div>
        </>
    );
}

export default Footer;
