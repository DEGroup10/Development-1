

import { storeContants } from "../actions/constants";

const initialState = {
    stores: []
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
    }
    return state;
}