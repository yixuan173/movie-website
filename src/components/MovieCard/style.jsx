import styled from 'styled-components';

export const MovieCardWapper = styled.div`
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
`;

export const MovieTitle = styled.p`
    overflow: hidden;
    font-size: 18px;
    font-weight: bolder;
    margin-top: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 2rem;
    color: #fff;
`;

export const ImageWapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    background-color: #e9ecef;
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

export const ToWatchButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

export const ToWatchBtn = styled.button`
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;