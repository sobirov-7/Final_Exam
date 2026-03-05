import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeQuantity, removeFromCart } from "../redux/cartSlice"
import "./Cart.css"
import { useTranslation } from "react-i18next"

const Cart = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cartItems)

  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const applyCoupon = () => {
    if (coupon === "SALE10") {
      setDiscount(subtotal * 0.1)
    } else {
      setDiscount(0)
    }
  }

  const total = subtotal - discount

  return (
    <section className="section1_cart">
      <div className="cart_container">

        {/* TABLE */}
        <div className="cart_table">
          <div className="cart_header">
            <p>{t("product")}</p>
            <p>{t("price")}</p>
            <p>{t("quantity")}</p>
            <p>{t("subtotal")}</p>
          </div>

          {cart.length === 0 ? (
            <p style={{ padding: "20px" }}>{t("cartIsEmpty")}</p>
          ) : (
            cart.map((item) => (
              <div className="cart_row" key={item.id}>
                <div className="product">
                  <span onClick={() => dispatch(removeFromCart(item.id))}>❌</span>
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>

                <p>${item.price}</p>

                <select
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(
                      changeQuantity({
                        id: item.id,
                        quantity: +e.target.value,
                      })
                    )
                  }
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>

                <p>${item.price * item.quantity}</p>
              </div>
            ))
          )}
        </div>

        {/* BUTTONS */}
        <div className="cart_actions">
          <button>{t("returnToShop")}</button>
          <button>{t("updateCart")}</button>
        </div>

        {/* BOTTOM */}
        <div className="cart_bottom">

          <div className="coupon">
            <input
              type="text"
              placeholder={t("couponCode")}
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button onClick={applyCoupon}>{t("apply")}</button>
          </div>

          <div className="cart_total">
            <h3>{t("cartTotal")}</h3>
            <p>{t("subtotalAmount", { subtotal })}</p>
            <p>{t("shipping")}</p>
            <p>{t("totalAmount", { total })}</p>
            <button disabled={cart.length === 0}>
              {t("proceedToCheckout")}
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Cart