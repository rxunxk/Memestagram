import { createSlice } from "@reduxjs/toolkit";

const commentCount = createSlice({
  name: "commentCount",
  initialState: 0,
  reducers: {
    setCommentCount: (state, action) => action.payload,
  },
});
