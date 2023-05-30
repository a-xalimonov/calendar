import { styled } from 'styled-components'
import Column from '../Column/Column'

const TableWrapper = styled.div`
    display: flex;
    flex:1;
`

function Table({ data, setActive }) {

    const columns = []
    for (let i = 0; i < 7; i++) {
        const day = new Date(data.monday)
        day.setDate(day.getDate() + i)
        columns.push(<Column key={i} day={day} data={{ active: data.active, events: data.events }} setActive={setActive}/>)
    }
    return (
        <TableWrapper>
            {columns}
        </TableWrapper>
    )

}

export default Table