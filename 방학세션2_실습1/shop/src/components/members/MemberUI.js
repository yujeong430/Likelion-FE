import styled from 'styled-components';
import { MemberSerachAll } from './MemberSearchAll.js';
import { MemberSearch } from './MemberSearch.js';
import { MemberAdd } from './MemberAdd.js';

const MemberBox = styled.div`
    margin: 20px;
`

export function MemberUI() {
    return(
        <MemberBox>
            <h1>Member👤</h1>
            <MemberSerachAll/>
            <MemberSearch/>
            <MemberAdd/>
        </MemberBox>
    )
}