import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialState = {
    toWatchList: [],
    toWatchMovieIdSet: new Set(),
  }

const useToWatchListStore = create(devtools((set) => ({
    ...initialState,
    addToWatchList: (movieInfo) => {
        set((state) => ({
            toWatchList: [...state.toWatchList, movieInfo],
            toWatchMovieIdSet: new Set(state.toWatchMovieIdSet).add(movieInfo.id)
        }))
    },
    removeToWatchList: (movieId) => {
        set((state) => {
            const newToWatchMovieIdSet = new Set(state.toWatchMovieIdSet);
            newToWatchMovieIdSet.delete(movieId);
            return {
                toWatchList: state.toWatchList.filter((movie) => movie.id !== movieId),
                toWatchMovieIdSet: newToWatchMovieIdSet
            };
        })
    },
    resetToWatchList: () => {
        set(initialState)
    },
})))

export default useToWatchListStore;