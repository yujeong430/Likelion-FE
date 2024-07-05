import { axiosInstance } from '../../api/index.js'
import { useEffect } from 'react';
import axios from 'axios';

/*export function GetData() {
    const fetchData = async() => {
        const response = await axiosInstance.post('/items');
        const data = response.data;
        console.log(data);
        return data;
    }

    useEffect(() => {
        fetchData();
    },[]);
}*/

const axios_post = () => {
    const data = {
        'item_name' : 'abc',
        'stock_quantity' : 1,
        'item_price' : 2
    }

    axios.post('http://43.201.228.85/items', data)
        .then((response) => {console.log(response)})
}

export function GetData() {
    useEffect(() => {
        axios_post();
    },[]);
}