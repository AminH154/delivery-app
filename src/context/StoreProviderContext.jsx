import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";

export const storeContext = createContext(null);

const StoreProviderContext = (props) => {
  const [category, setCategory] = useState("all");
  const [CartItem,setCartItem] = useState({});
  useEffect(()=>{
    console.log(CartItem)
  },[CartItem])
  
  const  addCart=(itemId)=>{
    if(!CartItem[itemId ])
    {
      setCartItem(prev =>( {...prev,[itemId]:1}));
    }
    else{
      setCartItem(prev => ({...prev,[itemId] : prev[itemId]+ 1}))
    }


    
  }
  const removeCart=(itemId)=>{
    setCartItem(prev => ({...prev,[itemId] : prev[itemId]- 1}))

  }


const getTotalCartAmount = ()=>{
  let total=0 ;
  for (const key in CartItem) 
  {
    total += CartItem[key] * food_list.find(item => item._id === key).price;

  }
  return total
}






  const contextValue = {
    addCart,
    CartItem,
    removeCart,
    food_list,
    menu_list,
    category,
    setCategory,
    getTotalCartAmount,
  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreProviderContext;