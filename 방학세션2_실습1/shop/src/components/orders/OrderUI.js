import styled from 'styled-components';
import { OrderSearchMem } from './OrderSearchMem';
import { OrderSearch } from './OrderSearch';
import { OrderAdd } from './OrderAdd';
import { OrderCancle } from './CancleOrder';
import { OrderDelete } from './CancleSingleOrder';
import { HomeBtn } from '../HomeBtn';

const OrderBox = styled.div`
    margin: 20px;
`
const Title = styled.div`
    display: flex;
    align-items: center;
`
export function OrderUI() {
    return (
        <OrderBox>
            <Title>
                <h1>Orders📃</h1>
                <HomeBtn/>
            </Title>
            <OrderSearchMem/>
            <OrderSearch/>
            <OrderAdd/>
            <OrderCancle/>
            <OrderDelete/>
        </OrderBox>
    )
}