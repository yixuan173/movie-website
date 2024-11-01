import { DATE_DESC, DATE_ASC, RATE_ASC, RATE_DESC } from "../constants/sortOptions.constant";

/**
 * @typedef {Object} Data
 * @property {number} id - 序號
 * @property {string} title - 名稱
 * @property {string} imgUrl - 電影海報網址
 * @property {string} releaseDate - 發行日期
 * @property {number} voteAverage - 評論平均得分
 */
/**
 * @description 根據當前排序，去排序電影資料
 * @param {Data} data - 待排序資料
 * @param {string} selectedSort - 當前選擇的排序
 * @param {function} setSortedResults - 設定排序完的資料
 */
export const handleSortedSearchResults = (data, selectedSort, setSortedResults) => {
    let sortedResults = [...data];

    switch (selectedSort?.value) {
      case DATE_DESC: {
        sortedResults.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        break;
      }
      case DATE_ASC: {
        sortedResults.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
        break;
      }
      case RATE_DESC: {
        sortedResults.sort((a, b) => b.voteAverage - a.voteAverage);
        break;
      }
      case RATE_ASC: {
        sortedResults.sort((a, b) => a.voteAverage - b.voteAverage);
        break;
      }
      default: {
        break;
      }
    }
    setSortedResults(sortedResults);
  }