import styled from 'styled-components'

export const DivT = styled.div`
    height: 50px;
    background-color: #181818;
    display: flex;
    align-items: center;
    padding: 1%;
`;

export const SpanT = styled.span`
    font-size: 2rem;
    color: white;
    font-weight: 500;
    flex: 0.8;
`;

export const Input1 = styled.input`
    flex: 0.2;
    font-size: 1rem;
    padding: 0.5%0.5%;
    background: inherit;
    border: none;
    border: solid white 2px;
    border-right: none;
    border-radius: 3px;
    outline: none;
    color: white;
    &::placeholder{
        color: #ddd;
    }
`;

export const S = styled.button`
    font-size: 1rem;
    padding: 0.5%0.5%;
    background-color: inherit;
    color: white;
    border: solid white 2px;
    border-radius: 3px;
    cursor: pointer;
`;

export const DivF = styled.div`
    display: flex;
    background-color: white;
`;