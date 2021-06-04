import React, { useEffect, useState } from "react";
import { getInitialData, getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import HomeBanner from "../../img/home-banner.jpg";
import "./style.css";
import Productpopup from "./popindex";
import ProductHomeComponent from "../../components/ProductComponets/productcomponent";
import Popup from "../Navbar";
import MenuHeader from "../../components/MenuHeader";
import NavBar from "../Navbar";
import NewCategory from "../../components/NewCategoryUI";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  let currentUrl = window.location.href;
  const product = useSelector((state) => state.product);
  const store = useSelector((state) => state.store.storeDetails);
  const [productModal, setProductModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getInitialData());

  },[]);

  const renderProduct = () => {
    return (
      <ProductHomeComponent/>
    );
  };

  return (
    <>
      <NavBar/>
      <NewCategory/>
      {props => <Productpopup {...props} key={this.props.location.key} visible={productModal} onClose={() => setProductModal(false)} /> }
      <div>
        <div className="Home__imageBanner">
          <img style={{borderRadius:'10px', border:'3px solid rgba(105, 105, 105, 0.2)'}}
            alt="Home Banner"
            className="Home__imageBanner"
            src={HomeBanner}
          />
        </div>
        {renderProduct()}
      </div>
    </>
  );
};

export default HomePage;
