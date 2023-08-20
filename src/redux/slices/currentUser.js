import { createSlice } from "@reduxjs/toolkit";
const currentUser = createSlice({
  name: "currentUser",
  initialState: {},
  reducers: {
    setCurrentUser: (state, action) => action.payload,
  },
});

export const { setCurrentUser } = currentUser.actions;

export default currentUser.reducer;
