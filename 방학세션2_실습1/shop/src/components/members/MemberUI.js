import styled from 'styled-components';
import { MemberSerachAll } from './MemberSearchAll.js';
import { MemberSearch } from './MemberSearch.js';
import { MemberAdd } from './MemberAdd.js';
import { MemberPatch } from './PatchMember.js';
import { MemberDelete } from './DeleteMember.js';

const MemberBox = styled.div`
    margin: 20px;
`

export function MemberUI() {
    return(
        <MemberBox>
            <h1>Members👤</h1>
            <MemberSerachAll/>
            <MemberSearch/>
            <MemberAdd/>
            <MemberPatch/>
            <MemberDelete/>
        </MemberBox>
    )
}