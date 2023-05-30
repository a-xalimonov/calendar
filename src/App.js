import { styled } from 'styled-components'
import { useState } from 'react'
import Content from './Components/Content/Content';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Navigation from './Components/Navigation/Navigation';

const AppWrapper = styled.div`
  background: #dddddd;
  height: 100vh;
  width: 100vw;
  min-width: 340px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const AppContainer = styled.div`
  max-width: 760px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 10px #00000050;

  display: flex;
  flex-direction: column;
`

function App() {

  const today = new Date()
  today.setMinutes(0, 0, 0)
  const [monday, setMonday] = useState(getMonday(today))
  const [active, setActive] = useState(today)
  const [events, setEvents] = useState([])

  const changeWeek = (forward = true) => {
    const direction = forward ? 1 : -1
    const newMonday = new Date(monday)
    newMonday.setDate(newMonday.getDate() + direction * 7)
    setMonday(newMonday)
  }

  const focusToday = () => {
    setMonday(getMonday(today))
    setActive(today)
  }

  const addEvent = (date) => {
    const newEvents = [...events]
    newEvents.push(date.getTime())
    setEvents(newEvents)
  }

  const deleteEvent = () => {
    const time = active.getTime()
    const newEvents = events.filter(event => event !== time)
    setEvents(newEvents)
  }

  return (
    <AppWrapper>
      <AppContainer>
        <Header addEvent={addEvent}/>
        <Navigation
          monday={monday}
          changeWeek={changeWeek} />
        <Content
          data={{monday: monday, active: active, events: events}}
          setActive={setActive}/>
        <Footer
          eventIsActive={events.includes(active.getTime())}
          focusToday={focusToday}
          deleteEvent={deleteEvent}/>
      </AppContainer>
    </AppWrapper>
  );
}

function getMonday(today) {
  const dayOfWeek = (today.getDay() + 6) % 7
  const monday = new Date(today)
  monday.setDate(monday.getDate() - dayOfWeek)
  monday.setHours(0, 0, 0, 0)
  return monday
}

export default App;