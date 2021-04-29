import axiosIntance from "../helpers/axios"
import { storeContants } from "./constants"

// export const getAllStore = () => {

//     return async dispatch => {
//         // dispatch({ type: storeContants.GET_ALL_STORE_REQUEST })
//         const res = await axiosIntance.post(`/viewShop`);
//         if (res.status === 200) {

//             const { store } = res.data;
//             dispatch({
//                 type: storeContants.GET_ALL_STORE_SUCCESS,
//                 payload: { store }
//             });
//         }
//  console.log(res);
        
//     }
// }

export const addShop = (shop) =>{
  

    return async (dispatch) => {

        dispatch({ type: storeContants.ADD_NEW_STORE_REQUEST})
        const res = await axiosIntance.post(`/shop/create`, {
            ...shop
        });
        if(res.status === 201){

            const {store} =  res.data;
            dispatch({
                 type: storeContants.ADD_NEW_STORE_SUCCESS,
                   payload: { stores:store }
                   });
           
        }else{
            const {error} =  res.data;
            dispatch({
                type: storeContants.ADD_NEW_STORE_FAILURE,
                  payload: { error }
        });
        }
        
      }

    }
