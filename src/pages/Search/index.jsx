import { useRef, useState } from "react"

import fetchMovieSearchResults from "../../streams/fetchMovieSearchResults.stream"
import MovieListBlock from "../../components/MovieListBlock"
import Pagination from "./Pagination"
import { Wapper, SearchBarWapper, SearchInput, SearchButton, SeatchResultWapper, SearchInfoBlock, SearchInfo } from "./style"

const Search = () => {
  const [ searchKeyword, setSearchKeyword ] = useState("");
  const [ movieSearchResults, setMovieSearchResults ] = useState([]);
  const [ totalResultCount, setTotalResultCount ] = useState(0);
  const timerRef = useRef(null);

  const onChangeKeyword = (e) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    timerRef.current = setTimeout(() => {
      setSearchKeyword(e.target.value);
    }, 300);
  }

  const getSearchResult = async (page) => {
    const searchResults = await fetchMovieSearchResults(searchKeyword, page)
    setMovieSearchResults(searchResults.results);
    setTotalResultCount(searchResults.total_results);
  }

  const handleClickSearch = async () => {
    await getSearchResult(1);
  }

  return (
    <Wapper>
      <SearchBarWapper>
        <SearchInput type="text" placeholder="Search for a movie..." onChange={(e) => onChangeKeyword(e)}></SearchInput>
        <SearchButton onClick={handleClickSearch}><ion-icon name="search" size="large"></ion-icon></SearchButton>
      </SearchBarWapper>
      {totalResultCount > 0 ? (
        <>
          <SeatchResultWapper>
            <SearchInfoBlock>
              <SearchInfo>搜尋結果：{totalResultCount} 筆</SearchInfo>
            </SearchInfoBlock>
            <MovieListBlock movieList={movieSearchResults} />
          </SeatchResultWapper>
          <Pagination totalItems={totalResultCount} itemsPerPage={20} onPageChange={getSearchResult}/>
        </>
      ) : null}
    </Wapper>
  );
}

export default Search;
