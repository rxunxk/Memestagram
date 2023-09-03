import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./slices/commentSlice";
import currentUserReducer from "./slices/currentUser";
import logoutDialogReducer from "./slices/logoutDialog";

export const store = configureStore({
  reducer: {
    comment: commentReducer,
    currentUser: currentUserReducer,
    logoutDialog: logoutDialogReducer,
  },
  devTools: true,
});
