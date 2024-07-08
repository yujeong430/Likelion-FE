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
const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 10px;
    padding: 10px;
    border: 1px solid grey;
`

const DetailText = styled.div`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 7px;
`

export function MemberSearch() {
    const [memberId, setMemberId] = useState(0);
    const [memberData, setMemberData] = useState(null);

    const fetchMember = async(id) => {
        try {
            const response = await axiosInstance.get(`/members/${id}/`);
            setMemberData(response.data);
        } catch (e) {
            if (e.response && e.response.status === 404) {
                alert('존재하지 않는 회원입니다.');
            } else if (e.response && e.response.status === 400) {
                alert('요청 양식을 확인해주세요.');
            } else {
                console.error(e);
            }
        }
    }

    const submit = () => {
        fetchMember(memberId);
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
            <DetailBox>
                <DetailText>회원 정보</DetailText>
                <div><strong>회원 ID : </strong> {memberData.id}</div>
                <div><strong>이름 : </strong> {memberData.name}</div>
                <div><strong>주소 : </strong> {memberData.address.city}</div>
                <div><strong>도로명 주소 : </strong>{memberData.address.street}</div>
                <div><strong>우편번호 : </strong> {memberData.address.zipcode}</div>
            </DetailBox>
            )}
        </div>
    )
}