import React from 'react';
import '../styles/Login.css';
import Menu from './Menu';
import logo from '../media/Logo.png';
import gicon from '../media/google-g-icon.png';

// Class Login Component
class Login extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.loginApp = this.loginApp.bind(this);
        this.state = {isLoggedIn: false};
    }

    // Method to indicate successfully login
    loginApp(){
        this.setState({isLoggedIn: true});
    }

    // Method Render the component
    render() {
        if(this.state.isLoggedIn === false)
        {
            return (
                <div className="login-box">
                    <img className= "logo" src ={logo} alt="Terrier beverages logo"/>
                    <h1>Sign in</h1>
                    <form>  
                        <input className="login-input" type="email" placeholder="Email" />
                        <input className="login-input" type = "password" placeholder="Password" />
                        <button className="sign-in" onClick={this.loginApp}>Sign in</button>
                        <a href="">Forgot Password</a>
                        <button type='submit' className= 'login-button'>
                            <img src= {gicon} alt='Logo Google' className='googlelogo' />
                             <span className='signingoogle'> Continue with Google </span>
                        </button>
                    </form>
                </div>
            );
        }
        else{
            return (
                <Menu />
            )
        }
    }
}
  
export default Login;