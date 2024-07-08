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
    margin-bottom: 20px;
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
const DetailText = styled.div`
    font-size: 17px;
    font-weight: 600;
    margin-top: 7px;
    margin-bottom: 3px;
`

export function OrderSearchMem() {
    const [memberId, setMemberId] = useState(0);
    const [orderData, setOrderData] = useState(null);

    const fetchOrder = async() => {
        try {
            const response = await axiosInstance.get('/orders/', {
                params: {member_id: memberId}
            });
            setOrderData(response.data);
            setMemberId(0);
        } catch(e) {
            if (e.response && e.response.status === 404) {
                alert('존재하지 않는 회원입니다.');
            } else {
                console.error(e);
            }
        }
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
                <h3>ID {orderData.member_id}님의 주문 내역</h3>
                {orderData.orders.map(information => (
                    <div key={information.id}>
                        <DetailText>주문 ID: {information.id}</DetailText>
                        <Table>
                            <thead>
                                <tr>
                                    <Th>주문 날짜</Th>
                                    <Th>주문 상태</Th>
                                    <Th>상품 ID</Th>
                                    <Th>상품 이름</Th>
                                    <Th>상품 가격</Th>
                                    <Th>상품 수량</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {information.items.map(item => (
                                    <tr key={item.itemId}>
                                        {item === information.items[0] && (
                                            <>
                                                <Td rowSpan={information.items.length}>{information.order_date}</Td>
                                                <Td rowSpan={information.items.length}>{information.status}</Td>
                                            </>
                                        )}
                                        <Td>{item.itemId}</Td>
                                        <Td>{item.itemName}</Td>
                                        <Td>{item.itemPrice}</Td>
                                        <Td>{item.orderQuantity}</Td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}