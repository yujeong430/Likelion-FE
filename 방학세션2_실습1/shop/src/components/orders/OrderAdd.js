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
            memberId : memberId,
            items: items
        };
        try {
            const response = await axiosInstance.post('/orders/', orderData);
            console.log(orderData);
            console.log(response.data);
            setMemberId(0);
            setItems([]);
            alert('주문 완료되었습니다.')
        } catch (e) {
            if (e.response && e.response.status === 400) {
                alert('요청 양식을 확인해주세요.');
                setItems([]);
            } else {
                console.error(e);
                setItems([]);
            }
        }
    };

    const addOrder = () => {
        const newItem = { itemId: parseInt(itemId), orderQuantity: parseInt(itemCount) };
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
            <AddBtn onClick={addOrder}>장바구니 추가</AddBtn>
            <AddBtn onClick={submit}>전체 주문</AddBtn>
            {(items.length>0) && (
                <ul>
                    <p>🛒장바구니</p>
                    {items.map((item, index) => (
                        <li key={index}>
                            상품 ID: {item.itemId}, 수량: {item.orderQuantity}
                        </li>
                    ))}
                </ul>
            )}  
        </div>
    )
}