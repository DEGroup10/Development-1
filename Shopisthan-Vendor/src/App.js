import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router';
import Signin from './containers/Sigin';
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from './actions/auth.action';
import Orders from './containers/Order';
import Product from './containers/Product';
import Home from './containers/Home';
import PrivateRoute from './components/HOC/PrivateRoute';
import { getStoreData } from './actions/storedata.action';
import AddProduct from './containers/AddProduct';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch((isUserLoggedIn()));
    }
    dispatch(getStoreData());
 },[]);

  return (
    <div className="App">
             <Switch>
             <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/storeProducts" component={Product} />
             <PrivateRoute path="/storeOrders" component={Orders} />
             <PrivateRoute path="/addProduct" component={AddProduct} />
          
              <Route path="/signin" component={Signin}></Route>
  
            </Switch>
     
    </div>
  );
}

export default App;
