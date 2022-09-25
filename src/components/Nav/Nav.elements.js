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
        background-color: #aaa;
        color: #333;
    }
`;

export const H = styled.p`
    font-size: 2rem;
`;

export const Ref = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
`;