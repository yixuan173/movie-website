
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


const fetchMovieDetail = async (id) => {
    try {
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?append_to_response=reviews,credits&language=en-US`;
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `${process.env.API_TOKEN}`,
            }
        };

        const response = await fetch(apiUrl, options);
        if (response.status >= 400) {
            throw new Error(`fetchMovieDetail Error: API Failed.`);
        }
        
        const data = await response.json();
        if (!data) {
          throw new Error(`fetchMovieDetail Error: No Data.`);
        }

      const { reviews, title, overview, poster_path, id: movieId, credits } = data;
      console.log(credits?.cast, filterUnusefulData(credits?.cast))
      const movieDetail = {
        reviews,
        title,
        overview,
        poster_path,
        id: movieId,
        credits: {
          cast: filterUnusefulData(credits?.cast),
          crew: filterUnusefulData(credits?.crew),
        },
      }

      return movieDetail;
    } catch (error) {
        return Promise.reject(error)
    }
}


export default fetchMovieDetail;