import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import './style.css';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import { 
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI';
import Shopisthan__logo_bolte from '../../img/shopisthan_logo_bolte.png';
import Shopisthan__logo from '../../img/shopisthan-logo.png'
import {useDispatch, useSelector} from 'react-redux';
import { login, signout, userLogin } from '../../actions';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state=> state.auth);

  const login = () =>{
    dispatch(userLogin({email,password}))
 }

 const logout = () => {
   dispatch(signout());
 }

 useEffect(() => {
   if(auth.authenticate){
     setLoginModal(false)
   }
 }, [auth.authenticate])


  const renderLoggedInMenu  = () =>{
    return (
  
      <DropdownMenu
        menu={
          <a className = "fullName" 
          onClick={() => setLoginModal(true)}
          >
            {auth.user.fullName}
          </a>
        }
        menus={[
          { label: 'My Profile', href: '/myprofile', icon: null },
          { label: 'Cart', href: '', icon: null },
          { label: 'Orders', href: '', icon: null },
          { label: 'Wishlist', href: '', icon: null },
          { label: 'My Chats', href: '', icon: null },
          { label: 'Coupons', href: '', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
          { label: 'Notifications', href: '', icon: null },
          { label: 'Logout', href: '', icon: null, onClick:logout}
        ]}
        
      />
     ) ;

  }
  const renderNonLoggedInMenu =() =>{
   return (
  
    <DropdownMenu
      menu={
        <a className="loginButton" onClick={() => setLoginModal(true)}>
          Login
        </a>
      }
      menus={[
        { label: 'Shopisthan About us', href: '', icon: null },
         { label: 'Orders', href: '', icon: null },
         { label: 'Wishlist', href: '', icon: null },
         { label: 'Rewards', href: '', icon: null },
         { label: 'Gift Cards', href: '', icon: null },
      ]}
      firstMenu={
        <div className="firstmenu">
          <NavLink to="/signup" className="nav-link" >Signup</NavLink>
          <span>New User?</span>
        </div>
      }
    />
   ) ;
  }

  return (
    <div className="header">
      <Modal 
        visible={loginModal}
        onClose={() => setLoginModal(false)}
      >
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
            <img src={Shopisthan__logo_bolte} alt="Logo" />
              <h2>Login</h2>
              <p>Wellcom to Shopisthan, We strive to have a positive impact on customers, small businesses, the economy, and communities.</p>
            </div>
            <div className="rightspace">
          

                <MaterialInput 
                  type="text"
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <MaterialInput 
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
               
                <MaterialButton 
                  title="Login"
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin:'40px 0 20px 0'
                  }}
                  onClick={login}
                />
                
                   <p>OR</p>
                   <MaterialButton 
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin:'20px 0'
                  }}
                />
                

            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        <div className="logo">
          <a href="/">
          <img src={Shopisthan__logo} alt="Shopisthan Logo" />
          </a>
          <a style={{ marginTop: '-10px', marginLeft: '125px' }}>
            <span className="exploreText">India pvt Ltd</span>
            </a>
        </div>
        <div style={{
          padding: '0 10px'
        }}>
          <div className="Navbar__search" style={{ marginLeft: '-600px'
           }}>
                <div class=".Navbar__wrapper">
                   <div class=".Navbar__searchBar" >
                        <input id="searchQueryInput"
                        type="text"
                        name="searchQueryInput"
                        placeholder="Search"
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
        <div className="rightMenu">
          {auth.authenticate ? 
           renderLoggedInMenu() :  renderNonLoggedInMenu() 
          }
          <DropdownMenu
            menus={[
              { label: 'Notification Preference', href: '', icon: null },
              { label: 'Sell on flipkart', href: '', icon: null },
              { label: '24x7 Customer Care', href: '', icon: null },
              { label: 'Advertise', href: '', icon: null },
              { label: 'Download App', href: '', icon: null }
            ]}
          />
          <div>
            <a className="cart">
              <IoIosCart />
              <span style={{ margin: '0 10px' }}>Cart</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Header