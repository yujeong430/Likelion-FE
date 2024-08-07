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
const TextInput = styled.input`
    margin-left: 5px;
    margin-right: 20px;
    width: 200px;
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
        
        try {
            const response = await axiosInstance.post('/members/', memberData);
            console.log(response);
            setName('');
            setCity('');
            setStreet('');
            setZipcode('');
            alert('등록되었습니다.')
        } catch (e) {
            if (e.response && e.response.status === 400) {
                alert('요청 양식을 확인해주세요.');
            } else if (e.response && e.response.status === 409) {
                alert('이미 존재하는 회원입니다.')
            } else {
                console.error(e);
            }
        }
    };

    return (
        <div>
            <AddTitle>회원 등록</AddTitle>
            <label>
                이름 : 
                <TextInput type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                도, 시, 구 : 
                <TextInput type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
            </label>
            <label>
                도로명주소 : 
                <TextInput type='text' value={street} onChange={(e) => setStreet(e.target.value)}/>
            </label>
            <label>
                우편번호 : 
                <TextInput type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
            </label>
            <AddBtn onClick={submit}>추가</AddBtn>
        </div>
    )
}