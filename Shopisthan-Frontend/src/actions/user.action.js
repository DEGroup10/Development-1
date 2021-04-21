import axios from "../helpers/axios";
import { authConstants } from "./constants";


// export const userSignup = (user) => {

//   console.log(user);


//   return async (dispatch) => {
//     dispatch({ type: userContants.USER_REGISTER_REQUEST });
//     const res = await axiosIntance.post(`/signup`, {
//       ...user
//     });

//     if (res.status === 201) {
//       const { message } = res.data;
      
//       dispatch({
//         type: userContants.USER_REGISTER_SUCCESS,
//         payload: {
//          message
//         }
//       });
//     } else {
//       if (res.status === 400) {
//         dispatch({
//           type: userContants.USER_REGISTER_FAILURE,
//           payload: { error: res.data.error }
//         });
//       }
//     }
//   };
// };


export const userSignup = (user) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: authConstants.SIGNUP_REQUEST });
      res = await axios.post(`/user/signup`, user);
      if (res.status === 201) {
        dispatch({ type: authConstants.SIGNUP_SUCCESS });
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        const { error } = res.data;
        dispatch({ type: authConstants.SIGNUP_FAILURE, payload: { error } });
      }
    } catch (error) {
      // const { data } = error.response;
      dispatch({
        type: authConstants.SIGNUP_FAILURE,
        payload: { error },
      });
    }
  };
};

export const userLogin = (user) => {

  console.log(user);


  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(`/user/signin`, {
      ...user
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user
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

