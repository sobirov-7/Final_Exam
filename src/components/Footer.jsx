import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

    
        <div className="footer-col">
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>➤</button>
          </div>
        </div>

        
        <div className="footer-col">
          <h4>Support</h4>
          <p>
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

      
        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

      
        <div className="footer-col">
          <h4>Quick Link</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Download App</h4>
          <p>Save $3 with App New User Only</p>

          <div className="app-buttons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="google"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="apple"
            />
          </div>

          <div className="socials">
            <span>facebook</span>
            <span>telegram</span>
            {/* <span>ig</span> */}
            <span>instagram</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;