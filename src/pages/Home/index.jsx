import { useEffect } from "react";

import { MovieImage, GradientOverlay, MovieTitle, ImageWapper, MoviesContainer, PageTitle } from "./style"
import useMovieListStore from "../../stores/useMovieListStore"

const Home = () => {
  const movieList = useMovieListStore((state) => state.movieList)
  const getMovieList = useMovieListStore((state) => state.getMovieList)

  useEffect(() => {
    if (movieList.length > 0) return;
    getMovieList();
  }, []);

  return (
    <div>
      <PageTitle> 熱門電影 </PageTitle>
      <MoviesContainer>      
        {movieList.length > 0 ? (
          movieList.map(({id, poster_path, title}) => (
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
