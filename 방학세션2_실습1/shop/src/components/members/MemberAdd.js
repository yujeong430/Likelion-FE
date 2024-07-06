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
const AddText = styled.input`
    margin-left: 5px;
    margin-right: 20px;
    width: 150px;
    height: 20px;
`
const AddBtn = styled.button`
    height: 30px;
`
export function MemberAdd() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zipcode, setZipcode] = useState('');

    const submit = async () => {
        const memberData = {
            name: name,
            address: {
                city: city,
                street: street,
                zipcode: zipcode
            }
        };

        const response = await axiosInstance.post('/members', memberData);
        console.log(response.data);
    };

    return (
        <div>
            <AddTitle>회원 등록</AddTitle>
            <label>
                이름 : 
                <AddText type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                도, 시, 구 : 
                <AddText type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
            </label>
            <label>
                도로명주소 : 
                <AddText type='text' value={street} onChange={(e) => setStreet(e.target.value)}/>
            </label>
            <label>
                우편번호 : 
                <AddText type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
            </label>
            <AddBtn onClick={submit}>추가</AddBtn>
        </div>
    )
}