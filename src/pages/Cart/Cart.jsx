import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { 
    cartItems = {}, 
    food_list = [], 
    service_list = [], 
    removeFromCart, 
    getTotalCartAmount, 
    url, 
    addToCart 
  } = useContext(StoreContext) || {};  // Ensure StoreContext is not undefined

  

  
  const navigate = useNavigate();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  };

  // Calculate total discount
  const getTotalDiscount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const foodItem = food_list.find(item => item._id === itemId);
      const serviceItem = service_list.find(item => item._id === itemId);
      const discount = (foodItem?.discount || serviceItem?.discount || 0) * quantity;
      return total + discount;
    }, 0);
  };

  
  // Check if cart is empty
  const isCartEmpty = Object.keys(cartItems).length === 0;

  const subtotal = getTotalCartAmount(); // Total before discounts
  const discount = getTotalDiscount(); // Total discount
  const gstRate = 0.18;
  const gstAmount = (subtotal - discount) * gstRate; // GST applied after discount
  const deliveryFee = isCartEmpty ? 0 : 2; // Apply delivery fee only if cart is not empty
  const total = subtotal - discount + gstAmount + deliveryFee; // Final total amount


  
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {/* Render food items in cart */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={url + "/images/" + item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{formatCurrency(item.finalPrice)}</p>
                  <div className='quantity-controls'>
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <p>{cartItems[item._id]}</p>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </div>
                  <p>{formatCurrency(item.finalPrice * cartItems[item._id])}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}

        {/* Render service items in cart */}
        {service_list.map((service) => {
          if (cartItems[service._id]) {
            return (
              <div key={service._id} className='cart-items-item'>
                <p>{service.title}</p>
                <p>{formatCurrency(service.finalPrice)}</p>
                <div className='quantity-controls'>
                  <button onClick={() => removeFromCart(service._id)}>-</button>
                  <p>{cartItems[service._id].quantity || 1}</p>
                  <button onClick={() => addToCart(service._id)}>+</button>
                </div>
                <p>{formatCurrency(service.finalPrice * (cartItems[service._id].quantity || 1))}</p>
                <p onClick={() => removeFromCart(service._id)} className='cross'>x</p>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Show "Cart is Empty" Message if No Items */}
      {isCartEmpty && <p className="text-center mt-4">Your cart is empty.</p>}

      {/* Cart Summary Section */}
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{formatCurrency(subtotal)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Discount</p>
              <p>-{formatCurrency(discount)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>GST (18%)</p>
              <p>{formatCurrency(gstAmount)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>{formatCurrency(deliveryFee)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>{formatCurrency(total)}</b>
            </div>
          </div>
          <button 
            onClick={() => navigate('/order')} 
            disabled={isCartEmpty} // Disable button if cart is empty
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className='cart-promocode'>
          <div>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
