import React from "react";
import "./Header.css";
import ExploreMenu from "../ExploreMenu/ExploreMenu";

function Header() {
  const handleViewMenu = () => {
    const exploreMenuSection = document.getElementById("explore-menu");
    if (exploreMenuSection) {
      exploreMenuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order your favourite food</h1>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>

        <button onClick={handleViewMenu}>View Menu</button>
      </div>
    </div>
  );
}

export default Header;