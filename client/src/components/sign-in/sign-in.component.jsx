import React from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import {auth} from '../../firebase/firebase.utils';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';

class SignIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
                    email:'',
                    password:''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault();
        const {emailSignInStart}=this.props;
        const {email,password}=this.state;
        emailSignInStart(email,password);
    }

    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){   
        const {googleSignInStart}=this.props;
        return(
            <div className='sign-in'>
                <h1>I already have a account</h1>
                <span>Sign in with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
                    <CustomButton is_google_signin type='button' onClick={googleSignInStart}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
            }
}   

const mapDispatchToProps = (dispatch)=>({
    googleSignInStart:() =>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn)