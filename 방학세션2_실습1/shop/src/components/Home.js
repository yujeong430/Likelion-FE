import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.h1`
    background-color: #DCFFDC;
    text-align: center;
    margin-bottom: 60px;
`;

const MenuBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1000px;
    margin: auto;
`
const MenuChoice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid grey;
    border-radius: 15px;
    width: 250px;
    height: 100px;
    font-size: 20px;
`
function HomeUI() {
    const navigate = useNavigate();
    return(
        <>
            <Title> Shopping Mall </Title>
            <MenuBox>
                <MenuChoice onClick={() => navigate("/items")}> Items </MenuChoice>
                <MenuChoice onClick={() => navigate("/members")}> Members </MenuChoice>
                <MenuChoice onClick={() => navigate("/orders")}> Orders </MenuChoice>
            </MenuBox>
        </>
    )
}

export default HomeUI;