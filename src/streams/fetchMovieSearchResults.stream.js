


const fetchMovieSearchResults = async (keyword, page) => {
  try {
      const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`;
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
      
      return data;
  } catch (error) {
      return Promise.reject(error)
  }
}


export default fetchMovieSearchResults;