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

export const MovieCardWrapper = styled.div`
    width: 100%;
    height: 340px;

    @media (max-width: 880px) {
        height: 400px;
    }
    @media (max-width: 560px) {
        height: 310px;
    }
    @media (max-width: 350px) {
        height: 340px;
    }
`;


