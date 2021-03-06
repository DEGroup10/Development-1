import React, { useState} from 'react'
import { Layout } from '../../components/Layout'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from '../../actions/auth.action';
import { getStoreData } from '../../actions/storedata.action';



const Signin = (props)=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = useSelector((state) => state.auth);
  
    const dispatch = useDispatch();
  
   
  
    const userLogin = (e) => {
      e.preventDefault();
  
      const store = {
        email,
        password
      };
      dispatch(login(store));
      
 
    };
  
    if (auth.authenticate) {
      // dispatch(getStoreData());
      return <Redirect to={`/`} />;
    }


    return(
    <>
        <Layout/>
        <Container>
        <Row style={{ marginTop: "100px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>

            </Form>
          </Col>
         
        </Row>
      </Container>
    </>
    )
}

export default Signin