import React from 'react'
import img1 from '../assets/Side Image.png'
import './Sign.css'
import { auth, provider } from '../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation();

  return (
    <div id='Sign'>
      <div className="imgbox">
        <img src={img1} alt={t("createAccount")} />
      </div>
      <div className="signbox">
        <h2>{t("createAccount")}</h2>
        <p>{t("enterDetails")}</p>

        <input type="text" placeholder={t("name")} />
        <input type="email" placeholder={t("emailOrPhone")} />
        <input type="password" placeholder={t("password")} />
        <button>{t("createAccount")}</button>
        <button onClick={loginWithGoogle}>{t("signupGoogle")}</button>
        <small>{t("alreadyAccount")}</small>
      </div>
    </div>
  )
}

export default Sign;