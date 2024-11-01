import { useRef, useState, useEffect } from "react"

import MovieListBlock from "../../components/MovieListBlock"
import MovieListBlockSkeleton from "../../components/Skeleton/MovieListBlockSkeleton"
import Pagination from "./Pagination"
import SortSelect from "../../components/SortSelect"
import useFetchSearchPageResultData from "./hooks/useFetchSearchResults"
import { sortOptions } from "./config"
import { Wapper, SearchBarWapper, SearchInput, SearchButton, SeatchResultWapper, SearchInfoBlock, SearchInfo, NoSearchResult } from "./style"

const Search = () => {
  const [ keyword, setKeyword ] = useState("");
  const [ searchKeyword, setSearchKeyword ] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ selectedSort, setSelectedSort ] = useState(null);
  const timerRef = useRef(null);

  const { isFetching, movieSearchResults, totalResultCount } = useFetchSearchPageResultData({ searchKeyword, currentPage, selectedSort })

  const onChangeKeyword = (e) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setKeyword(e.target.value);
    }, 300);
  }

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const handleClickSearch = () => {
    setSearchKeyword(keyword);
    setCurrentPage(1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchKeyword(keyword);
      setCurrentPage(1)
    }
  }

  return (
    <Wapper>
      <SearchBarWapper>
        <SearchInput type="text" placeholder="Search for a movie..." onChange={onChangeKeyword} onKeyDown={handleKeyDown} ></SearchInput>
        <SearchButton onClick={handleClickSearch}><ion-icon name="search" size="large"></ion-icon></SearchButton>
      </SearchBarWapper>
      {isFetching && (
        <MovieListBlockSkeleton />
      )}
      {!isFetching && totalResultCount > 0 ? (
        <>
          <SeatchResultWapper>
            <SearchInfoBlock>
              <SearchInfo>搜尋結果：{totalResultCount} 筆</SearchInfo>
              <SortSelect selectedSort={selectedSort} setSelectedSort={setSelectedSort} options={sortOptions}/>
            </SearchInfoBlock>
            <MovieListBlock movieList={movieSearchResults} />
          </SeatchResultWapper>
          <Pagination totalItems={totalResultCount} itemsPerPage={20} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </>
      ) : searchKeyword && totalResultCount === 0 && <NoSearchResult>無搜尋結果</NoSearchResult>}
    </Wapper>
  );
}

export default Search;
