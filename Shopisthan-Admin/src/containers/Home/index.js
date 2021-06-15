import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap'
import { Layout } from '../../components/Layout'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';


const Home = (props) => {

 const store = useSelector(state=>state.store);
 const product = useSelector(state=>state.product);
 const order = useSelector(state=>state.order);
 const auth = useSelector(state => state.auth)


 useEffect(() => {
//     if (!auth.authenticate) {
//       dispatch(isUserLoggedIn());
//    }
console.log("hello");

   },[auth.authenticate]);

    if(auth.authenticate){
        console.log("hello21");
    }
    return (
        <>
            <Layout sidebar>

            <div className="home">

            <Card
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>Stores</Card.Header>
                    <Card.Body>
                    <Card.Title>Total Stores:</Card.Title>
                    <Card.Text>
                       {store.stores.length}
                    </Card.Text>
                    </Card.Body>
            </Card>

            <Card
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>Products</Card.Header>
                    <Card.Body>
                    <Card.Title>Total Products:</Card.Title>
                    <Card.Text>
                       {product.products.length}
                    </Card.Text>
                    </Card.Body>
            </Card>

            <Card
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>Orders</Card.Header>
                    <Card.Body>
                    <Card.Title>Total Orders:</Card.Title>
                    <Card.Text>
                       {order.orders.length}
                    </Card.Text>
                    </Card.Body>
            </Card>

            

            </div>

            </Layout>
        </>
    )
}

export default Home
