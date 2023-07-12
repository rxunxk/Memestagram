import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./slices/commentSlice";

export const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
  devTools: true,
});
