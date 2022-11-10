import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./singSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export { authActions } from "./singSlice";
