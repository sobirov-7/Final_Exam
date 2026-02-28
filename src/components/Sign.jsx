import React from 'react'
import img1 from '../assets/Side Image.png'
import './Sign.css'
import { auth, provider } from '../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'



const loginWithGoogle = async () => {
  try{
    const result = await signInWithPopup(auth , provider)
    console.log("User:" , result.user);
  }catch(error){
    console.error(error.message);
  }
};

const logout = async () => {
  await signOut(auth);
  console.log("Logged out");
}


const Sign = () => {
	return (
		<div id='Sign'>
			<div className="imgbox">
				<img src={img1} alt="" />
			</div>
			<div className="signbox">
				<h2>Create an account</h2>
				<p>Enter your details below</p>

				<input type="text" placeholder='Name'/>
				<input type="email" placeholder='Email or Phone Number'/>
				<input type="password" placeholder='Password'/>
				<button>Create Account</button>
				<button onClick={loginWithGoogle}>Sign up with Google</button>
				<small>Already have account?</small>
			</div>
		</div>
	)
}

export default Sign