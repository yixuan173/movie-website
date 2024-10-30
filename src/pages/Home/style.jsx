import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 5rem;
`;

export const PageTitle = styled.h1`
    color: #fff;
`;

export const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 300px);
    gap: 0.5rem;
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