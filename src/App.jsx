import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeholder from "./pages/Placeholder/Placeholder";
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <div className="app">
        <Navbar/>
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
