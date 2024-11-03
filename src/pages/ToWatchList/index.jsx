import { useEffect, useState } from "react";

import { PageTitle, MovieListHeaderWrapper, MovieListWrapper, LotteryDisplayHint, ChangeSortTypeButton, SortControllWrapper, CustomHint } from "./style";
import DragMovieList from "./DragMovieList";
import useToWatchListStore from "../../stores/useToWatchListStore";
import SortSelect from "../../components/SortSelect";
import { sortOptions } from "../../configs/sortOptions";
import { handleSortedSearchResults } from "../../utilities/sortMovie.utility";
import Lottery from "./Lottery";
import { openToast } from "../../utilities/toast.utility"
import { TOAST_INFO } from "../../constants/toast.constant"

const ToWatchList = () => {
  const toWatchList = useToWatchListStore((state) => state.toWatchList);
  const sortToWatchList = useToWatchListStore((state) => state.sortToWatchList);
  const [ selectedSort, setSelectedSort ] = useState(null);
  const [ isCustomSort, setIsCustomSort ] = useState(false);

  useEffect(() => {
    if (selectedSort) {
      handleSortedSearchResults(toWatchList, selectedSort, sortToWatchList)
    }
  }, [ selectedSort ])

  const handleSortTypeChange = () => {
    if (isCustomSort) {
      openToast(TOAST_INFO, "切換成系統排序", { autoClose: 1000 });
    } else {
      openToast(TOAST_INFO, "切換成自訂排序", { autoClose: 1000 });
    }
    setIsCustomSort((prevIsCustomSort) => !prevIsCustomSort)
  }

  return (  
    <div>
      <div> 
        <PageTitle> 為我推薦 </PageTitle>
        {toWatchList.length > 1 ? (
          <Lottery movieList={toWatchList} />
        ) : (
          <LotteryDisplayHint>加入一部以上的電影，即可開啟『為我推薦』功能</LotteryDisplayHint>
        )}
      </div>
      <MovieListWrapper>
        <MovieListHeaderWrapper>
          <PageTitle> 待看清單 </PageTitle>
          <SortControllWrapper>
            <ChangeSortTypeButton onClick={handleSortTypeChange}><ion-icon name="swap-vertical"></ion-icon></ChangeSortTypeButton>
            {isCustomSort ? (
              <CustomHint>自訂排序 (請拖拉電影卡)</CustomHint>
            ) : (
              <SortSelect selectedSort={selectedSort} setSelectedSort={setSelectedSort} options={sortOptions}/>
            )}
          </SortControllWrapper>
        </MovieListHeaderWrapper>
        <DragMovieList movieList={toWatchList} isCustomSort={isCustomSort} />
      </MovieListWrapper>
    </div>
  );
}

export default ToWatchList;
