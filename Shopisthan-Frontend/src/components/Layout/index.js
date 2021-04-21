import React from 'react'
// import Header from '../Header'
import MenuHeader from '../MenuHeader'
import HomeNavbar from '../Newheader'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <>
            <HomeNavbar />
            <MenuHeader />
            {props.children}
        </>
    )
}

export default Layout