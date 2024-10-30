import Modal from "react-modal";
import useMovieDetailModalStore from "../stores/useMovieDetailModalStore";
import React from "react";


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

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={ModalContainer}
        contentLabel="MovieDetailModal"
      >
        <div>hahaha</div>
      </Modal>
    )

};

export default MovieDetailModal;