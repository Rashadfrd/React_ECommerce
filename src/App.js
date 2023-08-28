import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Home from './pages/Home';
import Products from './pages/Products';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import PrivateRoute from './pages/PrivateRoute';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}> 
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cart' element={<Cart />} />
          <Route 
            path='/checkout'
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            } 
            />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
