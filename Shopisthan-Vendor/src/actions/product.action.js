import axios from "axios"
import axiosIntance from "../helpers/axios";
import { categoryContants, productContants, storeDataContants } from "./constants";


const getStoreData = () => {
    return async dispatch => {
        dispatch({ type: storeDataContants.GET_ALL_STORE_DATA_REQUEST});
        const res = await axiosIntance.post(`/storeData`);
        if (res.status === 200) {
            const { categories, storeProducts } = res.data;
            dispatch({
                type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories }
            });
            dispatch({
                type: productContants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { storeProducts }
            });
           
            
        }
  
    }
}


export const addProduct = (from) =>{
 return async dispatch => {
  
  dispatch({ type: productContants.ADD_NEW_PRODUCT_REQUEST});
         try{
             const res = await axiosIntance.post('product/create',from);
             if(res.status === 201){
                 dispatch({
                     type: productContants.ADD_NEW_PRODUCT_SUCCESS,
                     payload: {product: res.data.product}
                 });
                 dispatch(getStoreData());

             }else{
                 dispatch({
                    type: productContants.ADD_NEW_PRODUCT_FAILURE,
                    payload: {error: res.data.error}
                 })
             }
         }catch(error){
             console.log(error);
         }


}
}


export const deleteProductById = (payload) => {

    return async (dispatch) => {
      try {
        const res = await axiosIntance.delete(`/product/deleteProductById`, {
        data : {payload },
        });
        dispatch({ type: productContants.DELETE_PRODUCT_BY_ID_REQUEST });
        if (res.status === 202) {
          dispatch({ type: productContants.DELETE_PRODUCT_BY_ID_SUCCESS });
          dispatch(getStoreData());
        } else {
          const { error } = res.data;
          dispatch({
            type: productContants.DELETE_PRODUCT_BY_ID_FAILURE,
            payload: {
              error,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };