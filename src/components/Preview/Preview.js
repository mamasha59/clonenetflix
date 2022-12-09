import React from 'react';

import { BsFillPlayFill } from 'react-icons/bs';
import { RiAddFill } from 'react-icons/ri';

export default function Preview({movie}) {
  
  function cut(string,n){
   return string?.length > n ? string.subtring(0, n - 1) + "...": string;
  }

  return (
    <section className='h-[56vw] flex justify-start pt-[25%] px-12 flex-col bg-center bg-cover' 
    style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
        <div className='flex flex-col mb-6'>
               <h1 className='text-8xl mb-5'>{movie?.title || movie?.name || movie?.original_name}</h1>
               <h2 className='max-w-[400px] max-h-32'>{movie?.overview}</h2>
        </div>
        <div className='flex mt-2'>
            <button className='hover text-xl p-6 pr-8 bg-[#fff] text-[#000] mr-4 py-1 rounded-md flex items-center font-medium'><BsFillPlayFill className='mr-2 text-4xl'/>Смотреть</button>
            <button className='hover text-xl p-6 pr-8 bg-[#726d6d] text-[#fff] py-1 rounded-md flex items-center font-medium'><RiAddFill className='mr-2 text-4xl'/>Подробнее</button>
        </div>
    </section>
  )
}
