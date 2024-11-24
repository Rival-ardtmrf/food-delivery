import React, { useContext } from 'react';
import FeatherIcon from 'feather-icons-react';

import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    food_list,
    formatToRupiah,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div>
      <div className="cart">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{formatToRupiah(item.price)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{formatToRupiah(item.price * cartItems[item._id])}</p>
                  <FeatherIcon
                    className="remove-icon"
                    onClick={() => removeFromCart(item._id)}
                    icon="trash-2"
                  />
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{formatToRupiah(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{formatToRupiah(5000)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{formatToRupiah(getTotalCartAmount() + 5000)}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
