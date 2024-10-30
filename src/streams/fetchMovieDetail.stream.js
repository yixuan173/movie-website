




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
            throw new Error(`API Failed!`);
        }
        
        const data = await response.json();
        return data || {};
    } catch (error) {
        return Promise.reject(error)
    }
}


export default fetchMovieDetail;