import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId =  process.env.REACT_APP_AUTH0_CLIENTID;


// Application Entry point 
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain = {domain}
      clientId={clientId}
      redirectUri = 'http://localhost:3000/Menu/'
      >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
