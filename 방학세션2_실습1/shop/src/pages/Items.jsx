import React from 'react';
import { ItemSerachAll } from '../components/items/ItemSearchAll.js';
import { ItemAdd } from '../components/items/ItemAdd.js';

function Items() {
    return (
        <>
            <ItemSerachAll/>
            <ItemAdd/>
        </>
    );
}

export default Items;