

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Header from '../Header'
// import './style.css'
import './style.css'
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const Layout = (props) => {
    return (
        <>
            <Header />

            {
                props.sidebar ?

                    <Container fluid>
                        <Row>
                            <Col md={2} className="sidebar">
                                <ul>
                                    <li> <NavLink exact to={`/`}>Home</NavLink></li>
                                    <li> <NavLink to={`/storeProducts`}>Products</NavLink></li>
                                    <li> <NavLink to={`/storeOrders`}>Orders</NavLink></li>
                                    

                                </ul>
                            </Col>
                            <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px'}}>
                                {props.children}
                            </Col>
                        </Row>
                    </Container>
                    :
                    props.children
            }





        </>
    )
}
