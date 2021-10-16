import './App.css';
import Login from './pages/Login';
import Menu from './pages/Menu';
import UsersList from './pages/UsersList';
import OrdersList from './pages/OrdersList';
import ProductsList from './pages/ProductsList';
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
       redirectUri = 'http://localhost:3000/Orders'
      >

        <div className="App">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
          <Router>
            <Switch>
              <Route path={['./Menu' , './Orders' , './Products', './Users']}>
                <Switch>
                  <Route path='./Menu'>
                    <Menu />
                  </Route>
                  <Route path='./Orders'>
                    <OrdersList />
                  </Route>
                  <Route path='./Products'>
                    <ProductsList />
                  </Route>
                  <Route path='./Users'>
                    <UsersList />
                  </Route>
                </Switch>
              </Route>
              <Route path={['./Login' ]}>
                <Switch>
                  <Route path='./Login'>
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
