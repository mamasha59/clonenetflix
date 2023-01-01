import React from 'react';
import axios from '../../utils/fetch';

import ItemMovie from '../ItemMovie/ItemMovie';
import { SliderButtonIcon } from '../../icons/icons';

export default function List({requestUrl,title}) {

  const [movieT, setMovieT] = React.useState([]);
  const ref = React.useRef(null);

  React.useEffect(()=>{
    async function fetchData(){
       const request = await axios.get(requestUrl);
       setMovieT(request.data.results);
       return request;
    }
    fetchData()
  },[requestUrl])

  const moveScroll = (scrollOffset) =>{
    ref.current.scrollLeft += scrollOffset;
  }

  return (
  <>
    {!movieT ? "preloader " : 
    (<div className='flex flex-col ml-12 mb-8 sm:ml-6'>
      <h2 className='text-[22px] font-bold'>{title}</h2>
      <div className='relative'>
        <button onClick={() => moveScroll(-500)} className='absolute top-[40%] left-0 z-10'><SliderButtonIcon styles={'text-5xl text-[red]'}/></button>
        <div ref={ref} className='flex py-8 overflow-x-scroll overflow-y-hidden scrollbar-hide items-baseline transition-all scroll-smooth'>
          {movieT.map((movie,index) => <ItemMovie movie={movie} key={movie.id} index={index} title={title}/>
          )}
        </div>
        <button onClick={() => moveScroll(+500)} className='absolute top-[40%] right-0 z-10'><SliderButtonIcon styles={'text-5xl rotate-180 text-[red]'}/></button>
      </div>

    </div>
    )}
  </>
  )
}
