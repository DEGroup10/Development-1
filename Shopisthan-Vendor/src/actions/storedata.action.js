import axiosIntance from "../helpers/axios";
import { categoryContants, productContants, storeDataContants } from "./constants"

export const getStoreData = () => {
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
