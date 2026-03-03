import React from 'react'
import './About.css'
import { FaStore, FaDollarSign, FaUsers, FaShoppingBag } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import img20 from '../assets/Side Image (1).png'
import img21 from '../assets/man1.svg'
import img22 from '../assets/women1.svg'
import img23 from '../assets/man 2.svg'

const About = () => {
  return (
    <div>
      <section className='section1_about'>
        <div className="about_text1">
          <h1 className='h11'>Our Story</h1>
          <p className='p11'>Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions <br />, Exclusive has 10,500 sallers and 300 brands and serves <br /> 3 millioons customers across the region. </p><br /><br /><br />
          <p className='p11'>Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
        </div>
        <img src={img20} alt="" className='imgg20' />
      </section>

          <section className="section2_about">
      <div className="about_stats">

        <div className="stat_card">
          <div className="icon">
            <FaStore/>
          </div>
          <h3>10.5k</h3>
          <p>Sellers active our site</p>
        </div>

        <div className="stat_card active">
          <div className="icon">
            <FaDollarSign/>
          </div>
          <h3>33k</h3>
          <p>Monthly Product Sale</p>
        </div>

        <div className="stat_card">
          <div className="icon">
            <FaUsers/>
          </div>
          <h3>45.5k</h3>
          <p>Customer active in our site</p>
        </div>

        <div className="stat_card">
          <div className="icon">
            <FaShoppingBag/>
          </div>
          <h3>25k</h3>
          <p>Annual gross sale in our site</p>
        </div>

      </div>
    </section>

            <section className="section3_about">
          <div className="about_team">

            <div className="team_card">
              <div className="team_img">
                {/* RASM */}
                <img src={img21} alt="" />
              </div>
              <h3>Tom Cruise</h3>
              <p>Founder & Chairman</p>

              <div className="team_icons">
                {/* ICONLAR */}
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>

            <div className="team_card">
              <div className="team_img">
                <img src={img22} alt="" />
              </div>
              <h3>Emma Watson</h3>
              <p>Managing Director</p>

              <div className="team_icons">
                {/* ICONLAR */}
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>

            <div className="team_card">
              <div className="team_img">
                <img src={img23} alt="" />
              </div>
              <h3>Will Smith</h3>
              <p>Product Designer</p>

              <div className="team_icons">
                {/* ICONLAR */}
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>

          </div>
        </section>
    </div>
  )
}

export default About