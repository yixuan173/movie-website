import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const initialState = {
    toWatchList: [],
    toWatchMovieIdList: [],
  }

const useToWatchListStore = create(persist((set) => ({
    ...initialState,
    addToWatchList: (movieInfo) => {
        set((state) => ({
            toWatchList: [...state.toWatchList, movieInfo],
            toWatchMovieIdList: [...state.toWatchMovieIdList, movieInfo.id],
        }))
    },
    removeToWatchList: (movieId) => {
        set((state) => {
            const newToWatchMovieIdSet = new Set(state.toWatchMovieIdList);
            newToWatchMovieIdSet.delete(movieId);
            return {
                toWatchList: state.toWatchList.filter((movie) => movie.id !== movieId),
                toWatchMovieIdList: [...newToWatchMovieIdSet]
            };
        })
    },
    resetToWatchList: () => {
        set(initialState)
    },
}), {
    name: 'toWatchList',
    storage: createJSONStorage(() => localStorage),
}))

export default useToWatchListStore;