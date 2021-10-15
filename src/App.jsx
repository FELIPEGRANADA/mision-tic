import './App.css';
import Login from './pages/Login';
import Menu from './pages/Menu';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

 const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENTID;

// Application Initial Component
function App() {

  return ( 
       <Auth0Provider
       domain = {domain}
       clientId={clientId}
       redirectUri = 'http://localhost:3000/Menu'
      >
        
        <div className="App">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
          <Router>
            <Switch>
              <Route path={['./pages/Menu' , './pages/Login']}>
                <Switch>
                  <Route path='./pages/Menu'>
                    <Menu />
                  </Route>
                  <Route path='./pages/Login'>
                    <Login />
                  </Route>
                </Switch>
              </Route>
              <Route path={['/']}>
                <Route path='/'>
                  <Login />
                </Route>
              </Route>
            </Switch>
          </Router>
        </div>    
      </Auth0Provider>
  );
}

export default App;
