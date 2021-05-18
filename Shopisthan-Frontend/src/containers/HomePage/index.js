import React, { useEffect } from "react";
import { getInitialData } from "../../actions";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { MaterialButton } from "../../components/MaterialUI";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";
import { addToCart } from "../../actions/cart.action";
import { IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import Rating_icon from "../../img/rating-icon.svg";
import ShopIcon from "../../img/icons8-shop-50.png"
import Share_icon from "../../img/share-icon.svg";
import Heart_icon from "../../img/heart-outlined.svg";
import Cart_icon from "../../img/cart-icon.svg";
import HomeBanner from "../../img/home-banner.jpg";
import "./style.css";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  });

  const renderProduct = () => {
    return (
      // <div id="product" style={{alignItems:'center'}}>
      //   {product.products.map((product, index) => (
      //     <div className="newcard" key={product._id}>
      //       <Link to={`/${product.slug}/${product._id}/p`}>
      //         <img
      //           style={{
      //             alignItems: 'center'
      //           }}
      //           src={generatePublicUrl(product.productPictures[0].img)}
      //           alt=""
      //         />
      //       </Link>
      //       <div className="content">
      //         <h3> 
      //           <Link to={`/product/${product._id}`}>{product.name}</Link>
      //         </h3>
      //         <span>$ {product.price}</span>
      //         <p>Description : {product.description}</p>
      //         <MaterialButton
      //           title="View"
      //           bgColor="#ff9f00"
      //           textColor="#ffffff"
      //           style={{
      //             marginRight: "5px",
      //           }}
                
      //           // onClick={() => {
      //           //   const { _id, name, price } = product.productDetails;
      //           //   const img = product.productDetails.productPictures[0].img;
      //           //   dispatch(addToCart({ _id, name, price, img }));
      //           //   props.history.push(`/cart`);
      //           // }}
      //         />
      //       </div>
      //     </div>
      //   ))}
      // </div>
      <div className="Product__container" >
      {product.products.map((product, index) => (
        <div className="Product__singleCard" key={product._id}>
          <div className="caContainer">
          <Link to={`/${product.slug}/${product._id}/p`}>
              <div className="caImgContainer">
                <img
                  className="Product__image"
                  src={generatePublicUrl(product.productPictures[0].img)}
                />
              </div>
              </Link>
            <div className="Product__detailsContainer">
            
              <div className="Product__iconFlex">
             
                <div className="Product__name">
                {product.name}
                </div>
                <div className="Product__icons">
                  <img src={Share_icon} alt="Share" />
                </div>
                <div>
                  <img src={Heart_icon} alt="Share" />
                </div>
              </div>

              <div className="Product__priceFlex">
                <BiRupee />
                <div className="Product__priceTag">{product.price}</div>
                <div className="Product__mrpPrice">{product.price}</div>
                <div className="Product__discountedPrice">25% off</div>
              </div>

               <div>
                <div className="Product__btnFlex">
                  <div>
                    <img height='25px' width="25px" src={ShopIcon} alt="Ratings" />
                  </div>
                  <div style={{ fontSize: '18px', marginTop:'3px'}}>  {product.createdBy.shopName}</div>
                </div> 
                
                {/* <Link to={`/${product.slug}/${product._id}/p`}  className="Product__cartBtn">
                  <img alt="follow__icon" src={Cart_icon} />
                  <p  className="product__cartBtnText">Add to cart</p>
                </Link> */}
              </div> 
            </div>
          </div>
        </div>
      ))}
    </div>
    );
  };

  return (
    <>
   <Layout/>
      <div  > 
      <div className="Home__imageBanner" >
          <img
            alt="Home Banner"
            className="Home__imageBanner"
            src={HomeBanner}
          />
        </div>
      {renderProduct()}</div>
    </>
  );
};

export default HomePage;
