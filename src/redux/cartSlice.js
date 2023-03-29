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

export const setAside = createAsyncThunk(
  "signout",
  async (delayed, thunkAPI) => {
    const response = await axios.post(
      "https://test-firebase-d7b5e-default-rtdb.firebaseio.com/setasidecart.json",
      delayed
    );

    return response.data;
  }
);

// ==========
// localStorage.clear();

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
    add: (state, action) => {
      if (state.items[action.payload]) {
        console.log(action.payload);
        state.items[action.payload]++;
      } else {
        state.items[action.payload] = 1;
      }
    },
    remove: (state, action) => {
      delete state.items[action.payload];
    },
    increment: (state, action) => {
      console.log(action.payload);
      state.items[action.payload]++;
    },
    decrement: (state, action) => {
      if (state.items[action.payload] > 1) {
        state.items[action.payload]--;
      } else {
        delete state.items[action.payload];
      }
    },
  },

  extraReducers: {
    [checkout.fulfilled]: (state, action) => {
      console.log(action);
      state.items = {};
    },
  },
});

export const { add, remove, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
