import React from 'react';
import '../styles/Login.css';
import logo from '../Media/Logo.png';
import LoginButton from '../components/LoginButton';


const Login = () => {
    
    
    return (
        <div className="login-box">
            <img className= "logo" src ={logo} alt="Terrier beverages logo"/>
            <LoginButton />
        </div>
            );
}
  
export default Login;