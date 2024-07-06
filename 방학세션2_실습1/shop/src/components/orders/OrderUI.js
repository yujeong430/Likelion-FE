import styled from 'styled-components';
import { OrderSearchMem } from './OrderSearchMem';
import { OrderSearch } from './OrderSearch';
import { OrderAdd } from './OrderAdd';
import { OrderPatch } from './PatchOrder';

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
            <OrderPatch/>
        </OrderBox>
    )
}