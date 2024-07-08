import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Home = styled.div`
    font-size: 40px;
    margin-left: auto;
    cursor: pointer;
`

export function HomeBtn() {
    const navigate = useNavigate();
    return(
        <>
            <Home onClick={() => navigate("/")}>🏠</Home>
        </>
    )
}