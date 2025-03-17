import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import "./FoodItem.css";
import { storeContext } from '../../context/StoreProviderContext';

function FoodItem({id,name,price,description,image}) {

const { CartItem, addCart,  removeCart} = useContext(storeContext)

  return (
    <div className='Food-item'>
        <div className="food-item-img-container">
            {!CartItem[id] ?
             <img className="add"
            onClick={()=>addCart(id) }
              src={assets.add_icon_white}
              alt=''/> 
            : <div className="food-item-counter">
              <img src={assets.remove_icon_red} alt="" onClick={()=>removeCart(id)} />
              {CartItem[id]}
              <img src={assets.add_icon_green} alt="" onClick={()=>addCart(id)} />
            </div>
              
         }
            <img className="food-item-image" src={image} alt="" />
        </div>
        <div className="food-item-info">
          <div className="food-item-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
            </div>
            <div className="food-item-descripition">
              {description}
            </div>
            <div className="food-item-price">${price}</div>
         
        </div>
    </div>
  )
}

export default FoodItem
