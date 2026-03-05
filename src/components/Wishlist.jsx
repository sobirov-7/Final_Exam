import { useDispatch, useSelector } from "react-redux";
import "./Wishlist.css";
import { removeFromWish } from '../redux/cartSlice';
import { useTranslation } from "react-i18next";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.cart.wishlist);
  const { t } = useTranslation();

  return (
    <section className="section1_wishlist">
      <div className="wishlist_container">

        <div className="wishlist_table">
          <div className="wishlist_header">
            <p>{t("product")}</p>
            <p>{t("price")}</p>
            <p>{t("actions")}</p>
          </div>

          {wishlist.length === 0 ? (
            <p style={{ padding: "20px" }}>{t("wishlistEmpty")}</p>
          ) : (
            wishlist.map((item) => (
              <div className="wishlist_row" key={item.id}>
                <div className="product">
                  <span
                    onClick={() => dispatch(removeFromWish(item.id))}
                  >
                    ❌
                  </span>

                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>

                <p>${item.price}</p>

                <div className="wishlist_actions">
                  {/* Move to Cart button can be added here if needed */}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default Wishlist;