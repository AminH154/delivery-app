import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeholder from "./pages/Placeholder/Placeholder";
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/footer/Footer";
import Loginpop from "./loginpop/Loginpop";
const App = () => {
  const [login,setlogin]=useState(false)
  return (

    <>
    {login && <Loginpop setlogin={setlogin} /> }
      <div className="app">
        <Navbar setlogin={setlogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeholder/>}/>
          
        </Routes>
      </div>
      <Footer/>
    </>
    
  );
};

export default App;
