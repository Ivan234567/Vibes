import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommends: null,
    shows: null,
    streams: null,
    trending: null,
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
      setMovies: (state, action) => {
        state.recommends = action.payload.recommends;
        state.shows = action.payload.shows;
        state.streams = action.payload.streams;
        state.trending = action.payload.trending;
      },
    },
  });
  
  export const { setMovies } = movieSlice.actions;
  
  export const selectRecommend = (state) => state.movie.recommends;
  export const selectShows = (state) => state.movie.shows;
  export const selectStreams = (state) => state.movie.streams;
  export const selectTrending = (state) => state.movie.trending;
  
  export default movieSlice.reducer;