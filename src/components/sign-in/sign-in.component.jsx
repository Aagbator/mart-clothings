import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password} = this.state;
        
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password:''});
        } catch(error) {

        }
    
    }

    handleChange = ( event) => {
        const {name, value} = event.target
        this.setState({[name] : value});
    }

    render() {
        const { email, password } = this.state;
    
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
        
                    <FormInput 
                        name='email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />

                    
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
