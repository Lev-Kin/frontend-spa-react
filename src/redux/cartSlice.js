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
  async (order, thunkAPI) => {
    const response = await axios.post(
      "https://test-firebase-d7b5e-default-rtdb.firebaseio.com/setasidecart.json",
      order
    );

    return response.data;
  }
);

// draft ====
// const itemAdapter = createEntityAdapter();
// const initialState = itemAdapter.getInitialState();
// =================

// ==========
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
    //=============== for product id identification
    // image: (state, action) => {
    //   state.items[action.payload] = 1;
    // },

    // for id poduct,size
    add: (state, action) => {
      if (state.items[action.payload]) {
        state.items[action.payload]++;
      } else {
        state.items[action.payload] = 1;
      }
    },

    remove: (state, action) => {
      delete state.items[action.payload];
    },
    increment: (state, action) => {
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

  // draft ===--- need but not work
  // extraReducers: (builder) => {
  //   builder.addCase(checkout, (state, action) => {
  //     const item = action.payload;
  //     const restEntities = Object.values(state.items).filter(
  //       (e) => e.item !== item
  //     );
  //     cartSlice.getInitialState.setAll(state, restEntities);
  //   });
  // },
  // ===========

  // obsolete === old
  extraReducers: {
    [checkout.fulfilled]: (state, action) => {
      console.log(action);
      state.items = {};
    },

    
  },
  // =====
});

export const { add, remove, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
