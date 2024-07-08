import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.h1`
    background-color: #E6E6E6;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid grey;
    border-radius: 15px;
    width: 250px;
    height: 120px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        background-color: #E6E6E6;
    }
`
function HomeUI() {
    const navigate = useNavigate();
    return(
        <>
            <Title>Shopping Mall</Title>
            <MenuBox>
                <MenuChoice onClick={() => navigate("/items")}>
                    <div>🛒</div>
                    <div>Items</div>
                </MenuChoice>
                <MenuChoice onClick={() => navigate("/members")}> 
                    <div>👤</div>
                    <div>Members</div>
                </MenuChoice>
                <MenuChoice onClick={() => navigate("/orders")}> 
                    <div>📃</div>
                    <div>Orders</div>
                </MenuChoice>
            </MenuBox>
        </>
    )
}

export default HomeUI;