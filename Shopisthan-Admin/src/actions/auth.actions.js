import axiosIntance from "../helpers/axios";
import axios from "../helpers/axios";
import { authConstants } from "./constants";
import { categoryContants, orderConstants, productContants, storeContants } from "./constants"
// export const login = (admin) => {

//   return async (dispatch) => {
//     dispatch({ type: authConstants.LOGIN_REQUEST });
//     const res = await axiosIntance.post(`/admin/signin`, {
//       ...admin
//     });

//     if (res.status === 200) {
//       const { token, admin } = res.data;
//       localStorage.setItem("token", token);
//       localStorage.setItem("admin", JSON.stringify(admin));
//       dispatch({
//         type: authConstants.LOGIN_SUCCESS,
//         payload: {
//           token,
//           admin
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

const getInitialData = () => {
  return async dispatch => {
      const res = await axiosIntance.post(`/initialdata`);
      if (res.status === 200) {
          const { categories, products,stores,orders } = res.data;
          dispatch({
              type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
              payload: { categories }
          });
          dispatch({
              type: productContants.GET_ALL_PRODUCTS_SUCCESS,
              payload: { products }
          });
          dispatch({
              type: storeContants.GET_ALL_STORE_SUCCESS,
              payload: { stores }
          });
          dispatch({
              type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
              payload: { orders }
          });
      }
  }
}



export const login = (admin) => {

  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axiosIntance.post(`/admin/signin`, {
      ...admin 
    });

    if (res.status === 200) {
      const {admin,store,token } = res.data;
       if(admin){
      // const token = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("admin", JSON.stringify(admin));
      dispatch({
        type: authConstants.ADMIN_LOGIN_SUCCESS,
        payload: {
          token,
          admin
        }
      });
      // dispatch(getInitialData())
       }
       if(store){
        // const token = res.data;
        localStorage.setItem("storetoken", token);
        localStorage.setItem("store", JSON.stringify(store));
        dispatch({
          type: authConstants.STORE_LOGIN_SUCCESS,
          payload: {
            token,
            store
          }
        });
       }
     
    }
     
    else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error }
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const admin = JSON.parse(localStorage.getItem("admin"));
      dispatch({
        type: authConstants.ADMIN_LOGIN_SUCCESS,
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


export const isStoreLoggedIn = () => {
  return async (dispatch) => {
    const storetoken = localStorage.getItem("storetoken");
    if (storetoken) {
      const store = JSON.parse(localStorage.getItem("store"));
      dispatch({
        type: authConstants.STORE_LOGIN_SUCCESS,
        payload: {
         token: storetoken,
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





