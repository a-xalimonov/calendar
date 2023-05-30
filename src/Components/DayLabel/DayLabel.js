import { styled } from 'styled-components'

const DayLabelWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DateNumber = styled.div`
    border-radius: 50%;
    height: 24px;
    width: 24px;
    text-align: center;
    padding: 6px;
    
    ${props =>
        props.istoday &&
        `background: #ff0000;
        color: #ffffff;`
    }
`

function DayLabel({ day, date }) {

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const isToday = (date.getTime() === today.getTime())

    return(
        <DayLabelWrapper>
            <div>{day}</div>
            <DateNumber istoday={isToday}>{date.getDate()}</DateNumber>
        </DayLabelWrapper>
    )
}

export default DayLabel 