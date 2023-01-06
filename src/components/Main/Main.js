import React, { Suspense } from 'react';

import Header from '../Header/Header';
import Preview from '../Preview/Preview';
import LoaderMovies from '../../Loaders/LoaderMovies/MovieLoader';

const ListOfMovies = React.lazy(()=> import('../ListOfMovies/ListOfMovies'));

export default function Main({handleSignOut,movie,requests}) {

const menu = [
  {title:"Главная"},
  {title:"Сериалы"},
  {title:"Фильмы"},
  {title:"Новинки и популярное"},
  {title:"Мой список"},
  {title:"Поиск по языку"},
];

  return(
    <div className='my-0 mx-auto pb-8 text-[#fff] bg-default'>
    <Header handleSignOut={handleSignOut} titles={menu}/>
    <Preview movie={movie}/>
    <Suspense fallback={<LoaderMovies/>}>
      <ListOfMovies requestUrl={requests.fetchTrend} title={"Trends"}/>
      <ListOfMovies requestUrl={requests.fetchTrend} title={"Horror"}/>
      <ListOfMovies requestUrl={requests.fetchTrend} title={"Top rated"}/>
    </Suspense>

    </div>
  );
}