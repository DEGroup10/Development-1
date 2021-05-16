import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import {Link, NavLink} from 'react-router-dom'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { deleteProductById } from '../../actions/product.action'
import Modal from '../../components/UI/Modal';




/**
* @author
* @function Orders
**/

const Product = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const [deleteCategoryModal,setDeleteCategoryModal] = useState(false);
    const [deleteProductId,setDeleteProductId] = useState("");
    const [deleteProductName,setDeleteProductName] = useState("");


    const  deletePtById = (pId,pName) =>{
        // console.log(pId);
        setDeleteProductId(pId);
        setDeleteProductName(pName);
        setDeleteCategoryModal(true)
    } 

    const renderDeleteProductModal = () =>{
        // setDeleteCategoryModal(true)
     return(
            <Modal
             modaltitle="Delete"
             show = {deleteCategoryModal}
            // show = "true"
             handleclose = {()=> setDeleteCategoryModal(false)}
             buttons = {[
                 {
                     label: 'No',
                     color:'primary',
                     onClick:()=>{
                        setDeleteCategoryModal(false)
                     }
                 },
                 {
                     label: 'Yes',
                     color:'danger',
                      onClick: () => {
                                        const payload = {
                                        productId: deleteProductId,
                                        };
                                        dispatch(deleteProductById(payload));
                                        setDeleteCategoryModal(false)
                                        
                                    }
                 }
             ]}
            >

            Are you sure you want to delete "<b>{deleteProductName} product</b>"
          
            </Modal>
        )
    }


     const renderProducts = () =>{
         return(
        
            <div className="Product__container">

            {
                 product.products.length > 0 ?
                   product.products.map((product,index)=>
        
                                    
                    <div className="Product__singleCard" key={index} >
                   
                        <div className="Product__imageContainer">
                            <img className="Product__image" 
                            src="https://as1.ftcdn.net/jpg/03/01/31/70/500_F_301317052_ajbJFzcmAbkAUJPW57nj4fevWm4ZlKJB.jpg"
                            alt="product" />
                        </div>
                        <div className="Product__detailsContainer">
                            <div className="Product__iconFlex">
                                <div className="Product__name">{product.name}</div>
                                <div className="Product__icons"><img
                                //  src={Share_icon}
                                  alt="Share" /></div>
                            
                                </div>
                            
                            <div className="Product__priceFlex">
                            <div className="Product__priceTag">Rs. {product.price}</div>
                            
                            
                            </div>
                            <div> {product.category.name}</div>
                            <div>  
                            <button
                                    // onClick={() => {
                                    //     const payload = {
                                    //     productId: product._id,
                                    //     };
                                    //     dispatch(deleteProductById(payload));
                                    // }}
                                    onClick = 
                                    {()=>
                                    
                                    // setDeleteCategoryModal(true)
                                    deletePtById(product._id,product.name)
                                    
                                    }
                                     

                                    >Delete</button> </div>
                          
                            
                          
                            
                        </div>
                    </div>
            
        
                   ):null
                            }
        
                            </div>




          
         );
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
                        {renderDeleteProductModal()}
                    </Col>
                </Row>
            </Container>

            
        </Layout>
    )

}

export default Product