import React, { useState } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../redux/cartSlice";
import { useTranslation } from "react-i18next";
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
    descriptionKey: "product1Desc"
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
    descriptionKey: "product2Desc"
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
    descriptionKey: "product3Desc"
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
    descriptionKey: "product4Desc"
  },
];

const ProductDetails = () => {
  const { t } = useTranslation();
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
        {t("account")} / {t("gaming")} / <strong>{product.name}</strong>
      </div>

      <div className="product-wrapper">
        <div className="product-images">
          <div className="thumbnail-list">
            {[1, 2, 3].map((n) => (
              <img
                key={n}
                src={product.img}
                alt={`${product.name} ${n}`}
                className={`thumbnail ${n === 1 ? "active" : ""}`}
              />
            ))}
          </div>
          <img src={product.img} alt={product.name} className="main-img" />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>

          <div className="rating-stock">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < product.rating ? "star active" : "star"} />
            ))}
            <span>({product.reviews} {t("reviews")})</span>
            <span className="in-stock"> | {t("inStock")}</span>
          </div>

          <div className="price">
            ${product.price.toFixed(2)}
            {product.oldPrice > 0 && <span className="old-price">${product.oldPrice.toFixed(2)}</span>}
          </div>

          <p className="description">{t(product.descriptionKey)}</p>

          <div className="colors-section">
            <span>{t("colors")}:</span>
            <div className="colors-list">
              {colors.map((c) => (
                <span
                  key={c.id}
                  className={`color-circle ${selectedColor === c.color ? "selected" : ""}`}
                  style={{ backgroundColor: c.color }}
                  onClick={() => setSelectedColor(c.color)}
                />
              ))}
            </div>
          </div>

          <div className="sizes-section">
            <span>{t("size")}:</span>
            <div className="sizes-list">
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

          <div className="purchase-section">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            <button className="buy-now-btn" onClick={handleAddToCart}>
              {t("buyNow")}
            </button>

            <button className="wishlist-btn" onClick={handleAddToWish}>
              <FaRegHeart />
            </button>
          </div>

          <div className="delivery-info">
            <strong>{t("freeDelivery")}</strong>
            <p>{t("enterPostal")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;