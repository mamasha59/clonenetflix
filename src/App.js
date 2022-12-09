import React from 'react';
import requests from './utils/requests';
import axios from 'axios';

import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';

export default function App() {

const [movie,setMovie] = React.useState([]);

React.useEffect(()=>{
  async function fetchData(){
     const request = await axios.get('https://api.themoviedb.org/3'+requests.fetchNetflixOriginals);
     setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
     )
     return request;
  }
  fetchData()
},[])
// console.log(movie)

  return (
    <div className='my-0 text-[#fff] bg-[grey]'>
     <Header/>
     <Preview movie={movie}/>
    </div>
  );
}