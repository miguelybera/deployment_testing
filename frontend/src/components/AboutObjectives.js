import React, { Fragment, useEffect } from 'react'
import '../css/about.css'
import '../css/products.css'
import '../css/bootstrap.min.css'
import '../fonts/font-awesome.min.css'
import MetaData from './layout/MetaData'
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions'

const AboutObjectives = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
            <Fragment>
                <MetaData title={'The Objectives'}/>
                <div className="product-section">
                    <div className="container">
                        <div className="row about-us">
                            <div className="col-md-4 about-us-menu">
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
                                <h1>The Objectives</h1>
                                <hr />
                                <p className="text-justify">&bull; Bring into the consciousness of every clientele the availability of ISO Standard Quality Products from around the world, in their doorsteps.</p>
                                <p className="text-justify">&bull; Provide Construction and Services at competitive price levels without detriment to quality and efficiency.</p>
                                <p className="text-justify">&bull; Enter into contracts for Commercial, Engineering, and Industrial Projects - Civil, Electrical in scope - adopting the latest technology available and tapping local technical expertise and environmental impact for the welfare of Filipino people.</p>
                                <p className="text-justify">&bull; To fully support all government initiative and economic activities in the attainment of the National Goal for Philippines 2008 and onwards.</p>
                            <br /><img className="about-us-image" src="#" alt="company building and logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
    )
}

export default AboutObjectives;