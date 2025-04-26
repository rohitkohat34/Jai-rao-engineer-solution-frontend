import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/userOrders`,
        {},
        { headers: { Authorization: `Bearer ${token}` } } // Pass token in the Authorization header
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders", error);
      if (error.response && error.response.status === 401) {
        alert('You are not authorized. Please log in again.');
      }
    }
  };

  const downloadInvoice = async (orderId) => {
    try {
      const response = await axios.get(`${url}/api/order/invoice/${orderId}`, { responseType: 'blob' });
      if (response.data) {
        const fileURL = URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = `invoice-${orderId}.pdf`;
        link.click();
      }
    } catch (error) {
      console.error("Error downloading invoice", error);
    }
  };

  const cancelOrder = async (orderId) => {
    try {
      const response = await axios.post(
        `${url}/api/order/cancel`,
        { orderId },
        { headers: { Authorization: `Bearer ${token}` } } // Pass token in the Authorization header
      );
      if (response.data.success) {
        alert("Order canceled successfully!");
        fetchOrders(); // Refresh the orders list
      }
    } catch (error) {
      console.error("Error canceling order", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  };

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className='container'>
        {data.map((order, index) => (
          <div key={index} className='my-orders-order'>
            <img src={assets.parcel_icon} alt="" />
            <p>{order.items.map((item, index) => (
              index === order.items.length - 1 ? `${item.name} x ${item.quantity}` : `${item.name} x ${item.quantity}, `
            ))}</p>
            <p>{formatCurrency(order.amount)}</p>
            <p>Items: {order.items.length}</p>
            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
            
            {!order.canceled && order.status !== "Canceled" ? (
              <>
                <button onClick={() => downloadInvoice(order._id)}>Download Invoice</button>
                <button className="cancel-button" onClick={() => cancelOrder(order._id)}>Cancel Order</button>
              </>
            ) : (
              <p className="canceled-text">Order Canceled</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
