import { axiosInstance } from '../../api/index.js'
import { useState } from 'react';
import styled from 'styled-components';

const SearchTitle = styled.div`
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

export function MemberSearch() {
    const [memberId, setMemberId] = useState(0);
    const [memberData, setMemberData] = useState(null);

    const fetchItem = async(id) => {
        const response = await axiosInstance.get(`/members/${id}`);
        setMemberData(response.data);
    }

    const submit = () => {
        fetchItem(memberId);
    }

    return (
        <div>
            <SearchTitle>특정 회원 조회</SearchTitle>
            <label>
                회원 ID :  
                <IdInput type='number' value={memberId} onChange={(e) => setMemberId(e.target.value)}/>
                <IdBtn onClick={submit}>조회</IdBtn>
            </label>
            {memberData && (
            <div>
                <h2>Member Details</h2>
                <p><strong>ID : </strong> {memberData.id}</p>
                <p><strong>이름 : </strong> {memberData.name}</p>
                <p><strong>주소 : </strong> {memberData.address}</p>
            </div>
            )}
        </div>
    )
}