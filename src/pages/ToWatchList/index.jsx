import { useEffect, useState } from "react";

import { PageTitle, MovieListHeaderWrapper } from "./style";
import MovieListBlock from "../../components/MovieListBlock"
import resetToWatchList from "../../stores/useToWatchListStore";
import SortSelect from "../../components/SortSelect";
import { sortOptions } from "../../configs/sortOptions"
import { handleSortedSearchResults } from "../../utilities/sortMovie.utility"

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

      </div>
      <div>
        <MovieListHeaderWrapper>
          <PageTitle> 待看清單 </PageTitle>
          <SortSelect selectedSort={selectedSort} setSelectedSort={setSelectedSort} options={sortOptions}/>
        </MovieListHeaderWrapper>
        <MovieListBlock movieList={displayToWatchList} />
      </div>
    </div>
  );
}

export default ToWatchList;
