import React,{useState} from 'react';
import { connect } from 'react-redux';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import {SignUpStart} from '../../redux/user/user.actions'

const SignUp=({signUpStart})=>{

    const [credentials,setCredentials]=useState({
            email:'',
            password:'',
            confirmPassword:'',
            displayName:''
        })

    const {displayName,password,confirmPassword,email}=credentials;

    const handleSubmit=async event=>{
        event.preventDefault();
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

    const handleChange=event=>{
        const {value,name}=event.target;
        setCredentials({...credentials,[name]:value})
    }

        return(
            <div className='sign-up'>
                <h1 className='title'>I donot have a account</h1>
                <span>Sign up with your email and password </span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        handleChange={handleChange}
                        label='Display Name'
                        required
                    />
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
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={handleChange}
                        label='confirmPassword'
                        required
                    />

                    <CustomButton type='submit' value='Submit Form'>Sign Up</CustomButton>
                </form>
            </div>
        )
}

const mapDispatchToProps = (dispatch)=>({
    signUpStart:(email,password,displayName)=>dispatch(SignUpStart({email,password,displayName}))
})

export default connect(null,mapDispatchToProps)(SignUp);