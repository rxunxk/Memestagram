import { createSlice } from "@reduxjs/toolkit";
const logoutDialog = createSlice({
  name: "LogoutDialog",
  initialState: false,
  reducers: {
    setLogoutDialog: (state) => !state,
  },
});

export const { setLogoutDialog } = logoutDialog.actions;

export default logoutDialog.reducer;
