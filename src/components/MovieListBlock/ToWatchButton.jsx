import { ToWatchButtonWrapper, ToWatchBtn } from "./style";
import resetToWatchList from "../../stores/useToWatchListStore";


const ToWatchButton = ({ movieInfo }) => {
    const toWatchMovieIdList = resetToWatchList((state) => state.toWatchMovieIdList);
    const addToWatchList = resetToWatchList((state) => state.addToWatchList);
    const removeToWatchList = resetToWatchList((state) => state.removeToWatchList);

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
            {new Set(toWatchMovieIdList).has(movieInfo.id) ? (
                <ToWatchBtn onClick={handleRemoveToWatchLise}><ion-icon name="eye" size="large"></ion-icon></ToWatchBtn>
            ) : (
                <ToWatchBtn onClick={handleAddToWatchLise}><ion-icon name="eye-off" size="large"></ion-icon></ToWatchBtn>
            )}
        </ToWatchButtonWrapper>
    )
};

export default ToWatchButton;