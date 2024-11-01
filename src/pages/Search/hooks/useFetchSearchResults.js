import { useEffect, useState } from 'react'

import fetchMovieSearchResults from "../../../streams/fetchMovieSearchResults.stream"
import { handleSortedSearchResults } from "../../../utilities/sortMovie.utility"

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

    const getSearchResult = async () => {
        setIsFetching(true)
        try {
          const { results, total_results} = await fetchMovieSearchResults(searchKeyword, currentPage)
          handleSortedSearchResults(results, selectedSort, setMovieSearchResults)
          setTotalResultCount(total_results);
        } catch (error) {
          console.error(`getSearchResult Failed: Reason: ${error}`)
        }
        setIsFetching(false)
    }

    useEffect(() => {
        if (selectedSort) {
          handleSortedSearchResults(movieSearchResults, selectedSort, setMovieSearchResults);
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
