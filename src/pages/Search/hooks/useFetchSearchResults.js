import { useEffect, useState } from 'react'

import fetchMovieSearchResults from "../../../streams/fetchMovieSearchResults.stream"

/**
 * 取得電影搜尋結果
 *
 * @param {string} searchKeyword  搜尋關鍵字
 * @param {number} currentPage  頁數
 * @param {} selectedSort  排序方式
 */
const useFetchSearchPageResultData = ({searchKeyword, currentPage, selectedSort}) => {
    const [ isFetching, setIsFetching ] = useState(false);
    const [ movieSearchResults, setMovieSearchResults ] = useState([]);
    const [ totalResultCount, setTotalResultCount ] = useState(0);

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

    const getSearchResult = async () => {
        setIsFetching(true)
        try {
          const { results, total_results} = await fetchMovieSearchResults(searchKeyword, currentPage)
          handleSortedSearchResults(results)
          setTotalResultCount(total_results);
        } catch (error) {
          console.error(`getSearchResult Failed: Reason: ${error}`)
        }
        setIsFetching(false)
    }

    useEffect(() => {
        if (selectedSort) {
          handleSortedSearchResults(movieSearchResults);
        }
      }, [ selectedSort ]);

    useEffect(() => {
        if (currentPage && searchKeyword) {
            getSearchResult()
        }
    }, [ searchKeyword, currentPage ])

    return {
        isFetching,
        movieSearchResults,
        totalResultCount
    }
}

export default useFetchSearchPageResultData
