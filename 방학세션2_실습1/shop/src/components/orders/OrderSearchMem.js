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

export function OrderSearchMem() {
    const [memberId, setMemberId] = useState(0);
    const [orderData, setOrderData] = useState(null);

    const fetchOrder = async() => {
        const response = await axiosInstance.get('/orders', {
            params: {member_id: memberId}
        });
        setOrderData(response.data);
    }

    const submit = () => {
        fetchOrder();
    }

    return(
        <div>
            <SearchTitle>회원별 주문 내역 조회</SearchTitle>
            <label>
                회원 ID : 
                <IdInput type='number' value={memberId} onChange={(e) => setMemberId(e.target.value)}/>
                <IdBtn onClick={submit}>조회</IdBtn>
            </label>
            {orderData && (
            <div>
                <h3>Order Details</h3>
                {orderData.order.map(information => (
                    <div key={information.order_id}>
                        <p>주문 ID : {information.order_id}</p>
                        <p>주문 날짜 : {information.order_date}</p>
                        <p>주문 상태: {information.status}</p>
                        <p>상품 목록</p>
                        <ul>
                            {information.items.map(item => (
                                <li key={item.item_id}>
                                    <p>상품 ID : {item.item_id}</p>
                                    <p>상품 이름 : {item.item_name}</p>
                                    <p>상품 가격 : {item.item_price}</p>
                                    <p>상품 수량 : {item.count}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}