import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDesplay from "../../components/foodDesplay/FoodDesplay";
import AppDowload from "../../components/appDownload/AppDowload";

const Home = () => {
  const [category,setCategory]=useState('all')
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDesplay category={category}/>
      <AppDowload/>
    </div>
  );
};

export default Home;
