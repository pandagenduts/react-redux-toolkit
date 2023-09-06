import { createSlice } from "@reduxjs/toolkit"

const initUI = {
  isShowCart: true,
  theNotification: null,
}

const UISlice = createSlice({
  name: 'UISlice',
  initialState: initUI,
  reducers: {
    toggleCart: (state) => {
      state.isShowCart = !state.isShowCart
    },
    updateNotif: (state, action) => {
      state.theNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
    }
  }
})

export const UIActions = UISlice.actions;

export default UISlice.reducer;