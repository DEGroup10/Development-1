import { productConstants } from "../actions/constants"

const initState = {
    products: [],
    productsByPrice: {
        under5k: [],
        under10: [],
        under15k: [],
        under20: [],
        under30k: []
    }
}



export default (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                 ...action.payload.productsByPrice
                }
            }
        break;
    }

 return state;
}