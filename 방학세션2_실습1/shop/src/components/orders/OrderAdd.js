import { axiosInstance } from '../../api/index.js'
import { useState } from 'react';
import styled from 'styled-components';

const AddTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    border-top: 1px solid grey;
    margin-top: 30px;
    padding-top: 10px;
    margin-bottom: 10px;
`
const NumInput = styled.input`
    margin-left: 5px;
    margin-right: 20px;
    width: 60px;
    height: 20px;
`
const IdInput = styled.input`
    margin: 0px 5px;
    width: 30px;
    height: 20px;
`
const AddBtn = styled.button`
    height: 30px;
    margin-right: 10px;
`

export function OrderAdd() {
    const [memberId, setMemberId] = useState(0);
    const [itemId, setItemId] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [items, setItems] = useState([]);

    const submit = async () => {
        const orderData = {
            member_id : memberId,
            items: items
        };

        const response = await axiosInstance.post('/members', orderData);
        console.log(orderData);
        console.log(response.data);
    };

    const addOrder = () => {
        const newItem = { item_id: parseInt(itemId), count: parseInt(itemCount) };
        const newItems = [...items, newItem];
        setItems(newItems);
        setItemId(0);
        setItemCount(0);
        console.log(newItems);
    }

    return (
        <div>
            <AddTitle>상품 주문</AddTitle>
            <label>
                회원 ID : 
                <IdInput type='number' value={memberId} onChange={(e) => setMemberId(e.target.value)}/>
            </label>
            <label>
                상품 ID :
                <IdInput type='number' value={itemId} onChange={(e) => setItemId(e.target.value)}/>
            </label>
            <label>
                상품 수량 :
                <NumInput type='number' value={itemCount} onChange={(e) => setItemCount(e.target.value)}/>
            </label>
            <AddBtn onClick={addOrder}>추가</AddBtn>
            <AddBtn onClick={submit}>전체 주문</AddBtn>
        </div>
    )
}