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

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 10px;
    padding: 10px;
    border: 1px solid grey;
`

const DetailText = styled.div`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 7px;
`

export function ItemSearch() {
    const [itemId, setItemId] = useState(0);
    const [itemData, setItemData] = useState(null);

    const fetchItem = async(id) => {
        try {
            const response = await axiosInstance.get(`/items/${id}/`);
            setItemData(response.data);
        } catch(e) {
            if (e.response && e.response.status === 404) {
                alert('존재하지 않는 상품입니다.')
            } else {
                console.error(e);
            }
        }
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
            <DetailBox>
                <DetailText>상품 상세정보</DetailText>
                <div><strong>ID : </strong> {itemData.id}</div>
                <div><strong>상품명 : </strong> {itemData.item_name}</div>
                <div><strong>재고 : </strong> {itemData.stock_quantity}</div>
                <div><strong>가격 : </strong> {itemData.item_price}</div>
            </DetailBox>
            )}
        </div>
    )
}