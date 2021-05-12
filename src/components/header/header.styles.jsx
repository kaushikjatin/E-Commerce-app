import styled,{css} from 'styled-components'
import {Link} from 'react-router-dom'

const OptionContainerStyles = css`
padding:10px 15px;
cursor:pointer`

export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 25px;`

export const LogoContainer =styled(Link)`
height: 100%;
width: 90px;
padding: 20px;
padding-top:10px;
background:white;
overflow:hidden;
border-radius:50%;`

export const OptionsContainer = styled.div`
width: 30%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font-size : 20px`

export const OptionDiv =styled.div`
${OptionsContainer}`

export const OptionLink =styled(Link)`
${OptionsContainer};
color: white;
text-decoration: none;`

