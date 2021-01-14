import React, { Fragment, useEffect } from 'react'
import '../about.css'
import '../Products.css'
import '../bootstrap.min.css'
import '../fonts/font-awesome.min.css'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'

const AboutCompany = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
            <Fragment>
                <MetaData title={'The Company'}/>
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
                            <h1>Our Company</h1>
                            <hr />
                            <p className="text-justify">AGILE TECHNODYNAMICS, INC. is a duly registered company with the Securities and Exchange Commission (SEC). The company was organized from the Engineering background of its main incorporator with the aim of consolidating its resources under one roof and to gain expertise for its Construction and Services whose ultimate goal is supreme clientele satisfaction.<br /></p>
                            <img className="about-us-image" src="#" alt="image of company building and logo"/>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
    )
}

export default AboutCompany;