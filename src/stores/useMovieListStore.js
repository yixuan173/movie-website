import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import fetchMovies from "../streams/fetchMovies.stream"


const useMovieListStore = create(devtools((set) => ({
    movieList: [],
    getMovieList: async () => {
        const data = await fetchMovies();
        set({ movieList: data});
    }
})))

export default useMovieListStore;