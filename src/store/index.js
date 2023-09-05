import { configureStore } from "@reduxjs/toolkit";
import cartToggleReducer from '../store/cart-toggle-slice'
import onCartReducer from '../store/on-cart'

const store = configureStore({
  reducer: {
    cartToggle: cartToggleReducer,
    onCart: onCartReducer,
  }
})


export default store;