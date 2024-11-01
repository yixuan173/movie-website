import { create } from 'zustand'

const useValidateModalStore = create((set) => ({
    isOpen: true,
    isPass: false,
    setPass: () => set({ isPass: true}),
    closeModal: () => set({ isOpen: false})
}))

export default useValidateModalStore;