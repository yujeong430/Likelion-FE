import { axiosInstance } from '../../api/index.js'
import { useState } from 'react';
import styled from 'styled-components';

const SearchAllTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    border-top: 1px solid grey;
    margin-top: 30px;
    padding-top: 10px;
    margin-bottom: 10px;
`

const SearchAllBtn = styled.button`
    width: 200px;
    height: 35px;
    font-size: 15px;
    border-radius: 10px;
`
export function ItemSerachAll() {
    const [value, setValue] = useState([]);

    const fetchData = async() => {
        const response = await axiosInstance.get('/items');
        const data = response.data;
        setValue(data);
    };

    return (
        <>
            <SearchAllTitle>전체 상품 조회</SearchAllTitle>
            <SearchAllBtn onClick={fetchData}>전체 상품 조회</SearchAllBtn>
            <ul>
                {value.map(item => (
                    <li key={item.id}>
                        <p><strong>상품 ID : </strong>{item.id}</p>
                        <p><strong>상품 이름 : </strong>{item.item_name}</p>
                        <p><strong>상품 수량 : </strong>{item.stock_quantity}</p>
                        <p><strong>상품 가격 : </strong>{item.item_price}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}