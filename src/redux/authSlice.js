import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const key = "AIzaSyCxZG5Z9fTjmgBLXcek7NitNkMdDR-h3Tw";
const signInUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
  key;
const signUpUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;

export const start = createAsyncThunk("auth/start", (data, thunkAPI) => {
  thunkAPI.dispatch({ type: "auth/init" });
  thunkAPI.dispatch({ type: "auth/loading" });
  axios
    .post(data.method === "signin" ? signInUrl : signUpUrl, {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    })
    .then((response) => {
      thunkAPI.dispatch({ type: "auth/success", payload: response.data });
    })
    .catch((error) => {
      thunkAPI.dispatch({ type: "auth/error", payload: error.response.data });
    });
});

const authInitial = JSON.parse(
  localStorage.getItem("auth") ? localStorage.getItem("auth") : "null"
);

const authSlice = createSlice({
  name: "auth",
  initialState: authInitial
    ? authInitial
    : {
        localId: null,
        idToken: null,
        error: null,
        loading: false,
      },
  reducers: {
    init: (state, action) => {
      state.localId = null;
      state.idToken = null;
      state.error = null;
      state.loading = false;
    },
    loading: (state, action) => {
      state.loading = true;
    },
    success: (state, action) => {
      state.localId = action.payload.localId;
      state.idToken = action.payload.idToken;
      state.loading = false;
    },
    error: (state, action) => {
      state.loading = false;
      state.error = action.payload.error.message;
    },
  },



});

export default authSlice.reducer;
