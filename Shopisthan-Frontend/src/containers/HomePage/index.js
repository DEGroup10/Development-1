import React, { useEffect } from "react";
import { getInitialData } from "../../actions";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { MaterialButton } from "../../components/MaterialUI";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";
import { addToCart } from "../../actions/cart.action";
import { IoMdCart } from "react-icons/io";
import "./style.css";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  });

  const renderProduct = () => {
    return (
      <div id="product" style={{alignItems:'center'}}>
        {product.products.map((product, index) => (
          <div className="newcard" key={product._id}>
            <Link to={`/${product.slug}/${product._id}/p`}>
              <img
                style={{
                  alignItems: 'center'
                }}
                src={generatePublicUrl(product.productPictures[0].img)}
                alt=""
              />
            </Link>
            <div className="content">
              <h3> 
                <Link to={`/product/${product._id}`}>{product.name}</Link>
              </h3>
              <span>$ {product.price}</span>
              <p>Description : {product.description}</p>
              <MaterialButton
                title="View"
                bgColor="#ff9f00"
                textColor="#ffffff"
                style={{
                  marginRight: "5px",
                }}
                
                // onClick={() => {
                //   const { _id, name, price } = product.productDetails;
                //   const img = product.productDetails.productPictures[0].img;
                //   dispatch(addToCart({ _id, name, price, img }));
                //   props.history.push(`/cart`);
                // }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
    <Layout></Layout>
      <div> {renderProduct()}</div>
    </>
  );
};

export default HomePage;
