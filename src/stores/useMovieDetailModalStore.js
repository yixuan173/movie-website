import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import fetchMovieDetail from "../streams/fetchMovieDetail.stream"


const useMovieDetailModalStore = create(devtools((set) => ({
    movieDetail: {},
    movieId: null,
    isOpen: false,
    isFetching: false,
    setMovieId: (id) => set({ movieId: id}),
    fetchMovieDetail: async (id) => {
        set({ isFetching: true});
        const data = await fetchMovieDetail(id);
        set({ movieList: data, isOpen: true, isFetching: false});
    },
    openModal: () => set({ isOpen: true}),
    closeModal: () => set({ isOpen: false})
})))

export default useMovieDetailModalStore;