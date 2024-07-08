import { axiosInstance } from '../../api/index.js'
import { useState } from 'react';
import styled from 'styled-components';

const SearchTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    border-top: 1px solid grey;
    margin-top: 30px;
    padding-top: 10px;
    margin-bottom: 10px;
`

const IdInput = styled.input`
    margin: 0px 5px;
    width: 30px;
    height: 20px;
`

const IdBtn = styled.button`
    height: 30px;
`

export function ItemSearch() {
    const [itemId, setItemId] = useState(0);
    const [itemData, setItemData] = useState(null);

    const fetchItem = async(id) => {
        const response = await axiosInstance.get(`/items/${id}/`);
        setItemData(response.data);
    }

    const submit = () => {
        fetchItem(itemId);
    }

    return (
        <div>
            <SearchTitle>특정 상품 조회</SearchTitle>
            <label>
                상품 ID :  
                <IdInput type='number' value={itemId} onChange={(e) => setItemId(e.target.value)}/>
                <IdBtn onClick={submit}>조회</IdBtn>
            </label>
            {itemData && (
            <div>
                <h3>Item Details</h3>
                <p><strong>ID : </strong> {itemData.id}</p>
                <p><strong>상품명 : </strong> {itemData.item_name}</p>
                <p><strong>재고 : </strong> {itemData.stock_quantity}</p>
                <p><strong>가격 : </strong> {itemData.item_price}</p>
            </div>
            )}
        </div>
    )
}