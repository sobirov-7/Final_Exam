import React from 'react'
import img1 from '../assets/Side Image (1).png'
import './About.css'

const About = () => {
	return (
		<div className='About'>
			<div className="textbox1">
				<h2>Our Story</h2>
				<p>Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
				makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. <br /><br /> <br />
				Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.
				</p>
			</div>
			<div className="imgbox1">
				<img src={img1} alt="" />
			</div>
		</div>
	)
}

export default About