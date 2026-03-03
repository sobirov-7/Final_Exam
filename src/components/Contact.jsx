import React from 'react'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './Contact.css'
const Contact = () => {
  return (
    <div>
                    <section className="section4_contact">
        <div className="contact_container">

          {/* LEFT SIDE */}
          <div className="contact_left">

            <div className="contact_box">
              <div className="icon">
                {/* PHONE ICON */}
                <FaPhoneAlt/>
              </div>
              <h4>Call To Us</h4>
              <p>We are available 24/7, 7 days a week.</p>
              <span>Phone: +8801611112222</span>
            </div>

            <hr />

            <div className="contact_box">
              <div className="icon">
                {/* MAIL ICON */}
                <FaEnvelope/>
              </div>
              <h4>Write To US</h4>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <span>Emails: customer@exclusive.com</span>
              <span>Emails: support@exclusive.com</span>
            </div>

          </div>

          <div className="contact_right">

            <div className="input_row">
              <input type="text" placeholder="Your Name *" />
              <input type="email" placeholder="Your Email *" />
              <input type="text" placeholder="Your Phone *" />
            </div>

            <textarea placeholder="Your Message"></textarea>

            <button>Send Message</button>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact