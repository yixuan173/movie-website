import { toast, Zoom } from 'react-toastify';

import { TOAST_SUCCESS, TOAST_ERROR, TOAST_INFO } from "../constants/toast.constant"

const defaultOptions = {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Zoom,
}

export const openToast = (type, msg, options) => {
    switch (type) {
        case TOAST_SUCCESS: {
            toast.success(msg, {
               ...defaultOptions,
               ...options
               
            });
            break;
        }
        case TOAST_ERROR: {
            toast.error(msg, {
                ...defaultOptions,
                ...options
             });
             break;
        }
        case TOAST_INFO: {
            toast.info(msg, {
                ...defaultOptions,
                ...options
             });
             break;
        }
        default: {
            toast(msg, {
                ...defaultOptions,
                ...options
             });
             break;
        }
    }

    
}
