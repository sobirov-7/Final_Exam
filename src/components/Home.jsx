import React, { useState } from "react";
import "./Home.css";
import { FaStar, FaRegHeart, FaEye } from "react-icons/fa";
import img5 from '../assets/614.svg'
import img6 from '../assets/611.svg'
import img7 from '../assets/612.svg'
import img8 from '../assets/comp.svg'
import img2 from './../assets/14max.svg'
import img10 from '../assets/jbj.svg'
import img11 from './../assets/dog.svg'
import img12 from '../assets/camera.svg'
import img13 from '../assets/komp.svg'
import img14 from '../assets/dog.svg'
import img15 from '../assets/mers.svg'
import img16 from '../assets/butsa.svg'
import img17 from '../assets/joystik.svg'
import img18 from '../assets/vitrovka.svg'
import { BsSmartwatch } from "react-icons/bs";
import {
  FaMobileAlt,
  FaDesktop,
  FaCamera,
  FaHeadphones,
  FaGamepad,
} from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from 'react-router-dom'
// import Card from "./Cards";
const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    img: img6,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    img: img7,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: "-30%",
    img: img8,
    rating: 5,
    reviews: 99,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: "-25%",
    img: img5,
    rating: 5,
    reviews: 99,
  },
  {
    id: 5,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    img: img7,
    rating: 4,
    reviews: 75,
  },

];

const Home = () => {

    let navigate = useNavigate()

  return (
    <>
      <section className="section2">
        <div className="section2_container">

          <div className="section2_left">
            <ul>
              <li>Woman’s Fashion</li>
              <li>Men’s Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>

          <div className="section2_right">
            <div className="section2_banner">

              <div className="section2_text">
                <p className="section2_brand">iPhone 14 Series</p>
                <h1>Up to 10% off Voucher</h1>
                <button>Shop Now →</button>
              </div>

              <div className="section2_img">
                <img src={img2} alt="" />
              </div>

            </div>

            <div className="section2_dots">
              <span></span>
              <span></span>
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
          </div>

        </div>
      </section>,

      <section className="section3">
        <div className="section3_top">
          <span className="today">Today’s</span>
          <h2>Flash Sales</h2>
        </div>

        <div className="section3_cards">
          {products.map((item) => (
            <div className="card" key={item.id}>

              <div className="img_box">
                <span className="discount">{item.discount}</span>

                <div className="icons">
                  <FaRegHeart onClick={()=> navigate('/wishlist')}/>
                  <FaEye />
                </div>

                <img src={item.img} alt="" />

                <button className="add_cart" onClick={()=> navigate('/cart')}>Add To Cart</button>
              </div>

              <h3>{item.name}</h3>

              <div className="price">
                <span className="new">${item.price}</span>
                <span className="old">${item.oldPrice}</span>
              </div>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}className={i < item.rating ? "star active" : "star"}
                  />
                ))}
                <span>({item.reviews})</span>
              </div>

            </div>
          ))}
        </div>

        <div className="btn_box">
          <button>View All Products</button>
        </div>
      </section>


            <section className="section5">
  <div className="section5-header">
    <div>
      <span className="section5-label">Categories</span>
      <h2>Browse By Category</h2>
    </div>

    <div className="section5-arrows">
      <button className="arrow-btn">←</button>
      <button className="arrow-btn">→</button>
    </div>
  </div>

  <div className="section5-categories">
    <div className="category-card">
      <i className="fa-solid fa-mobile-screen"><FaMobileAlt/></i>
      <p>Phones</p>
    </div>

    <div className="category-card">
      <i className="fa-solid fa-desktop"><FaDesktop/></i>
      <p>Computers</p>
    </div>

    <div className="category-card">
      <i className="fa-solid fa-clock"><FaCamera/></i>
      <p>SmartWatch</p>
    </div>

    <div className="category-card">
      <i className="fa-solid fa-camera"><FaCamera/></i>
      <p>Camera</p>
    </div>

    <div className="category-card">
      <i className="fa-solid fa-headphones"><FaHeadphones/></i>
      <p>HeadPhones</p>
    </div>

    <div className="category-card">
      <i className="fa-solid fa-gamepad"><FaGamepad/></i>
      <p>Gaming</p>
    </div>
  </div>
