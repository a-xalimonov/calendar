import { styled } from 'styled-components'

const PanelWrapper = styled.div`
    height: 100%;
    width: 60px;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`

const TimeLabel = styled.div`
    flex:1;
    text-align: center;
    min-height: 40px;
    border-bottom: 1px solid #ffffff;
    user-select: none;
`

function TimePanel() {

    const hours = []
    for (let i = 1; i < 24; i++) {
        hours.push(`${i}:00`)
    }
    const timeArray = hours.map((time, index) => <TimeLabel key={index}>{time}</TimeLabel>)
    return (
        <PanelWrapper>
            {timeArray}
        </PanelWrapper>
    )

}

export default TimePanel