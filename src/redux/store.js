import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { moviesApi } from './movies.api';
import userClise from './slicers/userSlice';
import setMovies from './slicers/moviesSlicer';

  const store = configureStore({
    reducer: {
        user: userClise,
        movies: setMovies,
        [moviesApi.reducerPath] : moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
  })

  setupListeners(store.dispatch);
  
export default store;