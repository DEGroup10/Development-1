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
    // /shop/create
//    console.log(from);
console.log(shop);
    return async dispatch => {
        const res = await axiosIntance.post(`/shop/create`, {
            ...shop
        });
        if(res.status === 201){
            const {store} =  res.data;
            console.log(store);
        }else{
            const {error} =  res.data;
             console.log(error);
        }
        
      }

    }
