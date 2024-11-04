import ToWatchButton from "./ToWatchButton";
import { MovieImage, GradientOverlay, MovieTitle, ImageWapper, MovieCardWapper } from "./style";
import useMovieDetailModalStore from "../../stores/useMovieDetailModalStore";

const MovieCard = ({ movieInfo, isShowTitle, isShowToWatchBtn, isEnableOverlay }) => {
    const handleOpenModal = useMovieDetailModalStore((state) => state.handleOpenModal)
    const { id, imgUrl, title } = movieInfo;

    const handleClickMovieCard = (id) => {
      handleOpenModal(id);
    }

    return (
        <MovieCardWapper key={id} onClick={() => handleClickMovieCard(id)}>
            <ImageWapper>
            <MovieImage src={imgUrl} alt={title} />
            {isEnableOverlay && <GradientOverlay />}
            </ImageWapper>
            {isShowTitle && <MovieTitle>{title}</MovieTitle>}
            {isShowToWatchBtn && <ToWatchButton movieInfo={movieInfo}/>}
        </MovieCardWapper>
    )
}

export default MovieCard;