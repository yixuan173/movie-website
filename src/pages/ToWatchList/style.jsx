import styled, { css , keyframes} from 'styled-components';

export const LotteryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const PageTitle = styled.h1`
    color: #fff;
`;

const slideAnimation = ({ $length }) =>  keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-200px * ${$length}));}
`;

export const SliderTrack = styled.div`
    display: flex;
    ${({ $length }) => css`transition: transform ${$length / 8}s ease;`}
    
    ${({ $isSliding, $length, $stopIndex }) => !$isSliding && $stopIndex === null && css`animation: ${slideAnimation} ${$length}s linear infinite;`}
    ${({ $isSliding, $length }) => $isSliding && css`animation: ${slideAnimation} ${$length / 8}s linear infinite;`}
    ${({ $stopIndex }) => $stopIndex !== null && css`transform: translateX(${({ $stopIndex }) => $stopIndex === 0 ? '50px' : `-${($stopIndex * 200) - 50}px`});`}   
`;

export const SliderContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 300px;
    height: 400px;
    overflow: hidden;
`;

export const LotteryCardWapper = styled.div`
    flex: 0 0 auto;
    width: 200px;
    height: 300px;
    border-radius: 16px;
    transition: transform 0.5s ease;
    ${({ $isSelected }) => $isSelected &&
        css`
            z-index: 2;  
            transform: scale(1.2);
            border: 2px solid #fff;
            box-shadow: 0 0 0 100px rgba(0, 0, 0, 0.7);
    `}
`;

export const LotteryDisplayHint = styled.p`
    color: yellow;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;

export const MovieListHeaderWrapper = styled.div`
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 350px) {
        flex-direction: column;
        margin-bottom: 30px;
    }
`;

export const MovieListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LotteryButton = styled.button`
    width: 150px;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    transition: background-color 0.5s ease;
    visibility: visible;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #000;
    }
    &:disabled {
        visibility: hidden;
    }
`;

export const SortControllWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ChangeSortTypeButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 24px;
`;

export const CustomHint = styled.span`
    color: yellow;
    font-size: 20px;
    font-weight: bolder;
`;

