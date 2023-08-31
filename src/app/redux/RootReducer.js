import { combineReducers } from "redux";
import postsReducer from "@feat/post/postsSlice";

export const rootReducer = combineReducers({
  posts: postsReducer,
});
