import { createSlice } from "@reduxjs/toolkit"

const onCartInitValue = {
  items: [],
  totalItems: 0,
}

function totalCart (theItem) {
  // theItem.
}

const onCartSlice = createSlice({
  name: 'onCartSlice',
  initialState: onCartInitValue,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const itemExist = state.items.find(item => item.id === newItem.id)

      if(itemExist) {
        itemExist.amount += 1;
        itemExist.total = itemExist.amount * itemExist.price;
        state.totalItems += 1;
      }
      else {
        const toPush = {
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          amount: 1,
          total: newItem.price,
        }
        state.items.push(toPush);
        state.totalItems += 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemExist = state.items.find(item => item.id === itemId)

      if(itemExist.amount === 1) {
        state.items = state.items.filter(item => item.id !== itemId);
        state.totalItems -= 1;
      }
      else if (itemExist.amount > 1) {
        itemExist.amount -= 1;
        state.totalItems -= 1;
        itemExist.total = itemExist.amount * itemExist.price;
      }
    }
  }
})

export const onCartActions =  onCartSlice.actions;

export default onCartSlice.reducer;