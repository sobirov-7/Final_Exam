import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
	wishlist:[]

};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (exist) {
        exist.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
		addToWishlist: (state, action) => {
      const exist = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (exist) {
        exist.quantity += 1;
      } else {
        state.wishlist.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromWish: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },

  },
});

export const { addToCart, removeFromCart, changeQuantity, removeFromWish, addToWishlist  } =
  cartSlice.actions;

export default cartSlice.reducer;