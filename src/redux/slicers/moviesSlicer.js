import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
}

export const moviesSlicer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state,action) => {
      state.movies = action.payload;
    },
    clearMovies: () => initialState,
  },
})

export const { setMovies,clearMovies } = moviesSlicer.actions;

export default moviesSlicer.reducer;