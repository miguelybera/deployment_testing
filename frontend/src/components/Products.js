import React, { Fragment, useEffect } from 'react'
import '../Products.css'
import '../bootstrap.min.css'
import '../fonts/font-awesome.min.css'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'

import IndivProduct from './product/IndivProduct'
import Loader from './layout/Loader'
import { useAlert } from 'react-alert'

const Home = () => {

    const alert = useAlert();

    const dispatch = useDispatch();

    const { loading, products, error, productsCount } = useSelector(state => state.products);

    useEffect(() => {
        if(error){
            alert.sucess('Success');
            return alert.error(error);
        }

        dispatch(getProducts());
    }, [dispatch, alert, error]);

    return (
            <Fragment>
                {loading ? <Loader/> : 
                (
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
                                        <IndivProduct key={product._id} product={product}/>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </Fragment>
                )}
            </Fragment>
    )
}

export default Home;
