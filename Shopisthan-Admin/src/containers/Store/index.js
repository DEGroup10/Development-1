import React from 'react'
import { Layout } from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom'

/**
* @author
* @function Store
**/

const Store = (props) => {

    const store = useSelector(state => state.store);

    const renderStores = () => {
        return (
            <Table style={{ fontSize: 12 }} responsive="sm">
                <thead>
                    <tr>
                   
                        <th>#</th>
                        <th>Store Name</th>
                        <th>Store Phno.</th>
                        <th>Store Email</th>
                        <th>Store Add </th>
                        <th>Store Category</th>
                    
                        <th>Created By</th>

                    </tr>
                    
                </thead>
                <tbody>
                 
              

                {
                    store.stores.length > 0 ?
                        store.stores.map((store,index)=>
                       
                            <tr key={store._id}>

                            
                                <td>{index + 1}</td>
                               
                                <td> {store.shopName}</td>
                                <td>{store.shopPhoneNo}</td>
                                <td>{store.shopEmail}</td>
                                <td>{store.shopAddress}</td>
                          
                                <td>{store.shopCategory.name}</td>
                                {/* <td>{store.createdBy.username}</td> */}
                                  <td> <Link to={`/${store._id}/store`}style={{ textDecoration: 'none' }}>View</Link></td>
                 
                                
                            </tr>
                           
                        ):null
                }

                </tbody>
            </Table>
        )
    }


    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Store</h3>
                            {/* <button>Add</button> */}
                            <NavLink to={`/addStore`}><button>Add Store </button></NavLink>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {renderStores()}
                    </Col>
                </Row>
            </Container>
        </Layout>

    )

}

export default Store