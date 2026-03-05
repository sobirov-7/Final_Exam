import { useDispatch, useSelector } from "react-redux";
import "./Wishlist.css";
import { removeFromWish } from '../redux/cartSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.cart.wishlist);

  return (
    <section className="section1_wishlist">
      <div className="wishlist_container">

        <div className="wishlist_table">
          <div className="wishlist_header">
            <p>Product</p>
            <p>Price</p>
            <p>Actions</p>
          </div>

          {wishlist.length === 0 ? (
            <p style={{ padding: "20px" }}>Your wishlist is empty</p>
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
                  {/* <button
                    onClick={() => console.log("Move to cart:", item.id)}
                  >
                    Move to Cart
                  </button> */}
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