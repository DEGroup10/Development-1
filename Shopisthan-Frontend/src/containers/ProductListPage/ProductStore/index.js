import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductBySlug } from "../../../actions";
import "./style.css";
import { generatePublicUrl } from "../../../urlConfig";
import { Link } from 'react-router-dom';
import Card from "../../../components/UI/Card";

/**
 * @author
 * @function ProductStore
 */


const ProductStore = (props) => {

    const product = useSelector((state) => state.product);
    const [priceRange, setPriceRange] = useState({
      under5k: 5000,
      under10k: 10000,
      under15k: 15000,
      under20k: 20000,
      under30k: 30000,
    });
  
    const dispatch = useDispatch();
    useEffect(() => {
      //  console.log(props);
      const { match } = props;
      dispatch(getProductBySlug(match.params.slug));
    }, []);
  
  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <Card
            headerLeft={`${props.match.params.slug} mobile under ${priceRange[key]}`}
            headerRight={ <button>View All</button> }
            style={{ 
              width: 'calc(100% - 40px)',
              margin: '20px'
             }}
          >
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => (
                <Link to={`/${product.slug}/${product._id}/p`}
                style={{
                  display: 'block'
                }} className="productContainer">
                  <div className="productImgContainer">
                    {/* <img
                      src={(product.productPictures[0].img)}
                      alt="Product Img"
                    ></img> */}
                    <img src={generatePublicUrl(product.productPictures[0].img)} alt="pp"></img>
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px" }}>{product.name} </div>
                    <div>
                      <span>4.3</span>&nbsp;
                      <span>4323</span>
                    </div>
                    <div className="productPrice">{product.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ProductStore
