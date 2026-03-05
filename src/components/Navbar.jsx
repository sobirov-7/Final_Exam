import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Home from '../components/Home.jsx'
import Contact from '../components/Contact.jsx'
import About from '../components/About.jsx'
import Sign from '../components/Sign.jsx'
import NotFound from '../components/NotFound.jsx'
import Wishlist from '../components/Wishlist.jsx'
import Cart from '../components/Cart.jsx'
import Checkout from '../components/Checkout.jsx'
import Account from '../components/Account.jsx'
import ProductDetails from '../components/ProductDetails.jsx'
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from 'react-redux'






const Navbar = () => {

	const cartItems = useSelector((state) => state.cart.cartItems);
	const wishlist = useSelector((state) => state.cart.wishlist);



	return (
		<div className='Navbar'>
			<div className="Nav_header">
				<p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>ShopNow</span></p>
				<select name="" id="">
					<option value="English">English</option>
					<option value="Russia">Russia</option>
					<option value="UZB">UZB</option>
				</select>
			</div>
			<nav>
				<div className="name1">
				<h2>Exclusive</h2>
				</div>
				<div className="links">
					<ul>
					<li><Link to={"/"}>Home</Link></li>
					<li><Link to={"/contact"}>Contact</Link></li>
					<li><Link to={"/about"}>About</Link></li>
					<li><Link to={"/sign"}>Sign Up</Link></li>
				</ul>
				</div>
				<div className="search">
					<input type="text" placeholder='What are you looking for?'/>
					<span><Link to={"/wishlist"}><FaRegHeart/></Link><span className='leng2'>{wishlist.length}</span></span>
					<span><Link to={'/cart'}><FiShoppingCart/></Link><span className='leng1'>{cartItems.length}</span></span>
					<span><Link to={'/sign'}><IoPersonOutline/></Link></span>
				</div>
			</nav>
		</div>
	)
}

export default Navbar