</section>


           <section className="section3">
                <div className="section3_top">
                  <span className="today">Today’s</span>
                  <h2>Flash Sales</h2>
                </div>
        
                <div className="section3_cards">
                  {products.map((item) => (
                    <div className="card" key={item.id}>
        
                      <div className="img_box">
                        <span className="discount">{item.discount}</span>
        
                        <div className="icons">
                          <FaRegHeart />
                          <FaEye />
                        </div>
        
                        <img src={item.img} alt="" />
        
                        <button className="add_cart">Add To Cart</button>
                      </div>
        
                      <h3>{item.name}</h3>
        
                      <div className="price">
                        <span className="new">${item.price}</span>
                        <span className="old">${item.oldPrice}</span>
                      </div>
        
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < item.rating ? "star active" : "star"}
                          />
                        ))}
                        <span>({item.reviews})</span>
                      </div>
        
                    </div>
                  ))}
                </div>
        
                <div className="btn_box">
                  <button>View All Products</button>
                </div>
              </section>

                    <section className="section4">
        <div className="section4_container">
          
          <div className="section4_left">
            <p className="section4_category">Categories</p>
            
            <h1 className="section4_title">
              Enhance Your <br /> Music Experience
            </h1>

            <div className="section4_timer">
              <div><span>23</span><p>Hours</p></div>
              <div><span>05</span><p>Days</p></div>
              <div><span>59</span><p>Minutes</p></div>
              <div><span>35</span><p>Seconds</p></div>
            </div>

            <button className="section4_btn">Buy Now!</button>
          </div>

            <div className="section4_right">
            <img src={img10} alt="" />
         </div>

        </div>
      </section> 

          <section className="section5">
      <div className="section5_container"><div className="section5_header">
          <p className="section5_subtitle">Our Products</p>
          <h2 className="section5_title">Explore Our Products</h2>

          <div className="section5_arrows">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>

        <div className="section5_grid">

          <div className="section5_card">
            <div className="section5_img">
              <img src={img11} alt="" />
            </div>
            <h3>Breed Dry Dog Food</h3>
            <p className="price">$100</p>
          </div>

          <div className="section5_card">
            <div className="section5_img">
              <img src={img12} alt="" />
            </div>
            <h3>CANON EOS DSLR Camera</h3>
            <p className="price">$360</p>
          </div>

          <div className="section5_card">
            <div className="section5_img">
              <img src={img13} alt="" />
            </div>
            <h3>ASUS FHD Gaming Laptop</h3>
            <p className="price">$700</p>
          </div>

          <div className="section5_card">
            <div className="section5_img">
              <img src={img14} alt="" />
            </div>
            <h3>Curology Product Set</h3>
            <p className="price">$500</p>
          </div>

          <div className="section5_card">
            <div className="section5_img">
              <span className="badge">NEW</span>
              <img src={img15} alt="" />
            </div>
            <h3>Kids Electric Car</h3>
            <p className="price">$960</p>
          </div>

          <div className="section5_card">
            <div className="section5_img">
              <img src={img16} alt="" />
            </div>
            <h3>Jr. Zoom Soccer Cleats</h3>
            <p className="price">$1160</p>
          </div>

          <div className="section5_card">
            <div className="section5_img">
              <span className="badge">NEW</span>
              <img src={img17} alt="" />
            </div>
            <h3>GP11 Shooter USB Gamepad</h3>
            <p className="price">$660</p>
          </div>

          <div className="section5_card">
            <div className="section5_img">
              <img src={img18} alt="" />
            </div>
            <h3>Quilted Satin Jacket</h3>
            <p className="price">$660</p>
          </div>

        </div>

        <div className="section5_btn_wrap">
          <button className="section5_btn">View All Products</button>
        </div>

      </div>
</section>
    </>

  )
}

export default Home;