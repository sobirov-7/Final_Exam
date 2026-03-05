import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <section className="section1_checkout">
      <div className="checkout_container">

        <div className="billing">
          <h2>Billing Details</h2>

          <input type="text" placeholder="First Name*" />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Street Address*" />
          <input type="text" placeholder="Apartment, floor, etc. (optional)" />
          <input type="text" placeholder="Town/City*" />
          <input type="text" placeholder="Phone Number*" />
          <input type="email" placeholder="Email Address*" />

          <label className="checkbox">
            <input type="checkbox" />
            Save this information for faster check-out next time
          </label>
        </div>

        <div className="order">

          <div className="summary">
            <div>
              <p>Subtotal:</p>
              <span>$1750</span>
            </div>
            <div>
              <p>Shipping:</p>
              <span>Free</span>
            </div>
            <div className="total">
              <p>Total:</p>
              <span>$1750</span>
            </div>
          </div>

          <div className="payment">
            <label>
              <input type="radio" name="pay" />
              Bank
            </label>
            <label>
              <input type="radio" name="pay" defaultChecked />
              Cash on delivery
            </label>
          </div>

          <div className="coupon">
            <input type="text" placeholder="Coupon Code" />
            <button type="button">Apply Coupon</button>
          </div>

          <button className="order_btn" type="button">
            Place Order
          </button>

        </div>

      </div>
    </section>
  );
};

export default Checkout;