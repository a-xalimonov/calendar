import { styled } from 'styled-components'

const RowWrapper = styled.div`
    background: ${props => props.color};
    flex: 1;
    border-right: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    min-height: 40px;
    transition: 0.2s;
    &:hover {
        -webkit-filter: brightness(80%);
    }
    ${props =>
        props.active &&
        `outline: 3px solid;
        z-index: 100;`
    }
`

function Row({ time, data, setActive }) {
    const isActive = data.active.getTime() === time.getTime()
    const isEvent = data.events.includes(time.getTime())
    const color = isEvent ? '#84bdd9' : '#ffffff'
    return (
        <RowWrapper color={color} active={isActive} onClick={e => setActive(time)}/>
    )
}

export default Row