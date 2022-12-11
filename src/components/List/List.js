import React from 'react'
import axios from '../../utils/fetch';

export default function List({requestUrl,title}) {

  const [movieT, setMovieT] = React.useState([]);

  React.useEffect(()=>{
    async function fetchData(){
       const request = await axios.get(requestUrl);
       setMovieT(request.data.results);
       return request;
    }
    fetchData()
  },[requestUrl])
console.log(movieT)
  return (
  <>
    {!movieT ? "preloader " : 
    (<div className='flex flex-col ml-12 mb-8'>
      <h2 className='text-[22px] font-bold mb-2'>{title}</h2>
      <div className='flex overflow-x-scroll overflow-y-hidden scrollbar-hide items-baseline'>
        {movieT.map((movie,index) => (
          <>
            <p className='text-[140px] mr-[-2px]'>{index + 1}</p>
            <img key={movie.id} className='w-[auto] h-[200px] mr-2 rounded-md' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="" />
      
          </>
        ))}
      </div>
    </div>
    )}
  </>
  )
}
