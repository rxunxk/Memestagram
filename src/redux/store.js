import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./slices/commentSlice";
import currentUserReducer from "./slices/currentUser";

export const store = configureStore({
  reducer: {
    comment: commentReducer,
    currentUser: currentUserReducer,
  },
  devTools: true,
});
