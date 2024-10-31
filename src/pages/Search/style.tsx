import styled from 'styled-components';

export const Wapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
    margin: 3rem auto;
`;

export const SearchBarWapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const SearchInput = styled.input`
    font-size: 16px;
    width: 230px;
    height: 30px;
`;

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: none;
    background-color: #fff;
`;

export const SeatchResultWapper = styled.div`
    
`;

export const SearchInfoBlock = styled.div`
    margin-bottom: 10px;
`;

export const SearchInfo = styled.span`
    color: #fff;
    font-size: 20px;

     @media (max-width: 560px) {
        font-size: 16px;
    }
`;

export const PaginationWrapper = styled.div`
    display: flex;
    gap: 8px; 
    align-items: center;
`;

export const Arrow = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    display: flex;
    align-items: center;
    width: 36px;
    height: 36px;
    cursor: pointer;
`;

export const PaginationItem = styled.button<{$isActive: boolean}>`
    background-color: ${({ $isActive }) => $isActive ? "#fff" : "#000"};
    color: ${({ $isActive }) => $isActive ? "#000" : "#fff"};
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 100%;
    font-weight: bolder;
    font-size: 16px;
    cursor: ${({ $isActive }) => $isActive ? "default" : "pointer"};

`;


