import { INIT_STATE } from "../../constant";
import { getPost, getType, createPost, updatePost } from "../action";
export default function postReducer(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPost.getPostRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPost.getPostSuccess):
      console.log(action);
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPost.getPostFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPost.createPostSuccess):
        console.log(state.data)
        console.log(action.payload)
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(updatePost.updatePostSuccess):
      return {
        ...state,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
}
