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
        await axiosInstance.delete(`/items/${id}`);
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