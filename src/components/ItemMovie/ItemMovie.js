import React from 'react';

export default function ItemMovie({movie,index,title}) {

  return (
    <>
    {title === "Trends" && <p className='text-[140px] mr-[-2px]'>{index + 1}</p>}
    
    <img key={movie.index} className='hover:scale-110  w-[auto] h-[200px] mr-2 rounded-md transition-all' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="poster of movie" />
    </>
  )
}
