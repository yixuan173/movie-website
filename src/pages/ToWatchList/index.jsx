import { useEffect, useState } from "react";

import { PageTitle, MovieListHeaderWrapper, MovieListWrapper, LotteryDisplayHint } from "./style";
import MovieListBlock from "../../components/MovieListBlock"
import resetToWatchList from "../../stores/useToWatchListStore";
import SortSelect from "../../components/SortSelect";
import { sortOptions } from "../../configs/sortOptions"
import { handleSortedSearchResults } from "../../utilities/sortMovie.utility"
import Lottery from "./Lottery";

const ToWatchList = () => {
  const toWatchList = resetToWatchList((state) => state.toWatchList);
  const [ selectedSort, setSelectedSort ] = useState(null);
  const [ displayToWatchList, setDisplayToWatchList ] = useState([]);

  useEffect(() => {
    if (selectedSort) {
      handleSortedSearchResults(toWatchList, selectedSort, setDisplayToWatchList);
    } else {
      setDisplayToWatchList(toWatchList);
    }
  }, [ toWatchList ])

  useEffect(() => {
    if (selectedSort) {
      handleSortedSearchResults(toWatchList, selectedSort, setDisplayToWatchList)
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
        <MovieListBlock movieList={displayToWatchList} />
      </MovieListWrapper>
    </div>
  );
}

export default ToWatchList;
