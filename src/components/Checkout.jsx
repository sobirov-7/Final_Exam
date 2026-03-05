import React from "react";
import "./Checkout.css";
import { useTranslation } from "react-i18next";

const Checkout = () => {
  const { t } = useTranslation();

  return (
    <section className="section1_checkout">
      <div className="checkout_container">

        <div className="billing">
          <h2>{t("billingDetails")}</h2>

          <input type="text" placeholder={t("firstName")} />
          <input type="text" placeholder={t("companyName")} />
          <input type="text" placeholder={t("streetAddress")} />
          <input type="text" placeholder={t("apartmentOptional")} />
          <input type="text" placeholder={t("townCity")} />
          <input type="text" placeholder={t("phoneNumber")} />
          <input type="email" placeholder={t("emailAddress")} />

          <label className="checkbox">
            <input type="checkbox" />
            {t("saveInfo")}
          </label>
        </div>

        <div className="order">

          <div className="summary">
            <div>
              <p>{t("subtotal")}:</p>
              <span>$1750</span>
            </div>
            <div>
              <p>{t("shipping")}:</p>
              <span>{t("free")}</span>
            </div>
            <div className="total">
              <p>{t("total")}:</p>
              <span>$1750</span>
            </div>
          </div>

          <div className="payment">
            <label>
              <input type="radio" name="pay" />
              {t("bank")}
            </label>
            <label>
              <input type="radio" name="pay" defaultChecked />
              {t("cashOnDelivery")}
            </label>
          </div>

          <div className="coupon">
            <input type="text" placeholder={t("couponCode")} />
            <button type="button">{t("applyCoupon")}</button>
          </div>

          <button className="order_btn" type="button">
            {t("placeOrder")}
          </button>

        </div>

      </div>
    </section>
  );
};

export default Checkout;