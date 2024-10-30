




const fetchMovies = async () => {
    try {
        const apiUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&sort_by=popularity.desc";
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `${process.env.API_TOKEN}`,
            }
        };

        const response = await fetch(apiUrl, options);
        if (response.status >= 400) {
            throw new Error(`API Failed!`);
        }

        const data = await response.json();
        return data?.results || [];
    } catch (error) {
        return Promise.reject(error)
    }
}


export default fetchMovies;