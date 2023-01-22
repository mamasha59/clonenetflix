import React, { Suspense } from 'react';
import { useGetMoviesTrendsQuery } from '../../redux/movies.api';

import Header from '../Header/Header';
import Preview from '../Preview/Preview';
import LoaderMovies from '../../Loaders/LoaderMovies/MovieLoader';

const ListOfMovies = React.lazy(()=> import('../ListOfMovies/ListOfMovies'));

export default function Main({handleSignOut}) {

  const {data, error, isLoading} = useGetMoviesTrendsQuery(); // fetch movie - trend

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
    <Preview/>
    <Suspense fallback={<LoaderMovies/>}>
      <ListOfMovies title={"Trends"} data={data} error={error} isLoading={isLoading}/>
      <ListOfMovies title={"Horror"} data={data} error={error} isLoading={isLoading}/>
      <ListOfMovies title={"Top rated"} data={data} error={error} isLoading={isLoading}/>
    </Suspense>

    </div>
  );
}