import axios from "axios"
import axiosIntance from "../helpers/axios";
import { categoryContants, productContants, storeDataContants } from "./constants";


const getStoreData = () => {
    return async dispatch => {
        dispatch({ type: storeDataContants.GET_ALL_STORE_DATA_REQUEST});
        const res = await axiosIntance.post(`/storeData`);
        if (res.status === 200) {
            const { categories, storeProducts } = res.data;
            // console.log(categories, storeProducts);
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
  // const res = await axiosIntance.post(`product/create`, from);
  // console.log(res);
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

// /product/create