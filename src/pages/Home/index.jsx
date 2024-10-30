import { useEffect, useState } from "react";

import { MovieImage, GradientOverlay, MovieTitle, ImageWapper, MoviesContainer, PageTitle } from "./style"
import fetchMovies from "../../streams/fetchMovies.stream"

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const data = await fetchMovies();
      if (data?.length > 0) {
        setMovies(data)
      }
    } catch (error) {
      console.log(`getMovies failed: ${error?.message}`)
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <PageTitle> 熱門電影 </PageTitle>
      <MoviesContainer>      
        {movies.length > 0 ? (
          movies.map(({id, poster_path, title}) => (
            <div key={id}>
              <ImageWapper>
                <MovieImage src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                <GradientOverlay />
              </ImageWapper>
              <MovieTitle>{title}</MovieTitle>
            </div>
          ))
        ) : null}
      </MoviesContainer>
    </div>
  );
};

export default Home;
