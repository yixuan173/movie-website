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

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ReviewCardWrapper = styled(CardWrapper)`
    min-width: 250px;
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
`;

export const ReviewCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 5px;
`;

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const CreateTime = styled.div`
    font-size: 10px;
    color: #adb5bd;
`;

export const ReviewCardContent = styled(CardWrapper)`
    gap: 5px;
`;

export const ReviewText = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

