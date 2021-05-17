import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import Shopisthan__logo_bolte from "../../img/shopisthan_logo_bolte.png";
import Shopisthan__logo from "../../img/shopisthan-logo.png";
import Wishlist__logo from "../../img/newwishlistlogo.png";
import Profilepiclogo from "../../img/icons8-male-user-50.png";
import ExploreIcon from '../../img/explore-icon.svg';
import { useDispatch, useSelector } from "react-redux";

import { userLogin, signout, signup as _signup } from "../../actions";
import Cart from '../UI/Cart'

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const login = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(userLogin({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={

          <div style={{  marginLeft: 10 }}  onClick={() => setLoginModal(false)}
          >
            <a href="/myprofile">
              <img
                src={Profilepiclogo}
                style={{ height: 30, width: 30, marginTop: 5 ,marginLeft: 3 }}
                alt="Shopisthan Logo"
              />
              <span style={{  fontSize: 15,  }}> {auth.user.firstName}</span>
            </a>
          </div>
        }
          // {/* <a
          //   href="/myprofile"
          //   className="fullName"
          //   onClick={() => setLoginModal(false)}
          // >
          //   {auth.user.fullName}
          //   <img src={Profilepiclogo} alt="Shopisthan Logo" />
          // </a> */}
          
   
        menus={[
          { label: "My Profile", href: "/myprofile", icon: null },
          { label: "Cart", href: "/cart", icon: null },
          {
            label: "Orders",
            href: "/account/orders",
            icon: null,
            // onClick: () => {
            //   !auth.authenticate && setLoginModal(true);
            // },
          },
          
          { label: "Wishlist", href: "", icon: null },
          { label: "My Chats", href: "", icon: null },
          { label: "Coupons", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
          { label: "Notifications", href: "", icon: null },
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a className="loginButton" onClick={() => setLoginModal(true)}>
            Login
          </a>
        }
        menus={[
          { label: "Shopisthan About us", href: "", icon: null },
          {
            label: "Orders",
            href: "/account/orders",
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          {
            label: "Wishlist",
            href: "",
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  return (
    <div className="header">
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <img
                style={{ width: 70, height: 70 }}
                src={Shopisthan__logo_bolte}
                alt="Shopisthan Logo"
              />
              <h2 style={{ marginTop: 10 }}>Login</h2>
              <p style={{ fontSize: 15, marginTop: 10 }}>
                An effort to give everyone a Commerce Store – even if you are
                selling from home or from multiple locations.
              </p>
            </div>
            <div className="rightspace">
              <div
                className="loginInputContainer"
                style={{ width: 250, marginTop: 20}}
              >
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={login}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        <div className="logo">
          <a href="/">
            <img src={Shopisthan__logo} alt="Shopisthan Logo" />
          </a>
          <a style={{ marginTop: "-10px", marginLeft: "125px" }}>
            <span className="exploreText">India pvt Ltd</span>
          </a>
        </div>
        <div
          style={{
            padding: "0 10px",
          }}
        >
          <div
            className="Navbar__search"
            style={{ width: "25rem", marginRight: 50 }}
          >
            <div class=".Navbar__wrapper">
              <div class=".Navbar__searchBar">
                <input
                  id="searchQueryInput"
                  type="text"
                  name="searchQueryInput"
                  placeholder="Search"
                  style={{ width: "25rem" }}
                />
                {/* <button id="searchQuerySubmit"
                        type="submit"
                        name="searchQuerySubmit">
                            <img alt="Search" src={SearchIcon}/>
                        </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="rightMenu" >
          <div style={{  marginLeft: 10 }}>
            <a href="/">
              <img
                src={Wishlist__logo}
                style={{ height: 25, width: 25, marginTop: 10 ,marginLeft: 10 }}
                alt="Shopisthan Logo"
              />
              <span style={{  fontSize: 13 }}>Wishlist</span>
            </a>
          </div>
          <div style={{  marginLeft: 10 }}>
            <a href="/ExploreStore">
              <img
                src={ExploreIcon}
                style={{ height: 25, width: 25, marginTop: 10 ,marginLeft: 23 }}
                alt="Shopisthan Logo"
              />
              <span style={{  fontSize: 13 }}>ExploreStore</span>
            </a>
          </div>
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menus={[
              { label: "Notification Preference", href: "", icon: null },
              { label: "Sell on flipkart", href: "", icon: null },
              { label: "24x7 Customer Care", href: "", icon: null },
              { label: "Advertise", href: "", icon: null },
              { label: "Download App", href: "", icon: null },
            ]}
          />
          <div>
            <a className="cart" href="/cart">
            <Cart count={Object.keys(cart.cartItems).length}  />
              <span style={{ margin: "0 10px", textDecorationLine: false }}>
                Cart
              </span>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
