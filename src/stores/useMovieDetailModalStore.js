import { create } from 'zustand';

import fetchMovieDetail from "../streams/fetchMovieDetail.stream";

const useMovieDetailModalStore = create((set, get) => ({
    movieDetail: {},
    isOpen: false,
    isFetching: false,
    handleOpenModal: async (id) => {
        set({ isFetching: true});
        if (get().movieDetail.id === id) {
            set({ isOpen: true, isFetching: false});
        } else {
            const { data, isSuccess } = await fetchMovieDetail(id);
            set({ movieDetail: data, isOpen: isSuccess, isFetching: false});
        }
    },
    closeModal: () => set({ isOpen: false})
}))

export default useMovieDetailModalStore;