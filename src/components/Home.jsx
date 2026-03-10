import React from "react";
import "./Home.css";
import { FaStar, FaRegHeart, FaEye, FaMobileAlt, FaDesktop, FaCamera, FaHeadphones, FaGamepad } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { useDispatch } from "react-redux"; 
import { addToCart, addToWishlist } from "../redux/cartSlice"; 
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import img2 from '../assets/14max.svg';
import img5 from '../assets/614.svg';
import img6 from '../assets/611.svg';
import img7 from '../assets/612.svg';
import img8 from '../assets/comp.svg';
import img10 from '../assets/jbj.svg';
import img11 from '../assets/dog.svg';
import img12 from '../assets/camera.svg';
import img13 from '../assets/komp.svg';
import img14 from '../assets/dog.svg';
import img15 from '../assets/mers.svg';
import img16 from '../assets/butsa.svg';
import img17 from '../assets/joystik.svg';
import img18 from '../assets/vitrovka.svg';

const products = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: "-40%", img: img6, rating: 5, reviews: 88 },
  { id: 2, name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: "-35%", img: img7, rating: 4, reviews: 75 },
  { id: 3, name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: "-30%", img: img8, rating: 5, reviews: 99 },
  { id: 4, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: "-25%", img: img5, rating: 5, reviews: 99 },
  { id: 5, name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: "-35%", img: img7, rating: 4, reviews: 75 },
];

const Home = ({ search }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleAddToCart = (item) => dispatch(addToCart(item));
  const handleAddToWish = (item) => dispatch(addToWishlist(item));

  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* SECTION 2 - Banner */}
      <section className="section2">
        <div className="section2_container">
          <div className="section2_left">
            <ul>
              <li>{t("womensFashion")}</li>
              <li>{t("mensFashion")}</li>
              <li>{t("electronics")}</li>
              <li>{t("homeLifestyle")}</li>
              <li>{t("medicine")}</li>
              <li>{t("sportsOutdoor")}</li>
              <li>{t("babysToys")}</li>
              <li>{t("groceriesPets")}</li>
              <li>{t("healthBeauty")}</li>
            </ul>
          </div>

          <div className="section2_right">
            <div className="section2_banner">
              <div className="section2_text">
                <p className="section2_brand">{t("iphoneSeries")}</p>
                <h1>{t("voucherDiscount")}</h1>
                <button>{t("shopNow")} →</button>
              </div>
              <div className="section2_img">
                <img src={img2} alt="Banner" />
              </div>
            </div>
            <div className="section2_dots">
              <span></span><span></span><span className="active"></span><span></span><span></span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Flash Sales */}
      <section className="section3">
        <div className="section3_top">
          <span className="today">{t("todays")}</span>
          <h2>{t("flashSales")}</h2>
        </div>

        <div className="section3_cards">
          {filteredProducts.map(item => (
            <div className="card" key={item.id}>
              <div className="img_box">
                {item.discount && <span className="discount">{item.discount}</span>}
                <div className="icons">
                  <FaRegHeart onClick={() => handleAddToWish(item)} />
                  <FaEye onClick={() => navigate(`/cart/${item.id}`)} />
                </div>
                <img src={item.img} alt={item.name} />
                <button className="add_cart" onClick={() => handleAddToCart(item)}>{t("addToCart")}</button>
              </div>
              <h3>{item.name}</h3>
              <div className="price">
                <span className="new">${item.price}</span>
                {item.oldPrice && <span className="old">${item.oldPrice}</span>}
              </div>
              {item.rating && (
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < item.rating ? "star active" : "star"} />
                  ))}
                  <span>({item.reviews})</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="btn_box">
          <button>{t("viewAllProducts")}</button>
        </div>
      </section>

      {/* SECTION 4 - Music Promo */}
      <section className="section4">
        <div className="section4_container">
          <div className="section4_left">
            <p className="section4_category">{t("categories")}</p>
            <h1 className="section4_title">{t("enhanceMusic")}</h1>
            <div className="section4_timer">
              <div><span>23</span><p>{t("hours")}</p></div>
              <div><span>05</span><p>{t("days")}</p></div>
              <div><span>59</span><p>{t("minutes")}</p></div>
              <div><span>35</span><p>{t("seconds")}</p></div>
            </div>
            <button className="section4_btn">{t("buyNow")}</button>
          </div>
          <div className="section4_right">
            <img src={img10} alt="Music" />
          </div>
        </div>
      </section>

      {/* SECTION 5 - Categories */}
      <section className="section5">
        <div className="section5-header">
          <div>
            <span className="section5-label">{t("categories")}</span>
            <h2>{t("browseByCategory")}</h2>
          </div>
        </div>
        <div className="section5-categories">
          <div className="category-card"><FaMobileAlt /><p>{t("phones")}</p></div>
          <div className="category-card"><FaDesktop /><p>{t("computers")}</p></div>
          <div className="category-card"><BsSmartwatch /><p>{t("smartwatch")}</p></div>
          <div className="category-card"><FaCamera /><p>{t("camera")}</p></div>
          <div className="category-card"><FaHeadphones /><p>{t("headphones")}</p></div>
          <div className="category-card"><FaGamepad /><p>{t("gaming")}</p></div>
        </div>
      </section>

      {/* SECTION 6 - More Products */}
      <section className="section5">
        <div className="section5_container">
          <div className="section5_header">
            <p className="section5_subtitle">{t("ourProducts")}</p>
            <h2 className="section5_title">{t("exploreProducts")}</h2>
          </div>

          <div className="section5_grid">
            <div className="section5_card"><div className="section5_img"><img src={img11} alt="Dog Food" /></div><h3>{t("breedDryDogFood")}</h3><p className="price">$100</p></div>
            <div className="section5_card"><div className="section5_img"><img src={img12} alt="Camera" /></div><h3>{t("canonCamera")}</h3><p className="price">$360</p></div>
            <div className="section5_card"><div className="section5_img"><img src={img13} alt="Laptop" /></div><h3>{t("asusLaptop")}</h3><p className="price">$700</p></div>
            <div className="section5_card"><div className="section5_img"><img src={img14} alt="Curology Set" /></div><h3>{t("curologySet")}</h3><p className="price">$500</p></div>
            <div className="section5_card"><div className="section5_img"><span className="badge">{t("new")}</span><img src={img15} alt="Kids Car" /></div><h3>{t("kidsElectricCar")}</h3><p className="price">$960</p></div>
            <div className="section5_card"><div className="section5_img"><img src={img16} alt="Soccer Cleats" /></div><h3>{t("jrZoomCleats")}</h3><p className="price">$1160</p></div>
            <div className="section5_card"><div className="section5_img"><span className="badge">{t("new")}</span><img src={img17} alt="Gamepad" /></div><h3>{t("gp11Gamepad")}</h3><p className="price">$660</p></div>
            <div className="section5_card"><div className="section5_img"><img src={img18} alt="Jacket" /></div><h3>{t("quiltedJacket")}</h3><p className="price">$660</p></div>
          </div>

          <div className="section5_btn_wrap">
            <button className="section5_btn">{t("viewAllProducts")}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;