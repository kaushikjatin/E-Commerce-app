import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {HeaderContainer , OptionDiv,OptionLink,OptionsContainer,LogoContainer} from './header.styles.jsx'

const Header=({currentUser,hidden})=>{
    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/shop'>Contact</OptionLink>
                {currentUser ?(
                        <OptionDiv onClick={()=>auth.signOut()}>Sign Out</OptionDiv>
                ):(<OptionLink to='/signin'>Sign In</OptionLink>)
                }
                <CartIcon></CartIcon>
            </OptionsContainer>
            {
                hidden? null : (<CartDropdown></CartDropdown>)
            }
        </HeaderContainer>
    )
}


const mapStateToProps= (state)=>({   // mapStateToProps function will br called with argument as the state of the store...which is a big giant object
        currentUser:selectCurrentUser(state),
        hidden:selectCartHidden(state)
    }) // this function will return an object which will be given to our Header component as props automatically.

export default connect(mapStateToProps)(Header);