import React from 'react';

import { WatchIcon,AboutIcon } from '../../icons/icons';

export default function Preview({movie}) {
  
  return (
   <section className='h-[56vw] xl:h-[100%] flex pt-[25%] px-12 flex-col bg-center bg-cover mb-6 bg-default pb-4 md:px-6' 
    style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
        <div className='flex flex-col mb-6'>
               <h1 className='text-8xl lg:text-6xl mb-5 lit:text-4xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
               <h2 className='max-w-[400px] max-h-32 md:text-sm'>{movie.overview === undefined ? ""  : (movie.overview.length > 150 ? movie.overview.substring(0,150)+"...": movie.overview)}</h2>
        </div>
        <div className='flex mt-2 lit:flex-col'>
            <button className='max-w-[200px] lit:max-h-10 hover text-xl pl-7 pr-8 py-1 bg-[#fff] text-[#000] mr-4 rounded-md flex items-center font-medium md:text-sm md:px-5 md:py-[2px] lit:mb-4 lit:px-3 lit:max-w-[150px]'><WatchIcon styles={'mr-2 text-4xl'}/>Смотреть</button>
            <button className='max-w-[200px] lit:max-h-10 hover text-xl pl-7 pr-8 py-1 bg-[#726d6dcc] text-[#fff] rounded-md flex items-center font-medium md:text-sm md:px-5 md:py-[2px] lit:px-3 lit:max-w-[150px]'><AboutIcon styles={'mr-2 text-4xl'}/>Подробнее</button>
        </div>
        <div className='bg-gradient'></div>
    </section>
  )
}
