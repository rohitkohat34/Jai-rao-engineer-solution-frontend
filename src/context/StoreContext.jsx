import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // Make sure this is initialized as an empty object
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]); // Initialize as empty array
  const [service_list, setServiceList] = useState([]); // Initialize as empty array

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Default to 0 if the item does not exist
    }));
    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updatedCart[itemId] <= 0) {
        delete updatedCart[itemId]; // Remove item if quantity is 0
      }
      return updatedCart;
    });
    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      const foodItem = food_list.find((product) => product._id === item);
      const serviceItem = service_list.find((service) => service._id === item);

      if (foodItem) {
        totalAmount += foodItem.price * cartItems[item];
      } else if (serviceItem) {
        totalAmount += serviceItem.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data?.data || []); // Ensure data is defined and fallback to empty array
    } catch (error) {
      console.error("Error fetching food list:", error);
      setFoodList([]); // Set an empty array on error
    }
  };

  const fetchServiceList = async () => {
    try {
      const response = await axios.get(url + "/api/service/list");
      setServiceList(response.data?.data || []); // Ensure data is defined and fallback to empty array
    } catch (error) {
      console.error("Error fetching service list:", error);
      setServiceList([]); // Set an empty array on error
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
      setCartItems(response.data?.cartData || {}); // Ensure cartData is defined
    } catch (error) {
      console.error("Error loading cart data:", error);
      setCartItems({}); // Reset to an empty object on error
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      await fetchServiceList(); // Fetch services
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    service_list, // Include service_list in context
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
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
