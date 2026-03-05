import React from 'react'
import './Account.css'
import { useTranslation } from 'react-i18next'

const Account = () => {
  const { t } = useTranslation()

  return (
    <div>
      <section className="section1_Acc">
        <div className="acc_container">

          <div className="acc_sidebar">
            <p className="title">{t("manageMyAccount")}</p>
            <ul>
              <li className="active">{t("myProfile")}</li>
              <li>{t("addressBook")}</li>
              <li>{t("myPaymentOptions")}</li>
            </ul>

            <p className="title">{t("myOrders")}</p>
            <ul>
              <li>{t("myReturns")}</li>
              <li>{t("myCancellations")}</li>
            </ul>

            <p className="title">{t("myWishlist")}</p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="acc_content">
            <h2>{t("editYourProfile")}</h2>

            <div className="form_grid">
              <div>
                <label>{t("firstName")}</label>
                <input type="text" placeholder={t("firstNamePlaceholder")} />
              </div>

              <div>
                <label>{t("lastName")}</label>
                <input type="text" placeholder={t("lastNamePlaceholder")} />
              </div>

              <div>
                <label>{t("email")}</label>
                <input type="email" placeholder={t("emailPlaceholder")} />
              </div>

              <div>
                <label>{t("address")}</label>
                <input type="text" placeholder={t("addressPlaceholder")} />
              </div>
            </div>

            <div className="password">
              <label>{t("passwordChanges")}</label>
              <input type="password" placeholder={t("currentPassword")} />
              <input type="password" placeholder={t("newPassword")} />
              <input type="password" placeholder={t("confirmNewPassword")} />
            </div>

            <div className="buttons">
              <button className="cancel">{t("cancel")}</button>
              <button className="save">{t("saveChanges")}</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Account