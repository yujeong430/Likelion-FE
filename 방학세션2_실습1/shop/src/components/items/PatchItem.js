import { axiosInstance } from '../../api/index.js'
import { useState } from 'react';
import styled from 'styled-components';

const PatchBox = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    border-top: 1px solid grey;
    margin-top: 30px;
    padding-top: 10px;
    margin-bottom: 10px;
`
const TextInput = styled.input`
    margin-left: 5px;
    margin-right: 20px;
    width: 150px;
    height: 20px;
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

const Btn = styled.button`
    height: 30px;
`
export function ItemPatch() {
    const [itemId, setId] = useState(0);
    const [itemName, setName] = useState('');
    const [stockQuantity, setStockQuantity] = useState(0);
    const [itemPrice, setPrice] = useState(0);

    const patchData = async (id) => {
        const itemData = {
            item_name: itemName,
            stock_quantity: stockQuantity,
            item_price: itemPrice
        };

        const response = await axiosInstance.patch(`/items/${id}/`, itemData);
        console.log(response.data);
    };

    const submit = () => {
        patchData(itemId);
    }

    return (
        <div>
            <Title>상품 정보 수정</Title>
            <PatchBox>
            <label>
                수정할 상품 ID : 
                <IdInput type='number' value={itemId} onChange={(e) => setId(e.target.value)}/>
            </label>
            <div>
                <label>
                    상품명 :
                    <TextInput type='text' value={itemName} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    상품 수량 :
                    <NumInput type='number' value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)}/>
                </label>
                <label>
                    상품 가격 : 
                    <NumInput type='number' value={itemPrice} onChange={(e) => setPrice(e.target.value)}/>
                </label>
                <Btn onClick={submit}>수정</Btn>
            </div>
            </PatchBox>
        </div>
    )
}