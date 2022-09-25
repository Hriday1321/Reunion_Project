import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Div = styled.div`
    border-bottom: solid #333 1px;
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    &:hover {
        background-color: #ccc;
        color: #222;
    }
    &:active {
        background-color: white;
    }
`;

export const DivB = styled.div`
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const H = styled.p`
    font-size: 2rem;
`;

export const Ref = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
    cursor: pointer;
`;

export const Select = styled.select`
    border: none;
    background: none;
    color: inherit;
    outline: none;
    font-size: 1rem;
    text-align: center;
    width: 100%;
`;

export const Option = styled.option`
    background: #222;
    color: white;
`;

export const L = styled.button`
    margin: 50% 0 0 0;
    font-size: 1rem;
    padding: 2%;
    background: none;
    color: white;
    border: solid white 2px;
    border-radius: 3px;
    margin-right: 1%;
    cursor: pointer;
`;

export const S = styled.button`
    margin: 50% 0 0 0;
    font-size: 1rem;
    padding: 2%;
    background-color: white;
    color: #222;
    border: solid white 2px;
    border-radius: 3px;
    cursor: pointer;
`;