import React from 'react';
import './auth.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Auth = () => (
    <div className='auth'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)

export default Auth;