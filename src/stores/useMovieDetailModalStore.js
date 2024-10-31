import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import fetchMovieDetail from "../streams/fetchMovieDetail.stream"


const useMovieDetailModalStore = create(devtools((set) => ({
    movieDetail: {},
    isOpen: false,
    isFetching: false,
    fetchMovieDetail: async (id) => {
        set({ isFetching: true});
        const data = await fetchMovieDetail(id);
        set({ movieDetail: data, isOpen: true, isFetching: false});
    },
    openModal: () => set({ isOpen: true}),
    closeModal: () => set({ isOpen: false})
})))

export default useMovieDetailModalStore;