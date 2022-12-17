import React from 'react';
import requests from './utils/requests';

import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';

import List from './components/List/List';
import axios from './utils/fetch';

export default function App() {

const [movie,setMovie] = React.useState([]);

React.useEffect(()=>{ // rendering random background images from movie api
  async function fetchData(){
     const request = await axios.get(requests.fetchNetflixOriginals);
     setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]
     )
     return request;
  }
  fetchData()
},[])

  return (
    <div className='my-0 mx-auto pb-8 text-[#fff] bg-default'>
    <Header/>
    <Preview movie={movie}/>
    <List requestUrl={requests.fetchTrend} title={"Trends"}/>
    <List requestUrl={requests.fetchTrend} title={"Horor"}/>
    <List requestUrl={requests.fetchTrend} title={"Top rated"}/>
    </div>
  );
}