import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {
    postAdded(state, action) {
      state.posts.push(action.payload);
    },
    postUpdated(state, action) {
      const { id, userId, title, body } = action.payload;
      const existingPosts = state.posts.find((post) => post.id === id);
      if (existingPosts) {
        existingPosts.title = title;
        existingPosts.body = body;
        existingPosts.userId = userId;
      }
    },
    postDeleted(state, action) {
      const { id } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        state.posts = state.posts.filter((post) => post.id !== id);
      }
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = [...state.posts, ...action.payload];
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { postAdded, postUpdated, postDeleted } = postsSlice.actions;

export default postsSlice.reducer;
