import React, { Fragment, useEffect } from 'react'
import '../about.css'
import '../Products.css'
import '../bootstrap.min.css'
import '../fonts/font-awesome.min.css'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'

const AboutHistory = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
            <Fragment>
                <MetaData title={'The History'}/>
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
                            <h1>Our History</h1>
                            <hr />
                            <p className="text-justify">AGILE TECHNODYNAMICS, INC. came into being as the only direction for professional improvement of the main proponents to face higher and stiffer challenges with their long years of service as Managers, Engineers and Technicians of prestigious companies serving the Water, Power and Industrial Sectors of the Philippine Industry.<br /><br />Incorporated in October 1997, the venture was anchored on the supply and contracting services for the same and lucrative sectors of the industry wherein the established experience and capability of the proponents have been recognized and appreciated for quality and integrity by our loyal clientele.<br /><br />Through the years, we have added Product Lines and expanded our contracting abilities as we establish a new clientele base. <br /><br />Likewise, our relatioinships with out international partners have become more closely-knitted resulting in higher customer satisfaction.<br /><br />Thus, the footprint legacy of AGILE TECHNODYNAMICS, INC. has been preserved to date and onwards.<br /></p><img className="about-us-image" src="#" alt="image of company building and logo"/>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
    )
}

export default AboutHistory;