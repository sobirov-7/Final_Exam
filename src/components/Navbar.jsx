import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Navbar = ({ setSearch }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlist = useSelector((state) => state.cart.wishlist);
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState('uz');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className='Navbar'>
      <div className="Nav_header">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <span>ShopNow</span>
        </p>

        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="uz">UZB</option>
        </select>
      </div>

      <nav>
        <div className="name1">
          <Link to={"/"}><h2>Exclusive</h2></Link>
        </div>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars/>
        </div>

        <div className={`links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to={"/"}>{i18n.t("home")}</Link></li>
            <li><Link to={"/contact"}>{i18n.t("contact")}</Link></li>
            <li><Link to={"/about"}>{i18n.t("about")}</Link></li>
            <li><Link to={"/sign"}>{i18n.t("signUp")}</Link></li>
          </ul>
        </div>

        <div className="search">
          <input 
            type="text" 
            placeholder={i18n.t("searchPlaceholder")} 
            onChange={(e) => setSearch(e.target.value)} 
          />

          <span>
            <Link to={"/wishlist"}><FaRegHeart/></Link>
            <span className='leng2'>{wishlist.length}</span>
          </span>

          <span>
            <Link to={'/cart'}><FiShoppingCart/></Link>
            <span className='leng1'>{cartItems.length}</span>
          </span>

          <span>
            <Link to={'/sign'}><IoPersonOutline/></Link>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;