import React, { useContext } from 'react';
import './FoodDesplay.css';
import { storeContext } from '../../context/StoreProviderContext';
import FoodItem from '../foodItem/FoodItem';

function FoodDesplay({ category }) {
  const { food_list } = useContext(storeContext);

  // Ensure food_list is defined before calling map
  if (!food_list) {
    return <div>Loading...</div>;
  }

  // Filter the food_list based on the category
  const filteredFoodList = category === 'all' ? food_list : food_list.filter(item => item.category === category);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodList.map((item, index) => (
          <FoodItem
            key={index}
            id={index}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDesplay;