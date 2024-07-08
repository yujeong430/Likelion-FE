import { axiosInstance } from '../../api/index.js'
import { useState } from 'react';
import styled from 'styled-components';

const PatchBox = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
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
const IdInput = styled.input`
    margin: 0px 5px;
    width: 30px;
    height: 20px;
`
const Btn = styled.button`
    height: 30px;
`
export function MemberPatch() {
    const [memberId, setId] = useState(0);
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zipcode, setZipcode] = useState('');

    const patchData = async (id) => {
        const memberData = {
            name: name,
            address: {
                city: city,
                street: street,
                zipcode: zipcode
            }
        };

        const response = await axiosInstance.patch(`/members/${id}/`, memberData);
        console.log(response.data);
        setName('');
        setCity('');
        setStreet('');
        setZipcode('');
    };

    const submit = () => {
        patchData(memberId);
    }

    return (
        <div>
            <Title>회원 정보 수정</Title>
            <PatchBox>
            <label>
                수정할 회원 ID : 
                <IdInput type='number' value={memberId} onChange={(e) => setId(e.target.value)}/>
            </label>
            <div>
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
                <Btn onClick={submit}>수정</Btn>
            </div>
            </PatchBox>
        </div>
    )
}