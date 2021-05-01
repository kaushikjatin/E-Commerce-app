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
width: 70px;
padding: 25px;`

export const OptionsContainer = styled.div`
width: 20%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font-size : 20px`

export const OptionDiv =styled.div`
${OptionsContainer}`

export const OptionLink =styled(Link)`
${OptionsContainer};
color: black;
text-decoration: none;`

