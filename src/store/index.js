import { createSlice, configureStore } from "@reduxjs/toolkit";

let initAuthValues;
if (localStorage.getItem("token") !== null) {
  initAuthValues = { token: localStorage.getItem("token"), isLoggedIn: true };
} else {
  initAuthValues = { token: null, isLoggedIn: false };
}

const authSlice = createSlice({
  name: "authentication",
  initialState: initAuthValues,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { token: null, isLoggedIn: false },
  reducers: {
    addItem() {},
    removeItem() {},
    showList() {},
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export default store;
