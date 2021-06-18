import React from 'react';
import { connect } from 'react-redux';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import {SignUpStart} from '../../redux/user/user.actions'

class SignUp extends React.Component
{
    constructor()
    {
        super();
        this.state={
                    email:'',
                    password:'',
                    confirmPassword:'',
                    displayName:''
        }
    }

    handleSubmit=async event=>{
        const {signUpStart}=this.props;
        event.preventDefault();
        const {displayName,password,confirmPassword,email}=this.state;
        if(password != confirmPassword){
            alert("Password Donot Match")
            return;
        }

        signUpStart(email,password,displayName);
        // try 
        // {
        //     const {user} = await auth.createUserWithEmailAndPassword(email,password);
        //     await createUserProfileDocument(user,{displayName});
        //     this.setState({
        //         email:'',
        //         password:'',
        //         confirmPassword:'',
        //         displayName:''
        //         })
        // }catch(error)
        // {
        //     console.log(error);
        // }

    }

    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-up'>
                <h1 className='title'>I donot have a account</h1>
                <span>Sign up with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
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
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='confirmPassword'
                        required
                    />

                    <CustomButton type='submit' value='Submit Form'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    signUpStart:(email,password,displayName)=>dispatch(SignUpStart({email,password,displayName}))
})

export default connect(null,mapDispatchToProps)(SignUp);