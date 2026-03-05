import React from "react";
import { FaStar, FaRegHeart, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

import img5 from '../assets/614.svg'
import img6 from '../assets/611.svg'
import img7 from '../assets/612.svg'
import img8 from '../assets/comp.svg'
import img11 from './../assets/dog.svg'
import img12 from '../assets/camera.svg'
import img13 from '../assets/komp.svg'
import img14 from '../assets/dog.svg'
import img15 from '../assets/mers.svg'
import img16 from '../assets/butsa.svg'
import img17 from '../assets/joystik.svg'
import img18 from '../assets/vitrovka.svg'

export const products = [
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
    name: "Breed Dry Dog Food",
    price: 100,
    img: img11,
    rating: 4,
    reviews: 65,
  },
  {
    id: 6,
    name: "CANON EOS DSLR Camera",
    price: 360,
    img: img12,
    rating: 5,
    reviews: 95,
  },
  {
    id: 7,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    img: img13,
    rating: 4,
    reviews: 88,
  },
  {
    id: 8,
    name: "Curology Product Set",
    price: 500,
    img: img14,
    rating: 4,
    reviews: 72,
  },
  {
    id: 9,
    name: "Kids Electric Car",
    price: 960,
    img: img15,
    rating: 5,
    reviews: 120,
    isNew: true,
  },
  {
    id: 10,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    img: img16,
    rating: 4,
    reviews: 54,
  },
  {
    id: 11,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    img: img17,
    rating: 5,
    reviews: 87,
    isNew: true,
  },
  {
    id: 12,
    name: "Quilted Satin Jacket",
    price: 660,
    img: img18,
    rating: 4,
    reviews: 69,
  },
];

const Carts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart"); // xohlasangiz olib tashlashingiz mumkin
  };

  return (
    <div className="section3_cards">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <div className="img_box">
            {item.discount && (
              <span className="discount">{item.discount}</span>
            )}

            {item.isNew && (
              <span className="badge">NEW</span>
            )}

            <div className="icons">
              <FaRegHeart onClick={() => navigate("/wishlist")} />
              <FaEye />
            </div>

            <img src={item.img} alt={item.name} />

            <button
              className="add_cart"
              onClick={() => handleAddToCart(item)}
            >
              Add To Cart
            </button>
          </div>

          <h3>{item.name}</h3>

          <div className="price">
            <span className="new">${item.price}</span>
            {item.oldPrice && (
              <span className="old">${item.oldPrice}</span>
            )}
          </div>

          {item.rating && (
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < item.rating ? "star active" : "star"}
                />
              ))}
              <span>({item.reviews})</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carts;