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
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    background-color: #f2f2f2;
`

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
`

export function OrderSearch() {
    const [orderId, setOrderId] = useState(0);
    const [orderData, setOrderData] = useState(null);

    const fetchOrder = async(id) => {
        try {
            const response = await axiosInstance.get(`/orders/${id}/`);
            setOrderData(response.data);
            setOrderId(0);
        } catch(e) {
            if (e.response && e.response.status === 404) {
                alert('존재하지 않는 주문입니다.');
            } else {
                console.error(e);
            }
        }
    }

    const submit = () => {
        fetchOrder(orderId);
    }

    return(
        <div>
            <SearchTitle>주문 내역 단건 조회</SearchTitle>
            <label>
                주문 ID : 
                <IdInput type='number' value={orderId} onChange={(e) => setOrderId(e.target.value)}/>
                <IdBtn onClick={submit}>조회</IdBtn>
            </label>
            {orderData && (
            <div>
                <h3>주문 내역</h3>
                <Table>
                    <thead>
                        <tr>
                            <Th>주문 ID</Th>
                            <Th>회원 ID</Th>
                            <Th>주문 날짜</Th>
                            <Th>주문 상태</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>{orderData.id}</Td>
                            <Td>{orderData.member}</Td>
                            <Td>{orderData.order_date}</Td>
                            <Td>{orderData.status}</Td>
                        </tr>
                    </tbody>
                </Table>
                <h4>상품 목록</h4>
                <Table>
                    <thead>
                        <tr>
                            <Th>상품 ID</Th>
                            <Th>상품명</Th>
                            <Th>상품 가격</Th>
                            <Th>상품 수량</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.items.map(item => (
                            <tr key={item.itemId}>
                                <Td>{item.itemId}</Td>
                                <Td>{item.itemName}</Td>
                                <Td>{item.itemPrice}</Td>
                                <Td>{item.orderQuantity}</Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            )}
        </div>
    )
}