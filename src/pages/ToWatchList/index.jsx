import { useEffect, useState } from "react";

import { PageTitle, MovieListHeaderWrapper, MovieListWrapper, LotteryDisplayHint } from "./style";
import DragMovieList from "./DragMovieList";
import useToWatchListStore from "../../stores/useToWatchListStore";
import SortSelect from "../../components/SortSelect";
import { sortOptions } from "../../configs/sortOptions";
import { handleSortedSearchResults } from "../../utilities/sortMovie.utility";
import Lottery from "./Lottery";

const ToWatchList = () => {
  const toWatchList = useToWatchListStore((state) => state.toWatchList);
  const sortToWatchList = useToWatchListStore((state) => state.sortToWatchList);
  const [ selectedSort, setSelectedSort ] = useState(null);

  useEffect(() => {
    if (selectedSort) {
      handleSortedSearchResults(toWatchList, selectedSort, sortToWatchList)
    }
  }, [ selectedSort ])

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
          <SortSelect selectedSort={selectedSort} setSelectedSort={setSelectedSort} options={sortOptions}/>
        </MovieListHeaderWrapper>
        <DragMovieList movieList={toWatchList}  />
      </MovieListWrapper>
    </div>
  );
}

export default ToWatchList;
