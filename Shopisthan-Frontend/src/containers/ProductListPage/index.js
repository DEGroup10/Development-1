import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProductBySlug } from '../../actions';
import Layout from '../../components/Layout'
import './style.css'
import { generatePublicUrl } from '../../urlConfig'

/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {

    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000

    })

    const dispatch = useDispatch();
    useEffect(() => {
        //  console.log(props);
        const { match } = props;
        dispatch(getProductBySlug(match.params.slug))
    }, []);


    return (
        <Layout>

            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>{props.match.params.slug} mobile under {priceRange[key]}</div>
                                <button>View All</button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <div className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="pp"></img>
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: '5px' }}>{product.name} </div>
                                                <div>
                                                    <span>4.3</span>&nbsp;
                                <span>4323</span>
                                                </div>
                                                <div className="productPrice">{product.price}</div>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    );
                })
            }


        </Layout>
    )

}

export default ProductListPage