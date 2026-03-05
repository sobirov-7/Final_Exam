import React from 'react';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="section4_contact">
        <div className="contact_container">

          {/* LEFT SIDE */}
          <div className="contact_left">

            <div className="contact_box">
              <div className="icon">
                <FaPhoneAlt/>
              </div>
              <h4>{t("callToUs")}</h4>
              <p>{t("available247")}</p>
              <span>{t("phone")}: +8801611112222</span>
            </div>

            <hr />

            <div className="contact_box">
              <div className="icon">
                <FaEnvelope/>
              </div>
              <h4>{t("writeToUs")}</h4>
              <p>{t("contactFormInfo")}</p>
              <span>{t("emails")}: customer@exclusive.com</span>
              <span>{t("emails")}: support@exclusive.com</span>
            </div>

          </div>

          <div className="contact_right">

            <div className="input_row">
              <input type="text" placeholder={t("yourName")} />
              <input type="email" placeholder={t("yourEmail")} />
              <input type="text" placeholder={t("yourPhone")} />
            </div>

            <textarea placeholder={t("yourMessage")}></textarea>

            <button>{t("sendMessage")}</button>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact;