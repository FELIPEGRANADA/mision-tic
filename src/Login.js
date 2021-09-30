import React from 'react';
import './Login.css';
import Menu from './Menu';
import logo from './Media/Logo.png';

// Class Component Login
class Login extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.loginApp = this.loginApp.bind(this);
        this.state = {isLoggedIn: false};
    }

    loginApp(){
        this.setState({isLoggedIn: true});
    }

    // Method Render the component
    render() {
        if(this.state.isLoggedIn === false)
        {
            return (
                <div className="login-box">
                    <img className= "logo" src ={logo} alt="online-store logo"/>
                    <h1>Sign in</h1>
                    <form>  
                        <input className="login-input" type="email" placeholder="Email" />
                        <input className="login-input" type = "password" placeholder="Password" />
                        <button className="sign-in" onClick={this.loginApp}>Sign in</button>
                        <a href="">Forgot Password</a>
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