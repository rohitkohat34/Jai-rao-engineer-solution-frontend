import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "", lastName: "", email: "", street: "",
    city: "", state: "", zipcode: "", country: "", phone: ""
  });

  const [paymentMethod, setPaymentMethod] = useState("Online");
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadRazorpay();
  }, []);

  // Calculate item discount
  const getTotalDiscount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const item = food_list.find(item => item._id === itemId);
      const discount = (item?.discount || 0) * quantity;
      return total + discount;
    }, 0);
  };

  // Subtotal from context
  const subtotal = getTotalCartAmount();
  const discount = getTotalDiscount();

  // Calculate GST based on category
  let gstAmount = 0;
  food_list.forEach(item => {
    if (cartItems[item._id] > 0) {
      const itemSubtotal = item.finalPrice * cartItems[item._id];
      const gstRate = item.category?.toLowerCase() === 'ac' ? 0.28 : 0.18;
      gstAmount += itemSubtotal * gstRate;
    }
  });

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const totalAmount = subtotal  + gstAmount + deliveryFee;

  const placeOrder = async (event) => {
    event.preventDefault();
    const orderItems = food_list
      .filter(item => cartItems[item._id] > 0)
      .map(item => ({ ...item, quantity: cartItems[item._id] }));

    const orderData = {
      address: data,
      items: orderItems,
      amount: totalAmount,
      paymentMethod
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        if (paymentMethod === "Online") {
          window.location.replace(response.data.session_url);
        } else if (paymentMethod === "Razorpay") {
          const options = {
            key: response.data.razorpay_key,
            amount: response.data.amount,
            currency: "INR",
            name: "Product Delivery",
            description: "Order Payment",
            order_id: response.data.order_id,
            handler: async (paymentResponse) => {
              await axios.post(`${url}/api/order/verify`, {
                orderId: response.data.orderId,
                paymentId: paymentResponse.razorpay_payment_id,
                signature: paymentResponse.razorpay_signature,
              });
              alert("Payment Successful!");
              navigate("/myorders");
            },
            prefill: {
              name: `${data.firstName} ${data.lastName}`,
              email: data.email,
              contact: data.phone,
            },
            theme: { color: "#3399cc" },
          };
          const rzp = new window.Razorpay(options);
          rzp.open();
        } else {
          alert("Order placed successfully with COD!");
          navigate("/myorders");
        }
      } else {
        alert("Error placing order");
      }
    } catch (error) {
      console.error("Order Error:", error);
      alert("Failed to place order");
    }
  };

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-field'>
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
        <div className='multi-field'>
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className='multi-field'>
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>

      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'><p>Subtotal</p><p>₹{subtotal.toFixed(2)}</p></div>
            <hr />
            <div className='cart-total-details'><p>Discount</p><p>-₹{discount.toFixed(2)}</p></div>
            <hr />
            <div className='cart-total-details'><p>GST (Based on Category)</p><p>₹{gstAmount.toFixed(2)}</p></div>
            <hr />
            <div className='cart-total-details'><p>Delivery Fee</p><p>₹{deliveryFee.toFixed(2)}</p></div>
            <hr />
            <div className='cart-total-details'><b>Total</b><b>₹{totalAmount.toFixed(2)}</b></div>
          </div>

          <div className='payment-method'>
            <p>Select Payment Method:</p>
            <div className='payment-buttons'>
              <button
                type="button"
                className={`payment-btn ${paymentMethod === "Razorpay" ? "active" : ""}`}
                onClick={() => setPaymentMethod("Razorpay")}
              >
                Online Payment
              </button>
              <button
                type="button"
                className={`payment-btn ${paymentMethod === "COD" ? "active" : ""}`}
                onClick={() => setPaymentMethod("COD")}
              >
                Cash on Delivery
              </button>
            </div>
          </div>

          <button type='submit'>PLACE ORDER</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
