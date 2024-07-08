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
            <ul>
                {value.map(mem => (
                    <li key={mem.id}>
                        <p><strong>회원 ID : </strong>{mem.id}</p>
                        <p><strong>이름 : </strong>{mem.name}</p>
                        <p><strong>주소 : </strong>{mem.address.city}</p>
                        <p><strong>도로명주소 : </strong>{mem.address.street}</p>
                        <p><strong>우편번호 : </strong>{mem.address.zipcode}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}