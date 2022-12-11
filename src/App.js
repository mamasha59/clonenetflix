import React from 'react';
import requests from './utils/requests';

import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';

import List from './components/List/List';
import axios from './utils/fetch';

export default function App() {

const [movie,setMovie] = React.useState([]);

React.useEffect(()=>{
  async function fetchData(){
     const request = await axios.get(requests.fetchNetflixOriginals);
     setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
     )
     return request;
  }
  fetchData()
},[])
// console.log(movie)

  return (
    <div className='my-0 mx-auto pb-8 text-[#fff] bg-[#000]'>
    <Header/>
    <Preview movie={movie}/>
    <List requestUrl={requests.fetchTrend} title={"Trends"}/>
    {/* <List requestUrl={requests.fetchTrend} title={"Horor"}/>
    <List requestUrl={requests.fetchTrend} title={"Top rated"}/>
    <List requestUrl={requests.fetchTrend} title={"Trends"}/> */}
    </div>
  );
}