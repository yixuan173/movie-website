import Modal from "react-modal";
import React from "react";

import useMovieDetailModalStore from "../../stores/useMovieDetailModalStore";
import { MovieImage, Title, Content, Overview, MovieDetailContent } from "./style"


const ModalContainer = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "80vw",
      height: "80vh",
      padding: "0",
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
    console.log("movieDetail", movieDetail)

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={ModalContainer}
        contentLabel="MovieDetailModal"
      >
        <Content>
            <MovieImage src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`} alt={movieDetail.title}></MovieImage>
            <MovieDetailContent>
                <Title>{movieDetail.title}</Title>
                <section>
                  簡介：
                  <Overview>{movieDetail.overview}</Overview>
                </section>
                <section>
                  主要演員：
                  <div>{movieDetail.overview}</div>
                </section>
                <section>
                  電影工作人員：
                  <Overview>{movieDetail.overview}</Overview>
                </section>
                <section>
                  評論：
                  <Overview>{movieDetail.overview}</Overview>
                </section>
            </MovieDetailContent>
        </Content>
      </Modal>
    )

};

export default MovieDetailModal;