import React,{useState} from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import {auth} from '../../firebase/firebase.utils';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';

const SignIn =({emailSignInStart,googleSignInStart})=>{
    const [credentials,setCredentials]=useState({email:'',password:''});

    const {email,password}=credentials;


    const handleSubmit= async event=>{
        event.preventDefault();
        emailSignInStart(email,password);
    }

    const handleChange=event=>{
        const {value,name}=event.target;
        setCredentials({...credentials,[name]:value})
    }
  
        return(
            <div className='sign-in'>
                <h1>I already have a account</h1>
                <span>Sign in with your email and password </span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
                    <CustomButton is_google_signin type='button' onClick={googleSignInStart}>Google SignIn</CustomButton>
                    </div>
                </form>
            </div>
        )
}   

const mapDispatchToProps = (dispatch)=>({
    googleSignInStart:() =>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn)