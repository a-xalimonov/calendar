import { styled } from 'styled-components'

const FooterWrapper = styled.div`
    height: 80px;
    background-color: #f6f6f6;
    flex: none;
    padding: 0px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dddddd;
`

const FooterButton = styled.div`
    cursor: pointer;
    font-size: 26px;
    transition: 0.2s;
    user-select: none;
`

function Footer({ eventIsActive, focusToday, deleteEvent }) {
    return (
        <FooterWrapper>
            <FooterButton onClick={e => focusToday()}>Сегодня</FooterButton>
            {eventIsActive && <FooterButton onClick={e => deleteEvent()}>Удалить</FooterButton>}
        </FooterWrapper>
    )

}

export default Footer