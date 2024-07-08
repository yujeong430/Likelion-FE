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

export function ItemSerachAll() {
    const [value, setValue] = useState([]);

    const fetchData = async() => {
        const response = await axiosInstance.get('/items/');
        const data = response.data;
        setValue(data);
    };

    return (
        <>
            <SearchAllTitle>전체 상품 조회</SearchAllTitle>
            <SearchAllBtn onClick={fetchData}>전체 상품 조회</SearchAllBtn>
            {value.length > 0 && (
                <Table>
                    <thead>
                        <tr>
                            <Th>상품 ID</Th>
                            <Th>상품 이름</Th>
                            <Th>상품 수량</Th>
                            <Th>상품 가격</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.map(item => (
                            <tr key={item.id}>
                                <Td>{item.id}</Td>
                                <Td>{item.item_name}</Td>
                                <Td>{item.stock_quantity}</Td>
                                <Td>{item.item_price}</Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}