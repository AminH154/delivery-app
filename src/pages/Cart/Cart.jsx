import React, { useContext } from "react";
import "./Cart.css";
import { storeContext } from "../../context/StoreProviderContext";

const Cart = () => {
  const { food_list, CartItem, addCart, removeCart } = useContext(storeContext);
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
              <p>{0}</p>
          </div>
          <hr />
          <div className="cart-totals-details">
              <p>subtotal</p>
              <p>{2}</p>
          </div>
          <hr />
          <div className="cart-totals-details">
              <p>subtotal</p>
              <p>{0}</p>
          </div>
        </div>
        <button>PROCEED TO CHEKOUT</button>
      </div>
      <div className="cart-promo-code">
        <input type="text" placeholder="Promo code" />
        <button>Apply</button>
      </div>

    </div>
  );
};

export default Cart;
