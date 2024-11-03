import { TMDB_API_PATH, TMDB_IMG_URL } from "../constants/api.constant";
import { TOAST_ERROR } from "../constants/toast.constant";
import { openToast } from "../utilities/toast.utility";

const mappingMovieList = (results) => {
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
 * @typedef {Object} MovieList
 * @property {number} id - 序號
 * @property {string} title - 名稱
 * @property {string} imgUrl - 電影海報網址
 * @property {string} releaseDate - 發行日期
 * @property {number} voteAverage - 評論平均得分
 */
/**
 * @description 取得電影列表（目前僅用來取得熱門電影）
 * @returns {MovieList[]} 
 */
const fetchMovieList = async () => {
    try {
        const apiUrl = `${TMDB_API_PATH}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `${process.env.API_TOKEN}`,
            }
        };

        const response = await fetch(apiUrl, options);
        if (response.status >= 400) {
            throw new Error(`fetchMovieList API Failed!`);
        }

        const data = await response.json();
        if (!data) {
            throw new Error(`fetchMovieList Error: No data.`);
        }

        return mappingMovieList(data.results);
    } catch (error) {
        console.error("fetchMovieList Failed: Reason: ", error);
        openToast(TOAST_ERROR, "系統忙碌中，請稍後再試");
        return [];
    }
}


export default fetchMovieList;