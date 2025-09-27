import { configureStore } from "@reduxjs/toolkit";
import homeDataSlice from "./features/homeDataSlice";
import LoginSlice from "./features/LoginSlice";
import signupReducer from "./features/signupSlice";

export const store = configureStore({
  reducer: {
    aiData: homeDataSlice,
    login: LoginSlice,
    signup: signupReducer,
  },
});
