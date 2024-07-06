import { axiosInstance } from '../../api/index.js'
import { useState } from 'react';

export function ItemAdd() {
    const [itemName, setItemName] = useState('');
    const [stockQuantity, setStockQuantity] = useState(0);
    const [itemPrice, setItemPrice] = useState(0);

    const Submit = async () => {
        const itemData = {
            item_name: itemName,
            stock_quantity: stockQuantity,
            item_price: itemPrice
        };

        const response = await axiosInstance.post('/items', itemData);
        console.log(response.data);
    };

    return (
        <div>
            <label>
                Item Name: 
                <input type='text' value={itemName} onChange={(e) => setItemName(e.target.value)}/>
            </label>
            <label>
                Stock Quantity: 
                <input type='number' value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)}/>
            </label>
            <label>
                Item price: 
                <input type='number' value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}/>
            </label>
            <button onClick={Submit}>Add Item</button>
        </div>
    )
}