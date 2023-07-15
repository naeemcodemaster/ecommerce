import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Error from './components/Error';
import Home from './components/Home';
import ProductContextProvider from './Global/ProductsContext'
import CartContext from './Global/CartContext';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
const App = () => {
  return (
    <>
      <div>
        <ProductContextProvider>
          <CartContext>
            <Router>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<Error />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/addproduct' element={<AddProduct />} />
              </Routes>
            </Router>
          </CartContext>
        </ProductContextProvider>

      </div>
    </>
  )
}

export default App