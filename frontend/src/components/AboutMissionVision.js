import React, { Fragment, useEffect } from 'react'
import '../css/about.css'
import '../css/products.css'
import '../css/bootstrap.min.css'
import '../fonts/font-awesome.min.css'
import MetaData from './layout/MetaData'
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions'

const AboutMissionVision = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
            <Fragment>
                <MetaData title={'Mission and Vision'}/>
                <div className="product-section">
                    <div className="container">
                        <div className="row about-us">
                            <div className="col-xs-12 col-md-4 about-us-menu">
                                <h5>About Us</h5>
                                <ul className="sidebar-menu">
                                    <li><a href="/about-company">The Company</a></li>
                                    <li><a href="/about-objectives">Objectives</a></li>
                                    <li><a href="/about-scope-of-activities">Scope of Activities</a></li>
                                    <li><a href="/about-mission-vision">Mission and Vision</a></li>
                                    <li><a href="/about-history">History</a></li>
                                </ul>
                            </div>
                            <div className="col-md-8">
                                <h1>Our Mission</h1>
                                <hr />
                                <p className="text-justify">To be aligned with the best Product Suppliers and Engineering Services providers in the country.<br /><br /><br /></p>
                                
                                <h1>Our Vision</h1>
                                <hr />
                                <p className="text-justify">To supply products and provide Services with the seal and mark of Quality and Performance<br /></p>
                            <img className="about-us-image" src="#" alt="company building and logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
    )
}

export default AboutMissionVision;