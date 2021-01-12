import React, { Fragment, useEffect } from 'react'
import '../Products.css'
import '../bootstrap.min.css'
import '../fonts/font-awesome.min.css'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'

const Home = () => {

    const dispatch = useDispatch();

    const { loading, products, error, productsCount } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
            <Fragment>
                <MetaData title={'Our Products'}/>
                <section id="products" className="product-section">
                    <div className="our-products">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="products-heading-title">Our Products</h1>
                            </div>
                            <div className="col-12">
                                <h5 id="category-name" className="products-subheading-category-name">Categories</h5>
                            </div>
                            {products && products.map( product => (
                                <div key={product._id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 product-display-container">
                                    <img className="product-image center" src={product.images[0].url}/>
                                    <h6 className="product-section-h5">{product.name}</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Fragment>
    )
}

export default Home;
