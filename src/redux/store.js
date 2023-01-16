import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'

import { moviesApi } from './movies.api';
import userClise from './userSlice';

  const store = configureStore({
    reducer: {
        user: userClise,
        [moviesApi.reducerPath] : moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
  })

  setupListeners(store.dispatch);
  
export default store;