import React from 'react'
import './About.css'
import { FaStore, FaDollarSign, FaUsers, FaShoppingBag } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import img20 from '../assets/Side Image (1).png'
import img21 from '../assets/man1.svg'
import img22 from '../assets/women1.svg'
import img23 from '../assets/man 2.svg'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className='section1_about'>
        <div className="about_text1">
          <h1 className='h11'>{t("ourStory")}</h1>
          <p className='p11'>{t("ourStoryText1")}</p>
          <br /><br /><br />
          <p className='p11'>{t("ourStoryText2")}</p>
        </div>
        <img src={img20} alt="" className='imgg20' />
      </section>

      <section className="section2_about">
        <div className="about_stats">

          <div className="stat_card">
            <div className="icon"><FaStore/></div>
            <h3>10.5k</h3>
            <p>{t("sellersActive")}</p>
          </div>

          <div className="stat_card active">
            <div className="icon"><FaDollarSign/></div>
            <h3>33k</h3>
            <p>{t("monthlyProductSale")}</p>
          </div>

          <div className="stat_card">
            <div className="icon"><FaUsers/></div>
            <h3>45.5k</h3>
            <p>{t("customersActive")}</p>
          </div>

          <div className="stat_card">
            <div className="icon"><FaShoppingBag/></div>
            <h3>25k</h3>
            <p>{t("annualGrossSale")}</p>
          </div>

        </div>
      </section>

      <section className="section3_about">
        <div className="about_team">

          <div className="team_card">
            <div className="team_img"><img src={img21} alt="" /></div>
            <h3>{t("team.tomCruise.name")}</h3>
            <p>{t("team.tomCruise.role")}</p>
            <div className="team_icons">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          <div className="team_card">
            <div className="team_img"><img src={img22} alt="" /></div>
            <h3>{t("team.emmaWatson.name")}</h3>
            <p>{t("team.emmaWatson.role")}</p>
            <div className="team_icons">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          <div className="team_card">
            <div className="team_img"><img src={img23} alt="" /></div>
            <h3>{t("team.willSmith.name")}</h3>
            <p>{t("team.willSmith.role")}</p>
            <div className="team_icons">
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