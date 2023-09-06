import { configureStore } from "@reduxjs/toolkit";
import cartToggleReducer from './ui-slice'
import onCartReducer from '../store/on-cart'

const store = configureStore({
  reducer: {
    theUI: cartToggleReducer,
    onCart: onCartReducer,
  }
})


export default store;