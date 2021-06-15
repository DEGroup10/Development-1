import React, { useEffect, useState } from "react";
import { getInitialData, getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { MaterialButton, Modal } from "../../components/MaterialUI";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";
import { addToCart } from "../../actions/cart.action";
import { BiRupee } from "react-icons/bi";
import Rating_icon from "../../img/rating-icon.svg";
import ShopIcon from "../../img/icons8-shop-50.png";
import Share_icon from "../../img/share-icon.svg";
import Heart_icon from "../../img/heart-outlined.svg";
import Cart_icon from "../../img/cart-icon.svg";
import HomeBanner from "../../img/home-banner.jpg";
import ProductModal from "../../components/MaterialUI";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
// import { WhatsappShareButton } from "react-share";
// import { WhatsappIcon } from "react-share";
// import "./style.css";
// import Popup from "../Popup";
// import Productpopup from "./popindex";

/**
 * @author
 * @function ProductHomeComponent
 **/

const ProductHomeComponent = (props) => {
  let currentUrl = window.location.href;
  const product = useSelector((state) => state.product);
  const store = useSelector((state) => state.store.storeDetails);
  const [productModal, setProductModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  return (
    // {/* <div className="Product__container">
    //         {product.products.map((product, index) => (
    //           <div className="Product__singleCard" key={product._id}>
    //             <div className="caContainer">
    //               <Link to={`/${product.slug}/${product._id}/p`}>
    //                 <div className="caImgContainer">
    //                   <img
    //                     className="Product__image"
    //                     src={generatePublicUrl(product.productPictures[0].img)}
    //                   />
    //                 </div>
    //               </Link>
    //               <div className="Product__detailsContainer">
    //                 <div className="Product__iconFlex">
    //                   <div className="Product__name">{product.name}</div>
    //                   <div className="Product__icons">
    //                     <img src={Share_icon} alt="Share" />
    //                   </div>
    //                   <div>
    //                     <img src={Heart_icon} alt="Share" />
    //                   </div>
    //                 </div>

    //                 <div className="Product__priceFlex">

    //                   <Link onClick={() => setProductModal(true)}  to={`/${product.slug}/${product._id}/p`}>
    //                     <BiRupee />
    //                     <div className="Product__priceTag">{product.price}</div>
    //                     <div className="Product__mrpPrice">{product.price}</div>
    //                     <div className="Product__discountedPrice">25% off</div>
    //                     </Link>
    //                 </div>

    //                 <div>
    //                   <div className="Product__btnFlex">
    //                     <div>
    //                       <img
    //                         height="25px"
    //                         width="25px"
    //                         src={ShopIcon}
    //                         alt="Ratings"
    //                       />
    //                     </div>
    //                     <Link to={`/${store._id}/store`}>
    //                     <div style={{ fontSize: '18px', marginTop:'3px'}}>  {product.createdBy.shopName}</div>
    //                     </Link>
    //                   </div>

    //                   {/* <Link to={`/${product.slug}/${product._id}/p`}  className="Product__cartBtn">
    //                   <img alt="follow__icon" src={Cart_icon} />
    //                   <p  className="product__cartBtnText">Add to cart</p>
    //                 </Link> */}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div> */}

    <div style={{ padding: "30px" }}>
      <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
        {product.products.map((product, index) => (
          <div key={product._id}>
            <div className="Galleries-gridCover-j9D">
              <div className="ProjectCoverNeue-root-166 ProjectCoverNeue-statsVisible-19j ProjectCover-cover-3zh">
                <div className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R">
                  <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                  <Link to={`/${product.slug}/${product._id}/p`}>
                    <div className="Cover-content-2R2">
                      <div className="DominantColor-dominantColor-2PM"></div>
                      <img
                        sizes="404px"
                        style={{ padding: "10px" }}
                        src={generatePublicUrl(product.productPictures[0].img)}
                        alt="Children's Day - ''SEE ME&quot;"
                        loading="lazy"
                        class="ProjectCoverNeue-image-1MZ js-cover-image"
                      ></img>
                      <div className="ProjectCoverNeue-controlsAndPrivacyContainer-20r"></div>
                    </div>
                    <div className="Cover-overlay-28e Cover-showOnHover-Ks- Cover-transitionDone-22y">
                      <div className="ProjectCoverNeue-details-yQ_">
                        <div className="ProjectCoverNeue-info-4Ul">
                          <a className="Title-title-3nk e2e-Title-owner js-project-cover-title-link">
                            {product.name}
                          </a>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                </div>
                <div className="ProjectCoverNeue-visibleStatsAndOwners-2Av">
                  <span className="ProjectCoverNeue-ownersContainer-3Go">
                    <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                      <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                        {/* <span className="Owners-ownerImage-27R">
                     <img src="https://mir-s3-cdn-cf.behance.net/user/50/e3288c7532301.5fd90c23ec9bc.jpg" alt="Marta Syrko" className="Owners-ownerImageEl-3cu"/>
                   </span> */}
                        <a className="Owners-owner-2lB e2e-Owner-user-link">
                          {product.name}
                        </a>
                      </span>
                    </div>
                  </span>
                  <div className="Stats-stats-1iI">
                    <div
                      className="Product__icons"
                      style={{ marginBottom: "7px", marginRight: "10px" }}
                    >
                      <img src={Share_icon} alt="Share" />
                    </div>
                    <div className="Product__priceFlex">
                      {/* <BiRupee /> */}
                      <div className="Product__priceTag">
                        <BiRupee style={{ marginBottom: "-3px" }}></BiRupee>
                        {product.price}
                      </div>
                      {/* <div className="Product__mrpPrice">{product.price}</div> */}
                      {/* <div className="Product__discountedPrice">25% off</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHomeComponent;
