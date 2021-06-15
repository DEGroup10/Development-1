import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import userReducer from './user.reducer';
import productReducer from './product.reducer';
import categoryReducer from './category.reducer';
import orderReducer from './order.reducer';
import pageReducer from './page.reducer'
import storeReducers from './store.reducers';
import storeauthReducer from './auth.store.reducer'



const rootReducer = combineReducers({
    auth: authReducer,
    storeauth:storeauthReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    page: pageReducer,
    store: storeReducers,
    // order: orderReducer

});



export default rootReducer;