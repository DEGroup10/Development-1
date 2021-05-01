import React, {useState} from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { addShop } from '../../actions/store.action';
import { Layout } from '../../components/Layout';
import Input from '../../components/UI/Input';
import { Redirect } from "react-router-dom";
import { getInitialData } from '../../actions';



const AddStore = (props) =>{

 
    const [categoryId, setCategoryId] = useState('');
    const [shopType, setShopType] = useState('');

    const [userName, setUserName] = useState('');
    const [shopName, setShopName] = useState('');
    const [shopEmail, setShopEmail] = useState('');
    const [shopPhNo, setShopPhNo] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const [shopPassword, setShopPassword] = useState('');


          //  const addedStore = useSelector(state=> state.store);
        
          //  if(addedStore.loading){
          //   return (<Redirect to={`/`} />);

          //  }

         
    



    const category = useSelector(state => state.category);
    const addedStore = useSelector(state=> state.store);
    const dispatch = useDispatch();
    
           if(addedStore.loading){  

            dispatch(getInitialData());
            return (<Redirect to={`/store`} />);
            
          
          

           }

 


    const createCategoryList = (categories, options = []) => {
      for (let category of categories) {
          options.push({ value: category._id, name: category.name });
         
      }
      return options;
  }

    const createShop = (e)=>{
      e.preventDefault();
         if(
         userName ==="" || shopPhNo === "" || shopName ==="" || 
         shopEmail === "" || shopAddress ==="" || shopPassword ==="" ||
         shopType ==="" || categoryId === ""
         ){
           return (alert("Fill all the details"))
         }
      
         const from = new FormData();
         from.append('userName', userName);
         from.append('shopName', shopName);
         from.append('shopType', shopType);
         from.append('shopEmail', shopEmail);
         from.append('password', shopPassword);
         from.append('shopCategory', categoryId);
         from.append('shopPhoneNo', shopPhNo);
         from.append('shopAddress', shopAddress);
        

            const shop= {
              userName,
              shopName,
              shopType,
              shopEmail,
              password:shopPassword,
              shopCategory:categoryId,
              shopPhoneNo:shopPhNo,
              shopAddress




            }

        //  console.log(shop);
         dispatch(addShop(shop))

        //  dispatch(addShop(from));


    }


    return(

       
        <Layout sidebar>
           
           

     <Row>
         <Col 
          // md={{ span: 3, offset: 1 }}
        md={10}
          >

          <Form onSubmit={createShop}>

         <Row>
             <Col>
             <Input  label="UserName"
                placeholder="UserName"
                value = {userName}
                onChange = {(e) => setUserName(e.target.value)}
              type="text" />
               
             </Col>
             <Col>
             <Input  label="ShopName"
                placeholder="ShopName"
                value = {shopName}
                onChange = {(e) => setShopName(e.target.value)}
              type="text" />
               
             </Col>
             <Col>
             <Input  label="shopEmail"
                placeholder="shopEmail"
                value = {shopEmail}
                onChange = {(e) => setShopEmail(e.target.value)}
              // type="select" 

              />
               
             </Col>
         </Row>


         {/* //2 */}

         <Row>
             <Col md ={4} >
             <Input  label="ShopPhoneNo"
                placeholder="ShopPhoneNo"
                value = {shopPhNo}
                onChange = {(e) => setShopPhNo(e.target.value)}
              type="text" />
               
             </Col>
             <Col md ={8} >
             <Input  label="ShopAddress"
                placeholder="ShopAddress"
                value = {shopAddress}
                onChange = {(e) => setShopAddress(e.target.value)}
              type="text" />
               
             </Col>
            
         </Row>

         <Row  style={{marginTop:"10px"}}>
             <Col md={4}>
           
             <select  className="form-control" 
                // value={shopType}
             onChange = {(e)=>{
            
               const selectedShopType = e.target.value;
               setShopType(selectedShopType);
             }}
             
             >
                               <option value="">Shop Type</option>
                               <option value="store">Store</option>
                               <option value="product">Product</option>
                               <option value="page">Page</option>

                           </select>
             </Col>
            

             <Col md={4}>
           
           <select  className="form-control" 
             value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
           >
                            <option>Shop category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>
                        )
                    }

                         </select>

                         {/* {categoryId}
                         {shopType} */}
           </Col>
            
         </Row>

         <Row  style={{marginTop:"10px"}}>
           <Col md ={4} >
           <Input  label="Shop Password"
                placeholder="Shop Password"
                value ={shopPassword}
                onChange= {(e)=> setShopPassword(e.target.value)}
              type="password" />
           </Col>
         </Row>

         <Button variant="primary" type="submit" >
                Submit
              </Button>

              </Form>
            
         </Col>
     </Row>

     {/* </Container> */}
        
        </Layout>
    );
}

export default AddStore;


