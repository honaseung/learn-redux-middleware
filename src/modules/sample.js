import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";
import createRequestSaga from "../lib/createRequestSaga";
import { finishLoading, startLoading } from "./loading";

const GET_POSTS = "sample/GET_POST";
const GET_POSTS_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POSTS_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

export const getPosts = createAction(GET_POSTS, (id) => id);
export const getUsers = createAction(GET_USERS);

const getPostsSaga = createRequestSaga(GET_POSTS, api.getPosts);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// export function* getPostsSaga(action) {
//   yield put(startLoading(GET_POSTS));
//   try {
//     const response = yield call(api.getPosts, action.payload);
//     yield put({
//       type: GET_POSTS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     yield put({
//       type: GET_POSTS_FAILURE,
//       payload: error,
//       error: true,
//     });
//     throw error;
//   }
//   yield put(finishLoading(GET_POSTS));
// }
// export function* getUsersSaga(action) {
//   yield put(startLoading(GET_USERS));
//   try {
//     const response = yield call(api.getUsers, action.payload);
//     yield put({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     yield put({
//       type: GET_USERS_FAILURE,
//       payload: error,
//       error: true,
//     });
//     throw error;
//   }
//   yield put(finishLoading(GET_USERS));
// }

export function* sampleSage() {
  yield takeLatest(GET_POSTS, getPostsSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// export const getPosts = createRequestThunk(GET_POSTS, api.getPosts);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

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
