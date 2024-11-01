import styled from 'styled-components';

export const PageTitle = styled.h1`
    color: #fff;
`;

export const MovieListHeaderWrapper = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 350px) {
        flex-direction: column;
        margin-bottom: 30px;
    }
`;