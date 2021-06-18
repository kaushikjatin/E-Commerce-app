import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {HeaderContainer , OptionDiv,OptionLink,OptionsContainer,LogoContainer,AiFillDatabase1,Right_Side_Container} from './header.styles.jsx'
import { SignOutStart } from '../../redux/user/user.actions';

const Header=({currentUser,hidden,SignOutStart})=>{
    const [hiddenMenuBar,setHiddenMenuBar]=useState(false);
    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo/>
            </LogoContainer>
            {
                hiddenMenuBar? null :( <OptionsContainer>
                    <OptionLink to='/shop'>Shop</OptionLink>
                    <OptionLink to='/shop'>Contact</OptionLink>
                    {currentUser ?(
                            <OptionDiv type='button' onClick={SignOutStart}>Sign Out</OptionDiv>
                    ):(<OptionLink to='/signin'>Sign In</OptionLink>)
                    }
                </OptionsContainer>)
            }
            <Right_Side_Container>
                    <AiFillDatabase1 onClick={() =>setHiddenMenuBar(!hiddenMenuBar)}></AiFillDatabase1>
                    <CartIcon></CartIcon>
            </Right_Side_Container>
            {
                hidden? null : (<CartDropdown></CartDropdown>)
            }
        </HeaderContainer>
    )
}


const mapStateToProps= (state)=>({   // mapStateToProps function will br called with argument as the state of the store...which is a big giant object
        currentUser:selectCurrentUser(state),
        hidden:selectCartHidden(state),
    }) // this function will return an object which will be given to our Header component as props automatically.

const mapDispatchToProps = (dispatch)=>({
    SignOutStart:()=>dispatch(SignOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);