import React from 'react'
import NavBar from '../../containers/Navbar'
import Header from '../Header'
import MenuHeader from '../MenuHeader'
import HomeNavbar from '../Newheader'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <div style={{position:'fixed' , width:'100%', marginTop:'-20px'}}>
            <NavBar     />      
                <MenuHeader/>
            {props.children}
        </div>
    )
}

export default Layout