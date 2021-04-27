import axiosIntance from "../helpers/axios";
import axios from "../helpers/axios";
import { authConstants } from "./constants";

export const login = (admin) => {

  // console.log(admin);


  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axiosIntance.post(`/admin/signin`, {
      ...admin
    });

    if (res.status === 200) {
      const { token, admin } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("admin", JSON.stringify(admin));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          admin
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


// export const signup = (user) => {

//   console.log(user);


//   return async (dispatch) => {
//     dispatch({ type: authConstants.LOGIN_REQUEST });
//     const res = await axiosIntance.post(`/admin/signup`, {
//       ...user
//     });

//     if (res.status === 201) {
//       const { message } = res.data;

//       dispatch({
//         type: authConstants.LOGIN_SUCCESS,
//         payload: {
//           token,
//           user
//         }
//       });
//     } else {
//       if (res.status === 400) {
//         dispatch({
//           type: authConstants.LOGIN_FAILURE,
//           payload: { error: res.data.error }
//         });
//       }
//     }
//   };
// };


export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const admin = JSON.parse(localStorage.getItem("admin"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          admin
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


export const signout = () => {
  return async dispatch => {

    dispatch({ type: authConstants.LOGOUT_REQUEST });

    const res = await axios.post(`/admin/signout`)
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




// export const reset = (user) => {
//   return async dispatch => {

//     // dispatch({ type: authConstants.LOGOUT_REQUEST });
//     console.log(user);
      
//     const res = await axios.post(`/admin/reset-password`,user)
//     if (res.status !== 422) {
//       // console.log("Run");
//       // console.log(res);
//       // return(res);
//       return true;
//     } else {

//      return false;
//     }


//   }
// }




export const newPassword = (user) => {
  return async dispatch => {

    // dispatch({ type: authConstants.LOGOUT_REQUEST });
    console.log(user);

    const res = await axios.post(`/new-password`,user)
    if (res.status === 200) {
      console.log("Run");
      console.log(res);
    } else {

     console.log("Error");
    }


  }
}
