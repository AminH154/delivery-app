import React, { useContext } from 'react'
import './Placeholder'
import { storeContext } from "../../context/StoreProviderContext";
function Placeholder() {
  const {getTotalCartAmount}=useContext(storeContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fiels">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Second Name' />

        </div>
        <div className="multi-fiels">
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />

        </div>
        <div className="multi-fiels">
        <input type="text" placeholder='Email City' />
        <input type="text" placeholder='State' />

        </div>
        <div className="multi-fiels">
        <input type="text" placeholder='Email City' />
        <input type="text" placeholder='State' />

        </div>
       
        <div className="multi-fiels">
        <input type="text" placeholder='Zip Code' />
        <input type="text" placeholder='Country' />

        </div>
       
       
       
       

      </div>
      <div className="place-order-right">
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
          <button >PROCEED TO Payment</button>
        </div>

        
        

      </div>

    </form>
  )
}

export default Placeholder
