import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = ({setlogin}) => {
  const [menu, setmenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar_menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => setmenu("home")}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => setmenu("menu")}
        >
          menu
        </a>
        <a
          href="#appdownload"
          className={menu === "mobile_app" ? "active" : ""}
          onClick={() => setmenu("mobile_app")}
        >
          mobile_app
        </a>
        <a
          href="#footer"
          className={menu === "contact us" ? "active" : ""}
          onClick={() => setmenu("contact us")}
        >
          contact us
        </a>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar_searchicon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <div className="button">
          <button onClick={()=>{
           setlogin(true);
          }}>sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
