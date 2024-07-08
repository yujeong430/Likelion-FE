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

export function MemberSerachAll() {
    const [value, setValue] = useState([]);

    const fetchData = async() => {
        const response = await axiosInstance.get('/members/');
        const data = response.data;
        setValue(data);
    };


    return (
        <>
            <SearchAllTitle>전체 회원 조회</SearchAllTitle>
            <SearchAllBtn onClick={fetchData}>전체 회원 조회</SearchAllBtn>
            {value.length > 0 && (
                <Table>
                    <thead>
                        <tr>
                            <Th>회원 ID</Th>
                            <Th>이름</Th>
                            <Th>주소</Th>
                            <Th>도로명주소</Th>
                            <Th>우편번호</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.map(mem => (
                            <tr key={mem.id}>
                                <Td>{mem.id}</Td>
                                <Td>{mem.name}</Td>
                                <Td>{mem.address.city}</Td>
                                <Td>{mem.address.street}</Td>
                                <Td>{mem.address.zipcode}</Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}