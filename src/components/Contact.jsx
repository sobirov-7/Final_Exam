import axios from "axios"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import './Contact.css'

const TELEGRAM_BOT_TOKEN = "8587953455:AAGzYJBUp0ZgyrJfXBxxsDq0TL5C3JG9S_w";
const CHAT_ID = "2090651301";

const Contact = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value});
  };

  const handleSubmit = async () => {

    const text = `
      📩 Yangi xabar

      👤 Name: ${form.name}
      📧 Email: ${form.email}
      📞 Phone: ${form.phone}

      📝 Message:
      ${form.message}
      `;

    try {
      const res = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          text:text
        }
      );

      if(res.status === 200){
        alert("Xabar yuborildi!");
        setForm({
          name:"",
          email:"",
          phone:"",
          message:""
        });
      }

    } catch (error) {
      console.log(error);
      alert("Xatolik yuz berdi!");
    }
  };

  return (
    <div>
      <section className="section4_contact">
        <div className="contact_container">

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
              <input 
                type="text" 
                name="name"
                placeholder={t("yourName")}
                value={form.name}
                onChange={handleChange}
              />

              <input 
                type="email"
                name="email"
                placeholder={t("yourEmail")}
                value={form.email}
                onChange={handleChange}
              />

              <input 
                type="text"
                name="phone"
                placeholder={t("yourPhone")}
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <textarea 
              name="message"
              placeholder={t("yourMessage")}
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button onClick={handleSubmit}>
              {t("sendMessage")}
            </button>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact;