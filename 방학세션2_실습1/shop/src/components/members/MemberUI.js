import styled from 'styled-components';
import { MemberSerachAll } from './MemberSearchAll.js';
import { MemberSearch } from './MemberSearch.js';
import { MemberAdd } from './MemberAdd.js';
import { MemberPatch } from './PatchMember.js';
import { MemberDelete } from './DeleteMember.js';
import { HomeBtn } from '../HomeBtn.js';

const MemberBox = styled.div`
    margin: 20px;
`
const Title = styled.div`
    display: flex;
    align-items: center;
`

export function MemberUI() {
    return(
        <MemberBox>
            <Title>
                <h1>Members👤</h1>
                <HomeBtn/>
            </Title>
            <MemberSerachAll/>
            <MemberSearch/>
            <MemberAdd/>
            <MemberPatch/>
            <MemberDelete/>
        </MemberBox>
    )
}