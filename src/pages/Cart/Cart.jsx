import React, { useContext } from "react";
import "./Cart.css";
import { storeContext } from "../../context/StoreProviderContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, CartItem, addCart, removeCart , getTotalCartAmount } = useContext(storeContext);
  const Navigate =useNavigate()
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (CartItem[item._id] > 0) {
            return (
              <div className="cart-item-images cart-item-details" key={index}>
                <p>{item.name}</p>
                <p>
                  <img src={item.image} alt="" />
                </p>
                <p>${item.price}</p>
                <p>{CartItem[item._id]}</p>
                <p>${CartItem[item._id] * item.price}</p>
                <p>
                  <button onClick={() => removeCart(item._id)}>-</button>
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div className="cart-totals-details">
              <p>subtotal</p>
              <p>${  getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-totals-details">
              <p>subtotal</p>
              <p>${2}</p>
          </div>
          <hr />
          <div className="cart-totals-details">
              <p>subtotal</p>
              <p>${  getTotalCartAmount()+2}</p>
          </div>
          <button onClick={() => { if (getTotalCartAmount() !== 0) Navigate('/order'); }}>PROCEED TO CHEKOUT</button>
        </div>
        <div className="cart-promo-code">
          <p>if you have a promo code,Enter it here </p>
        <input type="text" placeholder="Promo code" />
        <button>Apply</button>
      </div>
    
      </div>
     

    </div>
  );
};

export default Cart;
