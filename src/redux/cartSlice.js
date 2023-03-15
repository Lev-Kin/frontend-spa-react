import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const checkout = createAsyncThunk(
  "cart/checkout",
  async (order, thunkAPI) => {
    const response = await axios.post(
      "https://test-firebase-d7b5e-default-rtdb.firebaseio.com/orders.json",
      order
    );

    return response.data;
  }
);

//localStorage.clear();

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(
      localStorage.getItem("cartItems")
        ? localStorage.getItem("cartItems")
        : "{}"
    ),
  },
  reducers: {
    sizze: (store, action) => {
      if (store.items[action.payload]) {
        store.items[action.payload]++;
      } else {
        store.items[action.payload] = 1;
      }
    },

    add: (store, action) => {



      if (store.items[action.payload]) {
        store.items[action.payload]++;
      } else {
        store.items[action.payload] = 1;
      }
    },

    remove: (store, action) => {
      delete store.items[action.payload];
    },
    increment: (store, action) => {
      store.items[action.payload]++;
    },
    decrement: (store, action) => {
      if (store.items[action.payload] > 1) {
        store.items[action.payload]--;
      } else {
        delete store.items[action.payload];
      }
    },
  },
  extraReducers: {
    [checkout.fulfilled]: (store, action) => {
      console.log(action);
      store.items = {};
    },
  },
});

export const {  sizze, add, remove, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
