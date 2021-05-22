import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData, getProductBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import image from "../../../img/product-image1.jpg";
import Rating_icon from "../../../img/rating-icon.svg";
import ShopIcon from "../../../img/icons8-shop-50.png"
import Share_icon from "../../../img/share-icon.svg";
import Heart_icon from "../../../img/heart-outlined.svg";
import Cart_icon from "../../../img/cart-icon.svg";

import "./style.css";
import { generatePublicUrl } from "../../../urlConfig";

/**
 * @author
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug));
    // dispatch(getInitialData());
  }, []);


 
  return (
  
    <div className="Product__container" >
      {product.products.map((product) => (
        <div className="Product__singleCard">
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

              <div className="Product__btnFlex">
                  <div>
                    <img height='25px' width="25px" src={ShopIcon} alt="Ratings" />
                  </div>
                  <Link to={`/${store._id}/store`}>
                  <div style={{ fontSize: '18px', marginTop:'3px'}}>ShopName{product.createdBy.shopName}</div>
                  </Link>
                </div> 
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default ClothingAndAccessories;
