import React from 'react';
import requests from '../../utils/requests';

import Header from '../Header/Header';
import Preview from '../Preview/Preview';
import List from '../List/List';

import instance from '../../utils/fetch';

export default function Movies({handleSignOut}) {

const [movie,setMovie] = React.useState([]);

React.useEffect(()=>{ // rendering random background images from movie api
  async function fetchData(){
     const request = await instance.get(requests.fetchNetflixOriginals);
     setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]
     )
     return request;
  }
  fetchData()
},[])

  return (
    <div className='my-0 mx-auto pb-8 text-[#fff] bg-default'>
    <Header handleSignOut={handleSignOut}/>
    <Preview movie={movie}/>
    <List requestUrl={requests.fetchTrend} title={"Trends"}/>
    <List requestUrl={requests.fetchTrend} title={"Horror"}/>
    <List requestUrl={requests.fetchTrend} title={"Top rated"}/>
    </div>
  );
}