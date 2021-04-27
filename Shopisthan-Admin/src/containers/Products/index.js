import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap'
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/product.action';
import './style.css';
import { generatePublicUrl } from '../../urlConfig';

/**
* @author
* @function Products
**/

const Products = (props) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const category = useSelector(state => state.category);

    const product = useSelector(state => state.product);



    const dispatch = useDispatch();



    const handleClose12= () => {

         console.log("dsfcswdf");

        const from = new FormData();
        from.append('name', name);
        from.append('quantity', quantity);
        from.append('price', price);
        from.append('description', description);
        from.append('category', categoryId);

        for (let pic of productPictures) {
            from.append('productPictures', pic); console.log(pic);
        }
       
       console.log(from);

        dispatch(addProduct(from));



        setShow(false);
    }

    const handleShow = () => setShow(true);


    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    const handleProductPictures = (e) => {

        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ]);
    }


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
                        <th>Shop Name</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        product.products.length > 0 ?
                            product.products.map((product,index)=>
                                <tr onClick={() => showProductDetailsModal(product)} key={product._id}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    {/* <td>{product.category._id}</td> */}
                                    {/* <td>{product.description}</td> */}
                                    {/* <td>{product.category.name}</td> */}
                                    {/* <td>{product.createdBy.shopName}</td> */}
                                    

                                    
                                </tr>
                            ):null
                    }



                </tbody>
            </Table>
        )

    }

    const renderAddProductModal = () => {
        return (
            <Modal show={show}
                handleClose={()=>setShow(false)}
                onSubmit = {handleClose12}
                modalTitle={`Add New Product`}
            >
                <Input
                    label={"Name"}
                    value={name}
                    placeholder={`Product Name`}
                    onChange={(e) => setName(e.target.value)}

                />
                <Input
                    label={"Quantity"}
                    value={quantity}
                    placeholder={`Quantity`}
                    onChange={(e) => setQuantity(e.target.value)}

                />
                <Input
                    label={"Price"}
                    value={price}
                    placeholder={`Price`}
                    onChange={(e) => setPrice(e.target.value)}

                />
                <Input
                    label={"Description"}
                    value={description}
                    placeholder={`Description`}
                    onChange={(e) => setDescription(e.target.value)}

                />
                <select className="form-control"
                    value={categoryId}
                    // onChange={(e) => setCatId(e.traget.value)}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    <option>select category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>
                        )
                    }
                </select>

                {
                    productPictures.length > 0 ?
                        productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                }

                <input type="file" name="productPicture" onChange={handleProductPictures} />
            </Modal>
        );

    }


    const handleCloseProductDetailsModal = () => {
        setProductDetailModal(false)
    }

    const showProductDetailsModal = (product) => {

        setProductDetails(product)
        setProductDetailModal(true)
        // console.log(product);
    }

    const renderProductDetailsModal = () => {


        if (!productDetails) {
            return null;
        }

        return (
            <Modal
                show={productDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'Product Details'}
                size="lg"

            >

                <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="value">{productDetails.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Price</label>
                        <p className="value">{productDetails.price}</p>
                    </Col>

                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Quanitiy</label>
                        <p className="value">{productDetails.quantity}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Category</label>
                        <p className="value">{productDetails.category.name}</p>
                    </Col>

                </Row>
                <Row>
                    <Col md="12">
                        <label className="key">Description</label>
                        <p className="value">{productDetails.description}</p>
                    </Col>



                </Row>
                <Row>
                    <Col>
                        <label className="key">Product Pictures</label>
                        <div style={{ display: 'flex' }}>
                            {productDetails.productPictures.map(picture =>
                                <div className="productImgContainer">

                                    <img src={generatePublicUrl(picture.img)} />
                                </div>

                            )}
                        </div>
                    </Col>
                </Row>

            </Modal>


        );

    }

    return (
        <Layout sidebar>

            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Products</h3>
                            <button onClick={handleShow}>Add</button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>

            {renderAddProductModal()}
            {renderProductDetailsModal()}

        </Layout>
    )

}

export default Products