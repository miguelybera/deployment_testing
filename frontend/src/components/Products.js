import React, { Fragment, useState, useEffect } from 'react'
import '../Products.css'
import '../bootstrap.min.css'
import '../fonts/font-awesome.min.css'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, clearErrors } from '../actions/productActions'

import ProductList from './product/ProductList'
import Loader from './layout/Loader'
import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination'


const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, products, error, productsCount, resPerPage } = useSelector(state => state.products);

    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }
        dispatch(getProducts(currentPage));
    }, [dispatch, alert, error, currentPage]);

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber);
    }
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
                                        <ProductList key={product._id} product={product}/>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {resPerPage < productsCount && (
                            <div className="d-flex justify-content-center mt-5">
                                <Pagination 
                                    activePage={currentPage}
                                    itemsCountPerPage={resPerPage}
                                    totalItemsCount={productsCount}
                                    onChange={setCurrentPageNo}
                                    nextPageText={'Next'}
                                    prevPageText={'Prev'}
                                    firstPageText={'First'}
                                    lastPageText={'Last'}
                                    itemClass='page-item'
                                    linkClass='page-link'
                                />
                            </div>
                        )} 
                        
                    </Fragment>
                )}
            </Fragment>
    )
}

export default Products;
