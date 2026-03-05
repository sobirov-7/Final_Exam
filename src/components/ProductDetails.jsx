import React, { useState } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../redux/cartSlice";
import './ProductDetails.css'

import img5 from '../assets/614.svg'
import img6 from '../assets/611.svg'
import img7 from '../assets/612.svg'
import img8 from '../assets/comp.svg'

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 192,
    oldPrice: 0,
    discount: null,
    img: img6,
    rating: 5,
    reviews: 150,
    description: "Playstation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mass free removal. Pressure sensitive."
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
];

const ProductDetails = () => {
  const { id } = useParams();
  const productId = Number(id);
  const product = products.find(p => p.id === productId) || products[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("#D9D9D9");

  const colors = [
    { id: 1, color: "#D9D9D9" },
    { id: 2, color: "#5E5E5E" },
    { id: 3, color: "#FF0000" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity, selectedSize, selectedColor }));
    navigate("/cart");
  };
  const handleAddToWish = () => {
    dispatch(addToWishlist({ ...product, quantity, selectedSize, selectedColor }));
  };

  return (
    <div className="product-details-container">
      <div className="breadcrumbs">
        Account / Gaming / <strong>{product.name}</strong>
      </div>

      {/* Asosiy wrapper: rasmlar + info yonma-yon */}
      <div className="product-wrapper" style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
        
        {/* Rasmlar bo‘limi */}
        <div className="product-images" style={{ display: "flex", gap: "20px" }}>
          {/* Yon panelda kichik rasmlar */}
          <div className="thumbnail-list" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {[1, 2, 3].map((n) => (
              <img
                key={n}
                src={product.img}
                alt={`${product.name} ${n}`}
                className={`thumbnail ${n === 1 ? "active" : ""}`}
              />
            ))}
          </div>
          
          {/* O‘rta katta asosiy rasm */}
          <img src={product.img} alt={product.name} className="main-img" />
        </div>

        {/* Mahsulot ma'lumotlari */}
        <div className="product-info" style={{ maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2>{product.name}</h2>

          <div className="rating-stock" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < product.rating ? "star active" : "star"}
              />
            ))}
            <span>({product.reviews} Reviews)</span>
            <span className="in-stock"> | In Stock</span>
          </div>

          <div className="price" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            ${product.price.toFixed(2)}
            {product.oldPrice > 0 && <span className="old-price">${product.oldPrice.toFixed(2)}</span>}
          </div>

          <p className="description">{product.description}</p>

          <div className="colors-section" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span>Colours:</span>
            <div className="colors-list" style={{ display: "flex", gap: "10px" }}>
              {colors.map((c) => (
                <span
                  key={c.id}
                  className={`color-circle ${selectedColor === c.color ? "selected" : ""}`}
                  style={{ backgroundColor: c.color, width: "30px", height: "30px", borderRadius: "50%", cursor: "pointer" }}
                  onClick={() => setSelectedColor(c.color)}
                />
              ))}
            </div>
          </div>

          <div className="sizes-section" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>Size:</span>
            <div className="sizes-list" style={{ display: "flex", gap: "10px" }}>
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="purchase-section" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className="quantity-selector" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            <button className="buy-now-btn" onClick={handleAddToCart}>
              Buy Now
            </button>

            <button className="wishlist-btn" onClick={handleAddToWish}>
              <FaRegHeart />
            </button>
          </div>

          <div className="delivery-info" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <strong>Free Delivery</strong>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;