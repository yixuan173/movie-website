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
    width: 250px;
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