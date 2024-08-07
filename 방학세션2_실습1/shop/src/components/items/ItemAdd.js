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
const AddName = styled.input`
    margin-left: 5px;
    margin-right: 20px;
    width: 150px;
    height: 20px;
`
const AddNum = styled.input`
    margin-left: 5px;
    margin-right: 20px;
    width: 60px;
    height: 20px;
`
const AddBtn = styled.button`
    height: 30px;
`
export function ItemAdd() {
    const [itemName, setItemName] = useState('');
    const [stockQuantity, setStockQuantity] = useState(0);
    const [itemPrice, setItemPrice] = useState(0);

    const submit = async () => {
        const itemData = {
            item_name: itemName,
            stock_quantity: parseInt(stockQuantity),
            item_price: parseInt(itemPrice)
        };
        try {
            const response = await axiosInstance.post('/items/', itemData);
            console.log(response.data);
            setItemName('');
            setStockQuantity(0);
            setItemPrice(0);
            alert('등록되었습니다.')
        } catch (e) {
            if (e.response && e.response.status === 400) {
                alert('요청 양식을 확인해주세요.')
            } else {
                console.error(e);
            }
        }
    };

    return (
        <div>
            <AddTitle>상품 등록</AddTitle>
            <label>
                상품명 : 
                <AddName type='text' value={itemName} onChange={(e) => setItemName(e.target.value)}/>
            </label>
            <label>
                상품 수량 : 
                <AddNum type='number' value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)}/>
            </label>
            <label>
                상품 가격 : 
                <AddNum type='number' value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}/>
            </label>
            <AddBtn onClick={submit}>추가</AddBtn>
        </div>
    )
}