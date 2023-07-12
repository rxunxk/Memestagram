import { createSlice, createSelector } from "@reduxjs/toolkit";
const commentSlice = createSlice({
  name: "Comment",
  initialState: false,
  reducers: {
    showCommentDialog: (state) => !state,
  },
});

export const getCommentSelectors = createSelector(
  (state) => state.comment,
  (state) => state
);

export const { showCommentDialog } = commentSlice.actions;

export default commentSlice.reducer;
