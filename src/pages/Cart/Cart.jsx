import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

const {cartItems,food_list,removeFromCart,service_list,getTotalCartAmount,url} = useContext(StoreContext);

const navigate = useNavigate();

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
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
        <br/>
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div>
              <div className='cart-items-title cart-items-item'>
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>{formatCurrency(item.price)}</p>
                <p>{cartItems[item._id]}</p>
                
                <p>{formatCurrency(item.price * cartItems[item._id])}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>
              )
            
          }
        })}
        <div className='cart-items-title'>
          <p>Services</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        {service_list.map((service) => {
          if (cartItems[service._id] && cartItems[service._id].isService) {
            return (
              <div key={service._id} className='cart-items-item'>
                <p>{service.title}</p>
                <p>{formatCurrency(service.price)}</p>
                <p>{cartItems[service._id].quantity}</p>
                <p>{formatCurrency(service.price * cartItems[service._id].quantity)}</p>
                <p onClick={() => removeFromCart(service._id)} className='cross'>x</p>
              </div>
            );
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{formatCurrency(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>{formatCurrency(getTotalCartAmount() === 0 ? 0 : 2)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>{formatCurrency(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2)}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
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
  )
}

export default Cart
