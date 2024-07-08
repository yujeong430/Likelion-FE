import { axiosInstance } from '../../api/index.js'
import { useState } from 'react';
import styled from 'styled-components';

const Title = styled.div`
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

export function OrderCancle() {
    const [orderId, setOrderId] = useState(0);

    const patchData = async(id) => {
        try {
            const response = await axiosInstance.get(`/orders/${id}/cancel/`);
            console.log(response.data);
            setOrderId(0);
            alert('주문 취소되었습니다.')
        } catch(e) {
            if (e.response && e.response.status === 404) {
                alert('존재하지 않는 주문입니다.');
            } else {
                console.error(e);
            }
        }
    }

    const submit = () => {
        patchData(orderId);
    }

    return (
        <div>
            <Title>주문 취소</Title>
            <label>
                주문 ID :  
                <IdInput type='number' value={orderId} onChange={(e) => setOrderId(e.target.value)}/>
                <IdBtn onClick={submit}>취소</IdBtn>
            </label>
        </div>
    )
}