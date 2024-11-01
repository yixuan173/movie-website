import ToWatchButton from "./ToWatchButton";
import { MovieImage, GradientOverlay, MovieTitle, ImageWapper, MovieCardWapper } from "./style";
import useMovieDetailModalStore from "../../stores/useMovieDetailModalStore";

const MovieCard = ({ movieInfo, isShowTitle, isShowToWatchBtn, isEnableOverlay }) => {
    const fetchMovieDetail = useMovieDetailModalStore((state) => state.fetchMovieDetail)
    const movieDetail = useMovieDetailModalStore((state) => state.movieDetail)
    const openModal = useMovieDetailModalStore((state) => state.openModal)
    const { id, poster_path, title, release_date, vote_average } = movieInfo;

    const handleClickMovie = (id) => {
        if (movieDetail?.id === id) {
          openModal();
          return;
        }
        fetchMovieDetail(id);
      }

    return (
        <MovieCardWapper key={id} onClick={() => handleClickMovie(id)}>
            <ImageWapper>
            <MovieImage src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
            {isEnableOverlay && <GradientOverlay />}
            </ImageWapper>
            {isShowTitle && <MovieTitle>{title}</MovieTitle>}
            {isShowToWatchBtn && <ToWatchButton movieInfo={{id, poster_path, title, release_date, vote_average}}/>}
        </MovieCardWapper>
    )
}

export default MovieCard;