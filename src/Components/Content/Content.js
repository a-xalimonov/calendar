import { styled } from 'styled-components'
import Table from '../Table/Table'
import TimePanel from '../TimePanel/TimePanel'

const ContentContainer = styled.div`
    width: 100%;
    padding: 10px 0px;
    overflow-y: scroll;
    display: flex;
    background-color: #ffffff;
`


function Content({ data, setActive }) {
    return (
        <ContentContainer>
            <TimePanel />
            <Table data={data} setActive={setActive} />
        </ContentContainer>
    )

}

export default Content