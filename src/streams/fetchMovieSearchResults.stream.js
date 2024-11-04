import { TMDB_IMG_URL, TMDB_API_PATH } from "../constants/api.constant";
import { TOAST_ERROR } from "../constants/toast.constant";
import { openToast } from "../utilities/toast.utility";

const mappingMovieSearchResults = (results) => {
  if (results?.length === 0) return [];

  return results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      imgUrl: `${TMDB_IMG_URL}${movie.poster_path}`,
      releaseDate: movie.release_date,
      voteAverage: movie.vote_average
  }))
};

/**
 * @typedef {Object} MovieSearchResults
 * @property {number} id - 序號
 * @property {string} title - 名稱
 * @property {string} imgUrl - 電影海報網址
 * @property {string} releaseDate - 發行日期
 * @property {number} voteAverage - 評論平均得分
 */
/**
 * @typedef {Object} SearchResults
 * @property {MovieSearchResults[]} results - 電影搜尋結果
 * @property {number} totalResults - 總搜尋筆數
 */
/**
 * @description 取得電影搜尋結果
 * @param {string} keyword - 關鍵字
 * @param {number} page - 當前頁數
 * @returns {SearchResults}
 */
const fetchMovieSearchResults = async (keyword, page) => {
  try {
      const apiUrl = `${TMDB_API_PATH}search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`;
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `${import.meta.env.VITE_API_TOKEN}`,
          }
      };

      const response = await fetch(apiUrl, options);
      if (response.status >= 400) {
          throw new Error(`fetchMovieSearchResults API Failed!`);
      }
      
      const data = await response.json();
      if (!data) {
        throw new Error(`fetchMovieSearchResults Error: No data.`);
      }
      
      return {
        results: mappingMovieSearchResults(data.results),
        totalResults: data.total_results
      };
  } catch (error) {
      console.error("fetchMovieSearchResults Failed: Reason: ", error);
      openToast(TOAST_ERROR, "系統忙碌中，請稍後再試");
      return {
        results: [],
        totalResults: 0
      };
  }
}


export default fetchMovieSearchResults;