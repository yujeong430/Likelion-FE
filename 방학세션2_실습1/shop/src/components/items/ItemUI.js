import { ItemSerachAll } from './ItemSearchAll.js';
import { ItemSearch } from './ItemSearch.js';
import { ItemAdd } from './ItemAdd.js';
import { ItemPatch } from './PatchItem.js';
import { ItemDelete } from './DeleteItem.js';
import styled from 'styled-components';

const ItemBox = styled.div`
    margin: 20px;
`
export function ItemUI() {
    return (
        <ItemBox>
            <h1>Items🛒</h1>
            <ItemSerachAll/>
            <ItemSearch/>
            <ItemAdd/>
            <ItemPatch/>
            <ItemDelete/>
        </ItemBox>
    )
}