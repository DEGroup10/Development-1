import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from 'react-router-dom'
import { signout } from "../../actions/auth.action";


const  Header =(props) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();


  const logout = () => {
    dispatch(signout());
  }


  const renderLoggedInLinks = () => {

    return (
      <Nav>

        <li className="nav-item">
          <span className="nav-link"
           onClick={logout}
           >SignOut</span>


        </li>

      </Nav>
    );
  }
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        {/* <Nav.Link href="#deets">Sigin</Nav.Link> */}
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link" >Signin</NavLink>

        </li>

      </Nav>
    );
  }


  return (
    <Navbar collapseOnSelect fixed = "top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
      <Container fluid>
        {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
        <Link to="/storeProfile" className="navbar-brand">{auth.authenticate ?auth.store.shopName  :"Shopisthan Vendor Dashboard"}</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           
          </Nav>

          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}

      

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header
