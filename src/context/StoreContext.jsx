import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]); 
  
  const url = "http://localhost:3000";

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    if (token) {
      try {
        await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } });
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const foodItem = food_list.find(item => item._id === itemId);
      const price = foodItem?.finalPrice || 0;
      return total + price * quantity;
    }, 0);
  };

  

  const fetchFoodList = async () => {
    try {
      console.log("Fetching food list...");
      const response = await axios.get(`${url}/api/food/list`);
  
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = response.data?.data;
  
      if (!Array.isArray(data)) {
        throw new Error("Invalid food list response format");
      }
  
      const updatedFoodList = data.map(item => ({
        ...item,
        category: item.category ? item.category.toLowerCase() : "uncategorized",
        brand: item.brand ? item.brand.toLowerCase() : "unknown"
      }));
  
      setFoodList(updatedFoodList);
      console.log("Food list fetched successfully:", updatedFoodList);
    } catch (error) {
      console.error("Error fetching food list:", error.message || error);
      setFoodList([]);
    }
  };
  

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
    loadData();
  }, []);

  const filterFoodList = (category, brand) => {
    return food_list.filter(item => {
      const matchesCategory = category === "all" || item.category === category.toLowerCase();
      const matchesBrand = brand === "all" || item.brand === brand.toLowerCase();
      return matchesCategory && matchesBrand;
    });
  };

  const contextValue = {
    
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    filterFoodList,
    url,
    token,
    setToken,
    
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
