import Modal from "react-modal";

import useMovieDetailModalStore from "../../stores/useMovieDetailModalStore";
import PersonCard from "./PersonCard";
import ReviewCard from "./ReviewCard";
import { MovieImage, Content, MovieDetailContent, CardWapper, Overview } from "./style";


const ModalContainer = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "80vw",
      height: "80vh",
      padding: "15px",
      backgroundColor: "black"
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    }
  };
  
const MovieDetailModal = () => {
    const isOpen = useMovieDetailModalStore((state) => state.isOpen)
    const movieDetail = useMovieDetailModalStore((state) => state.movieDetail)
    const closeModal = useMovieDetailModalStore((state) => state.closeModal)

    const { poster_path, title, overview, credits, reviews } = movieDetail;
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={ModalContainer}
        contentLabel="MovieDetailModal"
      >
        <Content>
            <MovieImage src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}></MovieImage>
            <MovieDetailContent>
                <h2>{title}</h2>
                <section>
                  簡介：
                  <Overview>{overview}</Overview>
                </section>
                <section>
                  主要演員：
                  <CardWapper>
                    {credits?.cast?.length > 0 ? (
                      credits.cast.map((cast) => <PersonCard data={cast} key={cast.id} />)
                    ) : null}
                  </CardWapper>
                </section>
                <section>
                  電影工作人員：
                  <CardWapper>
                    {credits?.crew?.length > 0 ? (
                      credits.crew.map((crew) => <PersonCard data={crew} key={crew.id} />)
                    ) : null}
                  </CardWapper>
                </section>
                <section>
                  評論：
                  <CardWapper>
                    {reviews?.results?.length > 0 ? (
                      reviews.results.map((review) => <ReviewCard data={review} key={review.id} />)
                    ) : null}
                  </CardWapper>
                </section>
            </MovieDetailContent>
        </Content>
      </Modal>
    )

};

export default MovieDetailModal;