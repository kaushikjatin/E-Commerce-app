import styled,{css} from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillDatabase,AiOutlineBars} from 'react-icons/ai' 

const OptionContainerStyles = css`
padding:10px 15px;
cursor:pointer`

export const HeaderContainer = styled.div`
min-height: 70px;
width: 100%;
display: flex;
flex-direction: row;
margin-bottom: 25px;
position:relative;
@media (max-width:660px)
{
    max-height:300px;
    justify-content:space-between
}`


export const LogoContainer =styled(Link)`
height: 100%;
width: 15%;
padding: 20px;
box-sizing:border-box;
padding-top:10px;
background:white;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
border-radius:50%;`


export const OptionsContainer = styled.div`
width: 70%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
font-size : 20px;

@media (max-width:660px)
{
    height:300px;
    width:40%;
    border-left:5px solid white;
    position:absolute;
    right:0px;
    flex-direction:column;
    background:black;
    z-index:10;
}
`

export const Right_Side_Container=styled.div`
    width: 15%;
    min-height: 100%;
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
    align-items:center;
`


export const AiFillDatabase1=styled(AiFillDatabase)`
width:40%;
height:60px;
z-index:50;
display:none;
@media (max-width:660px)
{
    display:inline;
}
`


export const OptionDiv =styled.div`
${OptionsContainer}`

export const OptionLink =styled(Link)`
${OptionsContainer};
color: white;
text-decoration: none;
margin:25px;

@media (max-width:660px)
{
    margin:0px;
    width:100%;
    height:30%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom:5px solid white;
}
`


