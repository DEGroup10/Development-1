import axiosIntance from "../helpers/axios";
import { authConstants } from "./constants";

export const isUserLoggedIn = () => {
    return async (dispatch) => {
      const token = localStorage.getItem("token");
      if (token) {
        const store = JSON.parse(localStorage.getItem("store"));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            store
          }
        });
      } else {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: "Failed to login" }
        });
      }
    };
  };


  
export const login = (store) => {



  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axiosIntance.post(`/store/signin`, {
      ...store
    });

    if (res.status === 200) {
      const { token, store } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("store", JSON.stringify(store));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          store
        }
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error }
        });
      }
    }
  };
};


export const signout = () => {
  return async dispatch => {

    dispatch({ type: authConstants.LOGOUT_REQUEST });

    const res = await axiosIntance.post(`/admin/signout`)
    if (res.status === 200) {
      localStorage.clear();
      dispatch({
        type: authConstants.LOGOUT_SUCCESS
      });

    } else {

      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res.data.error }
      });
    }


  }
}
