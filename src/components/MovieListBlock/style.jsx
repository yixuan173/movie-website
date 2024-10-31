import styled from 'styled-components';

export const MoviesContainer = styled.div`
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(4, 200px);

    @media (max-width: 880px) {
        grid-template-columns: repeat(2, 250px);
    }

    @media (max-width: 560px) {
        grid-template-columns: repeat(2, 160px);
    }

    @media (max-width: 350px) {
        grid-template-columns: repeat(1, 200px);
    }
`;

export const MovieTitle = styled.h3`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 2rem;
    color: #fff;
`;

export const ImageWapper = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
    overflow: hidden;
    border-radius: 16px;
`;

export const MovieImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 85%);
  border-radius: 16px;
`;