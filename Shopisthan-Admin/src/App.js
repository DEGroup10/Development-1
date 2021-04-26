import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, isUserLoggedIn } from './actions'
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";
import { getInitialData } from "./actions/initialData.action";
import Store from "./containers/Store";
import { getAllStore } from "./actions/store.action";
import NewPage from "./containers/NewPage";
import Reset from "./containers/Reset/reset";
import NewPassword from "./containers/Reset/NewPassword";
import addStore from "./containers/AddStore";
import AddStore from "./containers/AddStore";

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)


  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
    // dispatch(getAllStore());
  

//  if(auth.authenticate){

//  }
   

  },[]);
  return (
    <div className="App">

      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/page" component={NewPage} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/store" component={Store} />
        <PrivateRoute path="/addStore" component={AddStore} />

        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route  extact path="/reset" component={Reset}></Route>
        <Route path="/resetpassword/:token" component={NewPassword}></Route>
      </Switch>

    </div>
  );
}

export default App;
