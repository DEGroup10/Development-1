import axiosIntance from "../helpers/axios";
import { categoryContants, productConstants, storeContants } from "./constants"

export const getInitialData = () => {
    return async dispatch => {
        // dispatch({ type: initialDataContants.GET_ALL_INITIAL_DATA_REQUEST });
        const res = await axiosIntance.post(`/initialData`);
        if (res.status === 200) {
            const { categories, products,stores } = res.data;
            dispatch({
                type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories }
            });
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { products }
            });
            dispatch({
                type: storeContants.GET_ALL_STORE_SUCCESS,
                payload: { stores }
            });           
        }
      console.log(res);
    }
}
