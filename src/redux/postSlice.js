import { createSlice } from '@reduxjs/toolkit'
const PostLists = createSlice({
    name: "PostLists",
    initialState: {
        loading: false,
        postLists: null,
        error: false,
    },
    reducers: {
        getPosts_Start: (state) => { state.loading = true },
        getPosts_Success: (state, action) => {
            state.loading = false;
            state.postLists = action.payload
        },
        getPosts_Failed: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})
export const { getPosts_Start, getPosts_Success, getPosts_Failed } = PostLists.actions
export default PostLists.reducer