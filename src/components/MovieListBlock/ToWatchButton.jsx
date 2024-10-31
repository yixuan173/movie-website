import { ToWatchButtonWrapper, ToWatchBtn } from "./style";
import useMovieListStore from "../../stores/useToWatchListStore";


const ToWatchButton = ({ movieInfo }) => {
    const toWatchMovieIdSet = useMovieListStore((state) => state.toWatchMovieIdSet);
    const addToWatchList = useMovieListStore((state) => state.addToWatchList);
    const removeToWatchList = useMovieListStore((state) => state.removeToWatchList);

    const handleRemoveToWatchLise = (e) => {
        e.stopPropagation();
        removeToWatchList(movieInfo.id);
    }

    const handleAddToWatchLise = (e) => {
        e.stopPropagation();
        addToWatchList(movieInfo);
    }
    
    return (
        <ToWatchButtonWrapper>
            {toWatchMovieIdSet?.has(movieInfo.id) ? (
                <ToWatchBtn onClick={handleRemoveToWatchLise}><ion-icon name="eye" size="large"></ion-icon></ToWatchBtn>
            ) : (
                <ToWatchBtn onClick={handleAddToWatchLise}><ion-icon name="eye-off" size="large"></ion-icon></ToWatchBtn>
            )}
        </ToWatchButtonWrapper>
    )
};

export default ToWatchButton;