import { ToWatchButtonWrapper, ToWatchBtn } from "./style";
import resetToWatchList from "../../stores/useToWatchListStore";
import { openToast } from "../../utilities/toast.utility"
import { TOAST_SUCCESS } from "../../constants/toast.constant"


const ToWatchButton = ({ movieInfo }) => {
    const toWatchMovieIdList = resetToWatchList((state) => state.toWatchMovieIdList);
    const addToWatchList = resetToWatchList((state) => state.addToWatchList);
    const removeToWatchList = resetToWatchList((state) => state.removeToWatchList);

    const handleRemoveToWatchLise = (e) => {
        e.stopPropagation();
        removeToWatchList(movieInfo.id);
        openToast(TOAST_SUCCESS, "移除待看清單成功");
    }

    const handleAddToWatchLise = (e) => {
        e.stopPropagation();
        addToWatchList(movieInfo);
        openToast(TOAST_SUCCESS, "加入待看清單成功");
    }
    
    return (
        <ToWatchButtonWrapper>
            {new Set(toWatchMovieIdList).has(movieInfo.id) ? (
                <ToWatchBtn onClick={handleRemoveToWatchLise}><ion-icon name="eye" size="large"></ion-icon></ToWatchBtn>
            ) : (
                <ToWatchBtn onClick={handleAddToWatchLise}><ion-icon name="eye-outline" size="large"></ion-icon></ToWatchBtn>
            )}
        </ToWatchButtonWrapper>
    )
};

export default ToWatchButton;