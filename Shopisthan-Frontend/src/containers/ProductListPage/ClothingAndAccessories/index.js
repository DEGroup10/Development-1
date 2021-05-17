import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import image from "../../../img/product-image1.jpg";
import Rating_icon from "../../../img/rating-icon.svg";
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
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug));
  }, []);

  return (
    // <div style={{ padding: "10px" }}>
    //   <Card
    //     style={{
    //       boxSizing: "border-box",
    //       padding: "10px",
    //       display: "flex",
    //     }}
    //   >
    //     {product.products.map((product) => (
    //       <div className="caContainer">
    //         <Link
    //           className="caImgContainer"
    //           to={`/${product.slug}/${product._id}/p`}
    //         >

    //           <img src={generatePublicUrl(product.productPictures[0].img)} />
    //         </Link>
    //         <div>
    //           <div className="caProductName">{product.name}</div>
    //           <div className="caProductPrice">
    //             <BiRupee />
    //             {product.price}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Card>
    // </div>


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

              <div>
                <div className="Product__btnFlex">
                  <div>
                    <img src={Rating_icon} alt="Ratings" />
                  </div>
                  <div>0 Reviews and Ratings</div>
                </div>
                
                <Link to={`/${product.slug}/${product._id}/p`}  className="Product__cartBtn">
                  <img alt="follow__icon" src={Cart_icon} />
                  <p  className="product__cartBtnText">Add to cart</p>
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
