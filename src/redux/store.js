import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
export const store = configureStore({
    reducer: {
        PostList: postReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
})