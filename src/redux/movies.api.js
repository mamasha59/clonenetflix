import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = 'e3c78a5cca4e3688b69d82279cbe4fc4';

export const moviesApi = createApi({
    reducerPath: 'api/movies',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints: (builder) => ({
        getMoviesNetflix: builder.query({
            query: () => `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        }),
        getMoviesTrends: builder.query({
            query: () => `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        })
    })
})

export const {useGetMoviesNetflixQuery, useGetMoviesTrendsQuery} = moviesApi;
