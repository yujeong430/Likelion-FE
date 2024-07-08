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

export function ItemDelete() {
    const [itemId, setItemId] = useState(0);

    const deleteData = async(id) => {
        try {
            await axiosInstance.delete(`/items/${id}/`);
            setItemId(0);
            alert('삭제되었습니다.');
        } catch(e) {
            if (e.response && e.response.status === 404) {
                alert('존재하지 않는 상품입니다..')
            } else {
                console.error(e);
            }
        }
    }

    const submit = () => {
        deleteData(itemId);
    }

    return (
        <div>
            <Title>물품 삭제</Title>
            <label>
                물품 ID :  
                <IdInput type='number' value={itemId} onChange={(e) => setItemId(e.target.value)}/>
                <IdBtn onClick={submit}>삭제</IdBtn>
            </label>
        </div>
    )
}