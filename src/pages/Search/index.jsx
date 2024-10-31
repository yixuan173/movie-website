import { useRef, useState, useEffect } from "react"

import fetchMovieSearchResults from "../../streams/fetchMovieSearchResults.stream"
import MovieListBlock from "../../components/MovieListBlock"
import Pagination from "./Pagination"
import SortSelect from "./SortSelect"
import { sortOptions } from "./config"
import { Wapper, SearchBarWapper, SearchInput, SearchButton, SeatchResultWapper, SearchInfoBlock, SearchInfo } from "./style"

const Search = () => {
  const [ searchKeyword, setSearchKeyword ] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ selectedSort, setSelectedSort ] = useState(null);
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

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  useEffect(() => {
    if (selectedSort) {
      console.log("useEffect", selectedSort)
      handleSortedSearchResults(movieSearchResults);
    }
  }, [selectedSort])

  const handleSortedSearchResults = (searchResults) => {
    let sortedResults = [...searchResults];

    switch (selectedSort?.value) {
      case "dateDESC": {
        sortedResults.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        break;
      }
      case "dateASC": {
        sortedResults.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
        break;
      }
      case "rateDESC": {
        sortedResults.sort((a, b) => b.vote_average - a.vote_average);
        break;
      }
      case "rateASC": {
        sortedResults.sort((a, b) => a.vote_average - b.vote_average);
        break;
      }
      default: {
        break;
      }
    }
    setMovieSearchResults(sortedResults);
  }

  const getSearchResult = async (page) => {
    try {
      const { results, total_results} = await fetchMovieSearchResults(searchKeyword, page)
      handleSortedSearchResults(results)

      setCurrentPage(page);
      setTotalResultCount(total_results);
    } catch (error) {
      console.error(`getSearchResult Failed: Reason: ${error}`)
    }
  }

  const handleClickSearch = () => {
    getSearchResult(1);
    setCurrentPage(1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      getSearchResult(1)
      setCurrentPage(1)
    }
  }

  return (
    <Wapper>
      <SearchBarWapper>
        <SearchInput type="text" placeholder="Search for a movie..." onChange={onChangeKeyword} onKeyDown={handleKeyDown} ></SearchInput>
        <SearchButton onClick={handleClickSearch}><ion-icon name="search" size="large"></ion-icon></SearchButton>
      </SearchBarWapper>
      {totalResultCount > 0 ? (
        <>
          <SeatchResultWapper>
            <SearchInfoBlock>
              <SearchInfo>搜尋結果：{totalResultCount} 筆</SearchInfo>
              <SortSelect selectedSort={selectedSort} setSelectedSort={setSelectedSort} options={sortOptions}/>
            </SearchInfoBlock>
            <MovieListBlock movieList={movieSearchResults} />
          </SeatchResultWapper>
          <Pagination totalItems={totalResultCount} itemsPerPage={20} onPageChange={getSearchResult} currentPage={currentPage}/>
        </>
      ) : null}
    </Wapper>
  );
}

export default Search;
