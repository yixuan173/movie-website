import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


const useValidateModalStore = create(devtools((set) => ({
    isOpen: true,
    isPass: false,
    setPass: () => set({ isPass: true}),
    closeModal: () => set({ isOpen: false})
})))

export default useValidateModalStore;