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
    const [value, setValue] = useState('');

    const fetchData = async() => {
        const response = await axiosInstance.get('/members');
        const data = response.data;
        setValue(data);
    };

    return (
        <>
            <SearchAllTitle>전체 회원 조회</SearchAllTitle>
            <SearchAllBtn onClick={fetchData}>전체 회원 조회</SearchAllBtn>
            <div>{value}</div>
        </>
    )
}