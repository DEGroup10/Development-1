import axios from "axios"
import axiosIntance from "../helpers/axios";

export const addProduct = (from) =>{
 return async dispatch => {
  const res = await axiosIntance.post(`product/create`, from);
  console.log(res);
}
}

// /product/create