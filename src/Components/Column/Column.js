import { styled } from 'styled-components'
import Row from '../Row/Row'

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

function Column({ day, data, setActive }) {
    const hours = []
    for (let i = 0; i < 24; i++) {
        const time = new Date(day)
        time.setHours(i, 0, 0, 0)
        const row = <Row key={i} time={time} data={data} setActive={setActive} />
        hours.push(row)
    }
    return (
        <ColumnWrapper>
            {hours}
        </ColumnWrapper>
    )

}

export default Column