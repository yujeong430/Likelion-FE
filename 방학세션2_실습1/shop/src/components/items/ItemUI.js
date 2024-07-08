import { ItemSerachAll } from './ItemSearchAll.js';
import { ItemSearch } from './ItemSearch.js';
import { ItemAdd } from './ItemAdd.js';
import { ItemPatch } from './PatchItem.js';
import { ItemDelete } from './DeleteItem.js';
import { HomeBtn } from '../HomeBtn.js';
import styled from 'styled-components';

const ItemBox = styled.div`
    margin: 20px;
`

const Title = styled.div`
    display: flex;
    align-items: center;
`
export function ItemUI() {
    return (
        <ItemBox>
            <Title>
                <h1>Items🛒</h1>
                <HomeBtn/>
            </Title>
            <ItemSerachAll/>
            <ItemSearch/>
            <ItemAdd/>
            <ItemPatch/>
            <ItemDelete/>
        </ItemBox>
    )
}