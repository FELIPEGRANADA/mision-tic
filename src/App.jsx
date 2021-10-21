import './App.css';
import Login from './pages/Login';
import Menu from './pages/admin/Menu';
import UsersList from './pages/admin/UsersList';
import OrdersList from './pages/admin/OrdersList';
import ProductsList from './pages/admin/ProductsList';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENTID;

function App() {
  return (
    
    <Auth0Provider 
    domain = {domain}
    clientId={clientId}
    redirectUri = 'http://localhost:3000/admin'
    >
      <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
          <Router>
            <Switch>
              <Route path={['/admin' ,'/admin/Orders' , '/admin/Products', '/admin/Users']}>
                <Switch>
                  <Route path='/admin/Orders'>
                    <OrdersList />
                  </Route>
                  <Route path='/admin/ProductsList'>
                    <ProductsList />
                  </Route>
                  <Route path='/admin/UsersList'>
                    <UsersList />
                  </Route>
                  <Route path='/admin'>
                    <Menu />
                  </Route>
                </Switch>
              </Route>
              <Route path={['/Login' ]}>
                <Switch>
                  <Route path='/Login'>
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
