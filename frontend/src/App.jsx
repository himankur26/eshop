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
import { useAuth } from './store/Auth';
import { Navigate } from 'react-router-dom';
import Logout from './components/account/logout/Logout';
import SingleProduct from './components/products/SingleProduct';
import Profile from './components/account/profile/Profile';
import BuyNow from './components/products/buyNow/BuyNow';
function App() {
const {isLoggedIn} = useAuth()
const {isSignedUp} = useAuth()
  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={<Home/>} /> 
          <Route path="about" element={<About/>} /> 
          <Route path="products" element={<Products/>} /> 
          <Route path="contact" element={<ContactUs/>} /> 
          <Route path="auth/sign-up" element={isSignedUp ? <Navigate to = '/'/> : <Signup/>} />
          <Route path="auth/login" element={isLoggedIn ? <Navigate to = '/'/> : <Login/>} /> 
          <Route path="logout" element={<Logout/>} /> 
          <Route path="singleProduct/:id" element={<SingleProduct/>} /> 
          <Route path="profile" element={<Profile/>} /> 
          <Route path="buynow/:id" element={<BuyNow/>} /> 
          
          <Route path="addproduct" element={<Addproduct/>} /> 
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
