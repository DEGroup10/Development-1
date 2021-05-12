import { storeContants } from "../actions/constants";

const initialState = {
    stores: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        // case storeContants.GET_ALL_STORE_SUCCESS:
        case storeContants.GET_ALL_STORE_SUCCESS:
            state = {
                ...state,
                stores: action.payload.stores
            }
            break;
         case storeContants.ADD_NEW_STORE_REQUEST:
                state = {
                    ...state,
                    loading:true,
                    stores: action.payload.stores
                }
                break;
          case storeContants.ADD_NEW_STORE_SUCCESS:
                    state = {
                        ...state,
                        stores: action.payload.stores,
                        loading:false
                    }
                    break;
           case storeContants.ADD_NEW_STORE_FAILURE:
                        state = {
                            ...state,
                            error:action.payload.error,
                            loading:false
                        }
                        break;

    }
    return state;
}