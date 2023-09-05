import { createSlice } from "@reduxjs/toolkit"

const initCartToggle = {
  isShowCart: true,
}

const cartToggleSlice = createSlice({
  name: 'cartToggle',
  initialState: initCartToggle,
  reducers: {
    toggleCart: (state) => {
      state.isShowCart = !state.isShowCart
    }
  }
})

export const cartToggleActions = cartToggleSlice.actions;

export default cartToggleSlice.reducer;