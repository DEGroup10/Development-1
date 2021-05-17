import React from 'react'
import { useSelector } from 'react-redux'
import { Layout } from '../../components/Layout'
import './style.css'
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { WhatsappIcon,FacebookIcon } from "react-share";





const  ShopProfile = ()=> {
 
  const store = useSelector(state=>state.auth.store);
  const product = useSelector(state=>state.product);
  const category = useSelector(state=>state.category)
  
   

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
                <div><div className="Shop__name">{store.shopName}
                </div>
                <i className="Shop__type">{store.shopEmail}</i></div>
              
            </div>
            <div className="StoreCard__column1">
                <div className="Shop__numberVar">{product.products.length}</div>
                <div className="Shop__heading">products</div>
                <div className="Shop__numberVar">99</div>
                <div className="Shop__heading">followers</div>
            </div>
            <div className="StoreCard__column1"><div className="Shop__type">Shop Des...</div></div>
            <div className="StoreCard__column1"><div className="Shop__location">
              {store.shopAddress}
     
              </div>
              </div>
              <div className="StoreCard__column1"><div className="Shop__type">{store.shopType}</div></div>
              <div className="StoreCard__column1"><div className="Shop__type">{store.shopCategory.name}</div></div>
              <div className="Store_Share">
                <WhatsappShareButton
                title={store.shopName}
                separator=" "
                url="https://www.npmjs.com/package/react-share">
                  <WhatsappIcon logoFillColor="green" round={true} size={50}>
                  </WhatsappIcon>
                </WhatsappShareButton>
                <FacebookShareButton
                style={{marginLeft:"12px"}}
                title={store.shopName}
                quote={`Follow My Shop at Shopisthan ${store.shopName}`}
                hashtag="#myShopAtShopisthan #dsfwe"
                url="https://www.npmjs.com/package/react-share">
                  <FacebookIcon logoFillColor="green" round={true} size={50}>
                  </FacebookIcon>
                </FacebookShareButton>
              </div>
             
      </div> </div></div>

   </Layout>
  
      </>
    )
}

export default ShopProfile
