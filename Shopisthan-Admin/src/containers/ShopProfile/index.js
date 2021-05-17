import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getStoreDetailsById } from '../../actions/store.action'
import { Layout } from '../../components/Layout'
import './style.css'



const  ShopProfile = (props)=> {
  
  const disptach = useDispatch();
 
  useEffect(()=>{
        const {storeId} = props.match.params;
  
    const payload = {
        params:{
          storeId
        }
    }
    disptach(getStoreDetailsById(payload))
    },[]);

    const store = useSelector(state=>state.store.storeDetails);
    const product = useSelector(state=>state.store.storeProducts);

    if (Object.keys(store).length === 0) {
      return null;
    }

 



    return (
     <>
   
          <Layout  sidebar>


          <div>
                  <div className="StoreCard__container">
                <div className="StoreCard__row"><img className="Shop__logo"
                src= "https://as1.ftcdn.net/jpg/03/01/31/70/500_F_301317052_ajbJFzcmAbkAUJPW57nj4fevWm4ZlKJB.jpg"
                  alt="Logo" /></div>
                <div className="StoreCard__column">
                    <div className="StoreCard__column1">
                        <div><div className="Shop__name">
                        {store.shopName}
                        </div>
                        <i className="Shop__type">
                        {store.shopEmail}
                        </i></div>
                      
                    </div>
                    <div className="StoreCard__column1">
                        <div className="Shop__numberVar">
                        {product.length}
                        </div>
                        <div className="Shop__heading">products</div>
                        <div className="Shop__numberVar">
                        {/* {store.followers.length} */}
                        </div>
                        <div className="Shop__heading">followers</div>
                    </div>
                    <div className="StoreCard__column1"><div className="Shop__type">Shop Des...</div></div>
                    <div className="StoreCard__column1"><div className="Shop__location">
                      {store.shopAddress}
            
                      </div>
                      </div>
                      <div className="StoreCard__column1"><div className="Shop__type">{store.shopType}</div></div>
                      <div className="StoreCard__column1">
                          <div className="Shop__tags">
                          {store.shopCategory.name}
                          </div>
                        </div>
                    
            </div> </div></div>

            <div className="Product__container">

            {
                 product.length > 0 ?
                   product.map((product,index)=>

                                    
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
                            
                          
                            
                        </div>
                    </div>
            

                   ):null
                            }


                            </div>
            
          </Layout>
   
      </>
    )
}

export default ShopProfile
