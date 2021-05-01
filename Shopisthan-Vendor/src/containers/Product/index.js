import React from 'react'
import { Layout } from '../../components/Layout'
import {NavLink} from 'react-router-dom'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getStoreData } from '../../actions/storedata.action'


/**
* @author
* @function Orders
**/

const Product = (props) => {

    //  const dispatch = useDispatch();  

    // dispatch(getStoreData());
  
    const product = useSelector(state => state.product);


    const renderProducts = () => {
        return (
            <Table style={{ fontSize: 12 }} responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quanitiy </th>
                        {/* <th>Description</th> */}
                        {/* <th>Product Pictures</th> */}
                        <th>Category</th>
                        <th>Product Category</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        product.products.length > 0 ?
                            product.products.map((product,index)=>

                        
                                <tr 
                           
                                key={product._id}
                                >
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.ParCategory.name}</td>
                                    <td>{product.category.name}</td>
                                  
                                    {/* <td>{product.category.name}</td> */}
                                    {/* <td>{product.createdBy.shopName}</td> */}
                                    

                                    
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
                            <h3>Products</h3>
                            <NavLink to={`/addProduct`}><button>Add Product</button></NavLink>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>

            
        </Layout>
    )

}

export default Product