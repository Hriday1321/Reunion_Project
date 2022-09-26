import styled from 'styled-components'

export const DivT = styled.div`
    height: 50px;
    background-color: #181818;
    display: flex;
    align-items: center;
    padding: 1%;
`;

export const SpanT = styled.span`
    font-size: 2vw;
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
    padding: 1%;
    justify-content: space-around;
    align-items: center;
`;

export const SpanF = styled.div`
    flex: 0.2;
    border-right: solid black 2px;
`;

export const DivL = styled.div`
    font-size: 1.2vw;
    color: #333;
`;

export const Input2 = styled.input`
    font-size: 1rem;
    border: solid #777 2px;
    border-radius: 3px;
    padding: 1%;
    width: 13vw;
`;

export const Select = styled.select`
    font-size: 1rem;
    border: solid #777 2px;
    border-radius: 3px;
    padding: 1%;
    width: 80%;
`;

export const S2 = styled.button`
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5%0.5%;
    background-color: inherit;
    color: #222;
    border: solid #777 2px;
    border-radius: 3px;
    cursor: pointer;
    height: 50%;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
    justify-content: space-evenly;
    margin: 1%;
    gap: 1rem;
`;