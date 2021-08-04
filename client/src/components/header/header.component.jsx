import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {HeaderContainer,OptionLink,OptionsContainer,LogoContainer} from './header.styles.jsx'
import { SignOutStart } from '../../redux/user/user.actions';

const Header=({currentUser,hidden,SignOutStart})=>{
    const [hiddenMenuBar,setHiddenMenuBar]=useState(false);
    return(
        <HeaderContainer>
            <OptionsContainer>
                <OptionLink to='/'>HOME</OptionLink>
                <OptionLink to='/shop'>SHOP</OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={SignOutStart}>
                    SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
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