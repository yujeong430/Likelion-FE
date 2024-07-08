import styled from 'styled-components';
import { OrderSearchMem } from './OrderSearchMem';
import { OrderSearch } from './OrderSearch';
import { OrderAdd } from './OrderAdd';
import { OrderCancle } from './CancleOrder';
import { OrderDelete } from './CancleSingleOrder';

const OrderBox = styled.div`
    margin: 20px;
`
export function OrderUI() {
    return (
        <OrderBox>
            <h1>Orders📃</h1>
            <OrderSearchMem/>
            <OrderSearch/>
            <OrderAdd/>
            <OrderCancle/>
            <OrderDelete/>
        </OrderBox>
    )
}