import React from 'react'
import axios from '../../utils/fetch';
import ItemMovie from '../ItemMovie/ItemMovie';

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

  return (
  <>
    {!movieT ? "preloader " : 
    (<div className='flex flex-col ml-12 mb-8'>
      <h2 className='text-[22px] font-bold mb-2'>{title}</h2>
      <div className='flex overflow-x-scroll overflow-y-hidden scrollbar-hide items-baseline'>
        {movieT.map((movie,index) => <ItemMovie movie={movie} key={movie.id} index={index} title={title}/>
        )}
      </div>
    </div>
    )}
  </>
  )
}
