import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems = {},
    food_list = [],
    service_list = [],
    removeFromCart,
    url,
    addToCart
  } = useContext(StoreContext) || {};

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const navigate = useNavigate();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(amount);
  };

  const isCartEmpty = Object.keys(cartItems).length === 0;

  // Merge food_list and service_list
  const allItems = [...food_list, ...service_list];

  // Calculate cart details
  let subtotal = 0;
  let gstSummary = {};

  Object.entries(cartItems).forEach(([itemId, quantity]) => {
    const item = allItems.find((i) => i._id === itemId);
    if (item) {
      const itemSubtotal = item.finalPrice * quantity;
      const category = item.category?.toLowerCase() || '';
      const gstRate = category === 'ac' || category === 'air-conditioner' ? 0.28 : 0.18;
      const gstAmount = itemSubtotal * gstRate;
      const gstLabel = `${Math.round(gstRate * 100)}%`;

      subtotal += itemSubtotal;
      gstSummary[gstLabel] = (gstSummary[gstLabel] || 0) + gstAmount;
    }
  });

  const gstAmount = Object.values(gstSummary).reduce((acc, val) => acc + val, 0);
  const deliveryFee = isCartEmpty ? 0 : 2;

  const total = subtotal + gstAmount + deliveryFee;

  const handlePromoSubmit = () => {
    if (promoCode.trim().toLowerCase() === 'save10') {
      alert('Promo code applied! (Note: No additional discount logic implemented yet.)');
      setPromoApplied(true);
    } else {
      alert('Invalid promo code.');
    }
  };

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

        {/* Render all items in cart */}
        {allItems.map((item) => {
          const quantity = cartItems[item._id];
          if (quantity > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={url + "/images/" + item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{formatCurrency(item.finalPrice)}</p>
                  <div className='quantity-controls'>
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </div>
                  <p>{formatCurrency(item.finalPrice * quantity)}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      {isCartEmpty && <p className="text-center mt-4">Your cart is empty.</p>}

      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{formatCurrency(subtotal)}</p>
            </div>
            <hr />

            {/* ✅ GST Breakdown */}
            {Object.entries(gstSummary).map(([rate, amount]) => (
              <div key={rate} className='cart-total-details'>
                <p>GST ({rate})</p>
                <p>{formatCurrency(amount)}</p>
              </div>
            ))}

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
            disabled={isCartEmpty}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code Input */}
        <div className='cart-promocode'>
          <h3>Have a promo code?</h3>
          <div className='cart-promocode-input'>
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              disabled={promoApplied}
            />
            <button onClick={handlePromoSubmit} disabled={promoApplied}>
              {promoApplied ? 'Applied' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
