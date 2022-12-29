import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

const GET_POSTS = "sample/GET_POST";
const GET_POSTS_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POSTS_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

export const getPosts = createRequestThunk(GET_POSTS, api.getPosts);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// export const getPosts = (id) => async (dispatch) => {
//   dispatch({ type: GET_POSTS });
//   try {
//     const response = await api.getPosts(id);
//     dispatch({
//       type: GET_POSTS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_POSTS_FAILURE,
//       payload: error,
//       error: true,
//     });
//     throw error;
//   }
// };

// export const getUsers = (id) => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers(id);
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: error,
//       error: true,
//     });
//     throw error;
//   }
// };

const initialState = {
  posts: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POSTS_SUCCESS]: (state, action) => ({
      ...state,
      posts: action.payload,
    }),
    [GET_POSTS_FAILURE]: (state, action) => ({
      ...state,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
    }),
  },
  initialState
);

export default sample;
