import React, { useEffect, useState } from "react";
import { getInitialData, getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Productpopup from "./popindex";
import ProductHomeComponent from "../../components/ProductComponets/productcomponent";
import NavBar from "../Navbar";
import NewCategory from "../../components/NewCategoryUI";
import { MaterialButton, Modal } from "../../components/MaterialUI";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";
import { addToCart } from "../../actions/cart.action";
import { BiRupee } from "react-icons/bi";
import HomeBanner from "../../img/home-banner.jpg";
import ProductModal from "../../components/MaterialUI";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import Share_icon from "../../img/share-icon.svg";
import Navigationbar from "../Navbar";
import { getAllCategory } from "../../actions";
/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  let currentUrl = window.location.href;
  const product = useSelector((state) => state.product);
  const store = useSelector((state) => state.store.storeDetails);
  console.log(product);
  const categoriesList = useSelector((state) => state.category.categories);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterdTerm, setFilterdTerm] = useState("");

console.log("categoriesList",categoriesList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  }, []);




  
  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
    // console.log(product);
  };

  const renderProductDetailsModal = () => {
    if (!productDetails) {
      return null;
    }

    return (
      <Modal
        visible={productDetailModal}
        onClose={() => setProductDetailModal(false)}
        size="lg"
      >
        <div className="productDescriptionContainer">
          <div className="flexRow">
            <div className="verticalImageStack">
              {productDetails.productPictures.map((thumb, index) => (
              <div className="thumbnail">
                <img
                src={
                  productDetails.productPictures[0].img
                }
                />
              </div>
              ))}
            </div>
            <div className="productDescContainer">
              <div className="productDescImgContainer">
                <img
                src={
                  productDetails.productPictures[0].img
                }
                alt={`${productDetails.productPictures[0].img}`}
                />
              </div>

              {/* action buttons */}
            </div>
          </div>
          {/* home > category > subCategory > productName */}
          <div className="col-sm-6 col-xs-12 detailsWrapper">
            <div className="prodDesc clearfix">
              <div className="productDetails" style={{ width: "600px" }}>
                <p className="productTitle" style={{ maxWidth: "500px" }}>
                 {productDetails.name}
                </p>
                <div>
                  <span className="ratingCount">
                    4.3 <IoIosStar />
                  </span>
                  <span className="ratingNumbersReviews">
                    72,234 Ratings & 8,140 Reviews
                  </span>
                </div>
                <div className="extraOffer">
                  Extra <BiRupee />
                  4500 off{" "}
                </div>
                <div className="flexRow priceContainer">
                  <span className="price">
                    <BiRupee />
                    {productDetails.price}
                  </span>
                  <span className="discount" style={{ margin: "0 10px" }}>
                    22% off
                  </span>
                  {/* <span>i</span> */}
                </div>
                <div>
                  <p
                    style={{
                      color: "#212121",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Available Offers
                  </p>
                  <p style={{ display: "flex", maxWidth: "500px" }}>
                    <span
                      style={{
                        width: "100px",
                        fontSize: "12px",
                        color: "#878787",
                        fontWeight: "600",
                        marginRight: "20px",
                      }}
                    >
                      Description
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#212121",
                      }}
                    >
                      {productDetails.description}
                    </span>
                  </p>
                  <div className="share-btn-container">
                    <WhatsappShareButton
                      title={product.productDetails.name}
                      separator=" "
                      url={currentUrl}
                    >
                      <WhatsappIcon
                        logoFillColor="green"
                        round={true}
                      ></WhatsappIcon>
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
              <div id="addButtons" style={{ float: "left", width: "100%" }}>
                <div className="addToBagBtn  fixedCartBtnWrapper">
                  <div className="addButtons col-xs-12 pull-left">
                    <button
                      id="testWishButton"
                      className="addtocart pull-left "
                    >
                      <span>ADD TO BAG</span>
                    </button>
                    <button id="addToCart" className="wishlists pull-left "
                    onClick={() => {
                  const { _id, name, price,createdBy} = product.productDetails;
                  const img = product.productDetails.productPictures[0].img;
                  dispatch(addToCart({ _id, name, price, img,createdBy }));
                  props.history.push(`/cart`);
                }}
                    >
                      <span>SHARE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

 

  const renderProduct = () => {
    return (

      <div style={{ padding: "30px" }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
          {product.products.filter((product)=>{
            if (searchTerm === "" || searchTerm == null) {
                    if (filterdTerm === "" || filterdTerm == null) {
                      return product;
                    }
                    {/* else if(product.._id.includes(categoryType)){
                      return product;
                    } */}
                  } else if (
                    product.name
                      .toLowerCase()
                      .split(" ")
                      .join("")
                      .includes(searchTerm.toLowerCase().split(" ").join("")) ||
                    product.createdBy.shopName
                      .toLowerCase()
                      .split(" ")
                      .join("")
                      .includes(searchTerm.toLowerCase().split(" ").join(""))
                  ) {
                    return product;
                  }
          }).map((product, index) => (
            <div key={product._id}>
              <Link
                onClick={() => showProductDetailsModal(product)}
                key={product._id}
              >
                <div className="Galleries-gridCover-j9D">
                  <div className="ProjectCoverNeue-root-166 ProjectCoverNeue-statsVisible-19j ProjectCover-cover-3zh">
                    <div className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R">
                      <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                        <div className="Cover-content-2R2">
                          <div className="DominantColor-dominantColor-2PM"></div>
                          <img
                            sizes="404px"
                            style={{ padding: "10px" }}
                            src={
                              product.productPictures[0].img
                            }
                            alt="Children's Day - ''SEE ME&quot;"
                            loading="lazy"
                            class="ProjectCoverNeue-image-1MZ js-cover-image"
                          ></img>
                          <div className="ProjectCoverNeue-controlsAndPrivacyContainer-20r"></div>
                        </div>
                      </div>
                    </div>
                    {/* /////// */}
                    <div style={{ padding: "10px" }}>
                      <div className="Cover-overlay-28e Cover-showOnHover-Ks- Cover-transitionDone-22y">
                        <div className="ProjectCoverNeue-details-yQ_">
                          <div className="ProjectCoverNeue-info-4Ul">
                            <a className="Title-title-3nk e2e-Title-owner js-project-cover-title-link">
                              {product.name}
                            </a>
                          </div>
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
                          <div className="Product__priceFlex">
                            <div
                              className="Owners-owner-2lB e2e-Owner-user-link"
                              onClick={() => showProductDetailsModal(product)}
                            >
                              View Details
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="ProjectCoverNeue-ownersContainer-3Go">
                        <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                          <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                            <a className="Owners-owner-2lB e2e-Owner-user-link">
                              By -{product.createdBy.shopName}
                            </a>
                          </span>
                        </div>
                      </span>
                    </div>
                    {/* ///////// */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleCloseProductDetailsModal = () => {
    setProductDetailModal(false);
  };

  return (
    <>
      <Navigationbar />
      <div>
        <nav
          className="NavigationBar-subcategoryList-1nX"
          style={{
            paddingTop: "10px",
            border: "1px solid #eaeaea",
            boxShadow: "0 2px 4px rgb(25 25 25 / 15%)",
            paddingLeft: "100px",
          }}
        >
          <ul style={{ display: "contents" }}>
            {/* {category.categories.length > 0
              ? renderCategories(category.categories)
              : null} */}
            <li>
              <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
                <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <h5 className="SubCategory-label-30F">Location</h5>
                </div>
              </a>
            </li>
            <li>
              <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
                <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <select className="SubCategory-label-30F"
                    value={filterdTerm}
                onChange={(e) => {
                  const selectedProductCategory = e.target.value;
                  setFilterdTerm(selectedProductCategory);
                }}
                  >
                  <option value="">Category</option>
                    {categoriesList.map((value) => (
                  <option key={value._id} value={value._id}>
                    {value.name}
                  </option>
                ))}
         
                    
                  </select>
                </div>
              </a>
            </li>
            <li>
              <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
                <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <select {...props}></select>
                </div>
              </a>
            </li>
            <li>
              <div
                tabIndex="0"
                className="SearchTypeahead-searchContainer-175 SearchTypeahead-isTypeaheadEnabled-3i3"
              >
                <div className="SearchTypeahead-searchInputWrap-3Hg">
                  <div className="SearchTypeahead-searchIcon-1ld">
                    <svg viewBox="0 0 12 12" class="SearchTypeahead-icon-20K">
                      <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z"></path>
                    </svg>
                  </div>
                  <form className="SearchTypeahead-searchForm-20c">
                    <label for="search">
                      <input
                        type="search"
                        name="search"
                        autocomplete="off"
                        placeholder="Search…"
                        aria-label="Search "
                        className="SearchTypeahead-searchInput-1qk e2e-SearchInput-input"
                        onChange={(e) => {
                         setSearchTerm(e.target.value);
                          }}
                      />
                    </label>
                  </form>
                  <ul className="SearchTypeahead-suggestions-2lD"></ul>
                </div>
                <button
                  tabIndex="-1"
                  className="Btn-button-BGn Btn-ghost-2Wn Btn-small-2_o SearchTypeahead-mobileCloseButton-OkE"
                >
                  <div className="Btn-labelWrapper-1jSE">
                    <div className="Btn-label-1Zf e2e-Btn-label">Cancel</div>
                  </div>
                </button>
              </div>
            </li>
          </ul>
        </nav>

        {renderProductDetailsModal()}
        {renderProduct()}
      </div>
      {/* {renderProductDetailsModal()} */}
    </>
  );
};

export default HomePage;
