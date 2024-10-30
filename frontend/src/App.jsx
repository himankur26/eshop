//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Header from './utilities/header/Header';
import Layout from './Layout';
import About from './components/about/About';
import Home from './components/home/Home';
import Products from './components/products/Products';
import ContactUs from './components/contact/ContactUs';
import Signup from './components/account/signup/Signup';
import Login from './components/account/login/Login';
import Addproduct from './components/account/product/Addproduct';
function App() {

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={<Home/>} /> 
          <Route path="about" element={<About/>} /> 
          <Route path="products" element={<Products/>} /> 
          <Route path="contact" element={<ContactUs/>} /> 
          <Route path="auth/sign-up" element={<Signup/>} />
          <Route path="auth/login" element={<Login/>} /> 
          <Route path="addproduct" element={<Addproduct/>} /> 

        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
