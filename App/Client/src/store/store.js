import { configureStore } from "@reduxjs/toolkit";
import homeDataSlice from "./features/homeDataSlice";

export const store = configureStore({
  reducer: {
    aiData: homeDataSlice,
  },
});
