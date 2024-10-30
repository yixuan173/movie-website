import styled from 'styled-components';

export const Content = styled.div`
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100%;
    gap: 15px;
    display: grid;
    grid-template-columns: 300px 1fr;

    @media (max-width: 880px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

export const MovieDetailContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    overflow: hidden;
    color: #fff;
`;

export const MovieImage = styled.img`
    width: 300px;
    object-fit: cover;
`;

export const Overview = styled.span`
    display: inline-block;
`;

export const PersonImage = styled.img`
    width: 120px;
    height: 100%;
    object-fit: cover;
`;

export const PersonInfo = styled.p`
    font-size: 12px;
    margin: 5px 0;
`;

export const CardWapper = styled.div`
    margin-top: 5px;
    overflow: scroll;
    display: flex;
    gap: 10px;
`;

export const PersonCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

