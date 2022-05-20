import { getPosts_Failed, getPosts_Start, getPosts_Success } from "./postSlice"
import axios from "axios"
// get posts 
export const getPostLists = async (dispatch) => {
    dispatch(getPosts_Start())
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        res.data && dispatch(getPosts_Success(res.data))
    } catch (error) {
        dispatch(getPosts_Failed(error.message))
    }
}