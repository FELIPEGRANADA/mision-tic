import './styles/App.css';
import logo from './Media/Logo.png';

function App() {
  return (
    <div className="App">
        <div className="login-box">
            <img className= "logo" src ={logo} alt="Terrier beverages logo"/>
            <h1>Sign in</h1>
            <form>  
                <input type="email" placeholder="Email" />
                <input type = "password" placeholder="Password" />
                <button className = "sign-in">Sign in</button>
                <a href="">Forgot Password</a>
            </form>
        </div>
    </div>
  );
}

export default App;
