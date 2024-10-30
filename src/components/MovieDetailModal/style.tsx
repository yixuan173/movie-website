import styled from 'styled-components';

export const Content = styled.div`
    padding: 15px;
    gap: 15px;
    display: flex;

    @media (max-width: 880px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const MovieDetailContent = styled.div`
    color: #fff;
`;

export const Title = styled.h2`
    color: #fff;
`;

export const Overview = styled.p`
    color: #fff;
`;

export const MovieImage = styled.img`
    width: 200px;
    height: 100%;
    object-fit: cover;
`;

