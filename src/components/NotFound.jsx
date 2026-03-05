import React from 'react'
import './NotFound.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className='section111'>
      <h1>404 {t("notFound")}</h1>
      <p className='notf'>{t("pageNotFound")}</p>
      <div className="btn_box">
        <button onClick={() => navigate('/')}>{t("backHome")}</button>
      </div>
    </div>
  )
}

export default NotFound