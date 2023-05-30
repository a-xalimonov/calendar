import { styled } from 'styled-components'

const HeaderTopWrapper = styled.div`
    font-size: 30px;
    background: #ffffff;
    height: 70px;
    flex: none;
    padding: 0px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.2px solid #dddddd;
`

const PlusButton = styled.div`
    cursor: pointer;
    user-select: none;
`

function HeaderTop({ addEvent }) {

    const enterEvent = () => {
        const dateString = prompt('Введите дату события:YYYY-MM-DD hh-mm-ss')
        if (dateString) {
            const [year, month, day, hour] = dateString.split(/-| /)
            const eventDate = new Date(year, month - 1, day, (hour ? hour : 0))
            if (eventDate.getTime()) {
                addEvent(eventDate)
            }
        }
    }

    return (
        <HeaderTopWrapper>
            <div>Календарь</div>
            <PlusButton onClick={e => enterEvent()}>+</PlusButton>
        </HeaderTopWrapper>
    )

}

export default HeaderTop