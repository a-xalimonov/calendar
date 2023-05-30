import { styled } from 'styled-components'
import DayLabel from '../DayLabel/DayLabel'

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const NavWrapper = styled.div`
    height: 100px;
    flex: none;
    background-color: #fafafa;
    border-bottom: 0.2px solid #dddddd;
    padding: 5px 17px 5px 60px;
    text-align: center;
`

const DaysPanel = styled.div`
    display: flex;
    height: 60px
`
const NavigationPanel = styled.div`
    display: flex;
    height: 30px;
    align-items: center;
    font-size: 22px;
`
const NavPanelButton = styled.div`
    flex: 1;
    cursor: pointer;
    user-select: none;
`
const NavPanelCenter = styled.div`
    flex: 5;
`

function Navigation({ monday, changeWeek }) {
    
    const dayLabels = days.map((day, index) => {
        const date = new Date(monday)
        date.setDate(date.getDate() + index)
        return <DayLabel key={index} day={day} date={date} />
    })

    return (
        <NavWrapper>
            <DaysPanel>
                {dayLabels}
            </DaysPanel>
            <NavigationPanel>
                <NavPanelButton onClick={(e) => changeWeek(false)}>{'<'}</NavPanelButton>
                <NavPanelCenter>
                    {`${months[monday.getMonth()]} ${monday.getFullYear()}`}
                </NavPanelCenter>
                <NavPanelButton onClick={(e) => changeWeek(true)}>{'>'}</NavPanelButton>
            </NavigationPanel>
        </NavWrapper>
    )

}

export default Navigation