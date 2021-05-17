import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./style.css";
import Profilepic from "../../img/profilepic.jpg";
import location__icon from "../../img/location-icon.svg"
import follow__icon from '../../img/follow-icon.svg'
import verified__icon from '../../img/verified-icon.svg'
import facebook_icon from '../../img/facebook-icon.svg'
import linkedin_icon from '../../img/linkedin-icon.svg'
import instagram_icon from '../../img/instagram-icon.svg'
import dp from '../../img/logo-image.jpg'
import productsimg from '../../img/_Y9go_XqP-samsung-galaxy-a21s-sm-a217fzbfins-original-imafsuya4bjrwvzu.jpeg'

/**
 * @author
 * @function ShopProfile
 **/

const ShopProfile = (props) => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <Layout> </Layout>
      {/* ProfileHEader  starts*/}
      <main className="SCxLW o64aR " role="main">
        <div className="v9tJq v9tJq">
        <div>
            <div className="StoreCard__container">
        <div className="StoreCard__row"><img className="Shop__logo" src={dp} alt="Logo" /></div>
        <div className="StoreCard__column">
            <div className="StoreCard__column1">
                <div><div className="Shop__name">ShopName
                <img src={verified__icon} alt="Verified" /></div>
                <i className="Shop__type">@samsung_vimanagar</i></div>
                <div><button className="Shop__followBtn">
                    <img src={follow__icon} alt="Follow" />
                    <p classNamee="Shop__followBtnText">
                    Follow Now
                    </p>
                </button>
                </div>
            </div>
            <div className="StoreCard__column1">
                <div className="Shop__numberVar">3,096</div>
                <div className="Shop__heading">products</div>
                <div className="Shop__numberVar">13.8k</div>
                <div className="Shop__heading">followers</div>
            </div>
            <div className="StoreCard__column1"><div className="Shop__type">Buy affordable, best quality and Made in India shoes.  We have wide range of Shoes and Sneakers from men women and childrens. Shipping only in Pune and Mumbai.</div></div>
            <div className="StoreCard__column1"><div className="Shop__location">
                <img src={location__icon} alt="Location" />
              Viman Nagar, Pune
              <div><img src={facebook_icon} alt="Facebook" /></div>
              <div><img src={linkedin_icon} alt="LinkedIn" /></div>
              <div><img src={instagram_icon} alt="Instagram" /></div></div>
              </div>
              <div className="StoreCard__column1"><div className="Shop__type">Wholesaler and Manufacturer in Sports</div></div>
              <div className="StoreCard__column1">
                  <div className="Shop__tags">shoes</div>
                  <div className="Shop__tags">sports</div>
                  <div className="Shop__tags">mens</div>
                  <div className="Shop__tags">womens</div>
                </div>
    </div> </div></div>
          <section className="fx7hk">
            <a className="_9VEo1 T-jvg" style={{marginLeft:'100px', fontSize:'30px'}}>
            <span className="showprod">Products</span>
            </a>
          </section>
          <div className="_2z6nI">
            <article className="ySN3v">
              <div>
                <div
                  style={{
                    flexDirection: "column",
                    paddingBottom: "0px",
                    paddingTop: "0px",
                  }}
                >
                  <div className="Nnq7C weEfm">
                    <div className="v1Nh3 kIKUG _bz0w ">
                      <a>
                        <div className="eLAPa">
                          <div>
                            <img
                              className="FFVAD"
                              style={{ objectFit: "cover", sizes: "293px" }}
                              src={productsimg}
                            ></img>
                          </div>
                          <div className="_9AAhH0"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopProfile;
