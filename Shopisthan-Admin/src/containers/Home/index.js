import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import { Layout } from '../../components/Layout'
import './style.css'
import {NavLink} from 'react-router-dom'

const Home = (props) => {
    return (
        <>
            <Layout sidebar>

                

            </Layout>



            {/* <Layout>
             <Jumbotron className="text-center" style={{margin: '5rem',background:"#fff"}}>
                <h1>Welcome to Admin Dashboard</h1>
            </Jumbotron> */}
            {/* </Layout> */}
        </>
    )
}

export default Home
