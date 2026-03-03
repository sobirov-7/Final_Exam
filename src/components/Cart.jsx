import React, { useState } from "react";
import img24 from '../assets/comp.svg'
import img25 from '../assets/joystik.svg'
import './Cart.css'
const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      img: img24, // o‘zing qo‘yasan
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      img: img25,
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // ❌ delete
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 🔢 quantity change
  const changeQty = (id, qty) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: +qty } : item
      )
    );
  };

  // 💰 subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 🎟 coupon
  const applyCoupon = () => {
    if (coupon === "SALE10") {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  const total = subtotal - discount;

  return (
    <section className="section1_cart">
      <div className="cart_container">

        {/* TABLE */}
        <div className="cart_table">
          <div className="cart_header">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {cart.map((item) => (
            <div className="cart_row" key={item.id}>
              <div className="product">
                <span onClick={() => removeItem(item.id)}>❌</span>
                {/* RASM */}
                <img src={item.img} alt="" />
                <p>{item.name}</p>
              </div>

              <p>${item.price}</p>

              <select
                value={item.quantity}
                onChange={(e) => changeQty(item.id, e.target.value)}
              >
                {[1,2,3,4,5].map(n => (
                  <option key={n}>{n}</option>
                ))}
              </select>

              <p>${item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="cart_actions">
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>

        {/* BOTTOM */}
        <div className="cart_bottom">

          <div className="coupon">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button onClick={applyCoupon}>Apply</button>
          </div>

          <div className="cart_total">
            <h3>Cart Total</h3>
            <p>Subtotal: ${subtotal}</p>
            <p>Shipping: Free</p>
            <p>Total: ${total}</p>
            <button>Proceed to checkout</button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Cart;