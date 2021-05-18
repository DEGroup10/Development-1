import React from 'react'
import Header from '../Header'
import MenuHeader from '../MenuHeader'
import HomeNavbar from '../Newheader'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <>
            {/* <div style={{position:'fixed'}}>  */}
            <Header />  <MenuHeader/>
             {/* </div> */}
                
            {props.children}
        </>
    )
}

export default Layout