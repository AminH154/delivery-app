import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
      <div className="explore-menu-text">
        <p>Choose from a diverse menu featring a delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience.one delicious meal at a time.</p>
      </div>
      <div className="explore-menu-list">
       {menu_list.map((item,index)=>{
        return <div key={index} className="explore-menu-list-item"  
        onClick={()=>setCategory((prev)=>( prev === item.menu_name ? "all" : item.menu_name))}>
            
            <img  className={category===item.menu_name ?"active" :" "} src={item.menu_image} alt=""  />
            <p>{item.menu_name}</p>
        </div>
       })}
      </div>
       <hr/>
    </div>
  );
};

export default ExploreMenu;
