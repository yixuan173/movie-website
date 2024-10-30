import { useEffect } from "react";

import { MovieImage, GradientOverlay, MovieTitle, ImageWapper, MoviesContainer, PageTitle } from "./style"
import useMovieListStore from "../../stores/useMovieListStore"
import useMovieDetailModalStore from "../../stores/useMovieDetailModalStore";

const Home = () => {
  const movieList = useMovieListStore((state) => state.movieList)
  const getMovieList = useMovieListStore((state) => state.getMovieList)
  const fetchMovieDetail = useMovieDetailModalStore((state) => state.fetchMovieDetail)
  const setMovieId = useMovieDetailModalStore((state) => state.setMovieId)
  const movieId = useMovieDetailModalStore((state) => state.movieId)
  const openModal = useMovieDetailModalStore((state) => state.openModal)

  useEffect(() => {
    if (movieList.length > 0) return;
    getMovieList();
  }, []);

  const handleClickMovie = (id) => {
    if (movieId === id) {
      openModal();
      return;
    }
    setMovieId(id);
    fetchMovieDetail(id);
  }

  return (
    <div>
      <PageTitle> 熱門電影 </PageTitle>
      <MoviesContainer>      
        {movieList.length > 0 ? (
          movieList.map(({id, poster_path, title}) => (
            <div key={id} onClick={() => handleClickMovie(id)}>
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
