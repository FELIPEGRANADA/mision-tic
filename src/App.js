import logo from './logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div class="login-box">
            <img class= "logo" src ={logo} alt="Terrier beverages logo"/>
            <h1>Sign in</h1>
            <form>  
                <input type="email" placeholder="Email" />
                <input type = "password" placeholder="Password" />
                <button class = "sign-in">Sign in</button>
                <a href="">Forgot Password</a>
            </form>
        </div>
    </div>
  );
}

export default App;
