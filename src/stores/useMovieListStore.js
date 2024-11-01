import { create } from 'zustand';

import fetchMovieList from "../streams/fetchMovieList.stream";

const useMovieListStore = create((set) => ({
    movieList: [],
    fetchMovieList: async () => {
        const movieList = await fetchMovieList();
        set({ movieList});
    }
}))

export default useMovieListStore;