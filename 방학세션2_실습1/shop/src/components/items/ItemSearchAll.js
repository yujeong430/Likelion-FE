import { axiosInstance } from '../../api/index.js'
import { useState } from 'react';

export function ItemSerachAll() {
    const [value, setValue] = useState('');

    const GetData = async() => {
        const response = await axiosInstance.get('/items');
        const data = response.data;
        setValue(data);
    };

    return (
        <>
            <button onClick={GetData}>전체 상품 조회</button>
            <div>{value}</div>
        </>
    )
}