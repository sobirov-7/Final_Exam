import React from "react";
import "./Footer.css";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>Exclusive</h3>
          <h4>{t("subscribe")}</h4>
          <p>{t("firstOrderDiscount")}</p>

          <div className="subscribe-box">
            <input type="email" placeholder={t("enterEmail")} />
            <button>➤</button>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t("support")}</h4>
          <p>
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-col">
          <h4>{t("account")}</h4>
          <ul>
            <li>{t("myAccount")}</li>
            <li>{t("loginRegister")}</li>
            <li>{t("cart")}</li>
            <li>{t("wishlist")}</li>
            <li>{t("shop")}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("quickLink")}</h4>
          <ul>
            <li>{t("privacyPolicy")}</li>
            <li>{t("termsOfUse")}</li>
            <li>{t("faq")}</li>
            <li>{t("contact")}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("downloadApp")}</h4>
          <p>{t("saveWithApp")}</p>

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
            <span>Facebook</span>
            <span>Telegram</span>
            <span>Instagram</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {t("copyright")} 2022. {t("allRightsReserved")}
      </div>
    </footer>
  );
};

export default Footer;