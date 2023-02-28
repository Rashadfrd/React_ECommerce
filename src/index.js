import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductsProvider from './context/products_context';
import CartProvider from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';


// dev-gqsrcxzq7ig5jsy2.us.auth0.com
// bEqakiwhOxqtRX9PU0T3pI7TWZw8JibP

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-gqsrcxzq7ig5jsy2.us.auth0.com"
  clientId="bEqakiwhOxqtRX9PU0T3pI7TWZw8JibP"
  cacheLocation='localstorage'
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
</Auth0Provider>,
);
