import { TMDB_API_PATH, TMDB_IMG_URL } from "../constants/api.constant";
import { TOAST_ERROR } from "../constants/toast.constant"
import { openToast } from "../utilities/toast.utility"

/**
 * 過濾重複 id 以及未有照片的人物資料
 */
const filterUnusefulData = (arr) => {
  const uniqueMap = new Map();
  return arr.filter(item => {
    if (!uniqueMap.has(item.id) && item.profile_path) {
      uniqueMap.set(item.id, true);
      return true;
    }
    return false;
  });
}

/**
 * @typedef {Object} MovieDetail
 * @property {number} id - 序號
 * @property {string} title - 名稱
 * @property {string} imgUrl - 電影海報網址
 * @property {string} releaseDate - 發行日期
 * @property {number} voteAverage - 評論平均得分
 * @property {string} overview - 電影簡介
 * @property {Object} credits - 卡司
 */
/**
 * @description 取得電影詳細資訊
 * @param {number} id - 電影序號
 * @returns {MovieDetail} 
 */
const fetchMovieDetail = async (id) => {
    try {
        const apiUrl = `${TMDB_API_PATH}movie/${id}?append_to_response=reviews,credits&language=en-US`;
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `${process.env.API_TOKEN}`,
            }
        };

        const response = await fetch(apiUrl, options);
        if (response.status >= 400) {
            throw new Error(`fetchMovieDetail API Failed!`);
        }
        
        const data = await response.json();
        if (!data) {
          throw new Error(`fetchMovieDetail Error: No data.`);
        }

      const { reviews, title, overview, poster_path, id: movieId, credits, release_date, vote_average } = data;
      const movieDetail = {
        imgUrl: `${TMDB_IMG_URL}${poster_path}`,
        releaseDate: release_date,
        voteAverage: vote_average,
        reviews,
        title,
        overview,
        id: movieId,
        credits: {
          cast: filterUnusefulData(credits?.cast),
          crew: filterUnusefulData(credits?.crew),
        },
      }

      return {
        data: movieDetail,
        isSuccess: true,
      } ;
    } catch (error) {
        console.error("fetchMovieDetail Failed: Reason:", error);
        openToast(TOAST_ERROR, "系統忙碌中，請稍後再試")
        return {
          data: {
            imgUrl: "",
            releaseDate: "",
            voteAverage: 0,
            reviews: "",
            title: "",
            overview: "",
            id: null,
            credits: {
              cast: [],
              crew: [],
            },
          },
          isSuccess: false,
        }
    }
}


export default fetchMovieDetail;