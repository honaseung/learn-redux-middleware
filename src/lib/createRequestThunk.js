import { startLoading, finishLoading } from "../modules/loading";

const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (param) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(param);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: error,
        error: true,
      });
      dispatch(finishLoading(type));
      throw error;
    }
  };
};

export default createRequestThunk;
