import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order your favourite food</h1>
        <p>
          chosse from a deverse menu featuring a delectable array of dishes
          crafted with the fineset ingredients and culinary expertise.Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
