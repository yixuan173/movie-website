
import { MovieImage, GradientOverlay, MovieTitle, ImageWapper, MoviesContainer } from "./style";
import useMovieDetailModalStore from "../../stores/useMovieDetailModalStore";

const MovieListBlock = ({movieList}) => {
    const fetchMovieDetail = useMovieDetailModalStore((state) => state.fetchMovieDetail)
    const movieDetail = useMovieDetailModalStore((state) => state.movieDetail)
    const openModal = useMovieDetailModalStore((state) => state.openModal)

    const handleClickMovie = (id) => {
        if (movieDetail?.id === id) {
          openModal();
          return;
        }
        fetchMovieDetail(id);
      }

    return (
        <MoviesContainer>      
        {movieList?.length > 0 ? (
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
    )
}

export default MovieListBlock;