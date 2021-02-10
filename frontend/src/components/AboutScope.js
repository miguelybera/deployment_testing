import React, { Fragment, useEffect } from 'react'
import '../css/about.css'
import '../css/products.css'
import '../css/bootstrap.min.css'
import '../fonts/font-awesome.min.css'
import MetaData from './layout/MetaData'
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions'

const AboutScope = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
            <Fragment>
                <MetaData title={'Scope of Activities'}/>
                <div class="product-section">
                    <div class="container">
                        <div class="row about-us">
                            <div class="col-md-4 about-us-menu">
                                <h5>About Us</h5>
                                <ul className="sidebar-menu">
                                    <li><a href="/about-company">The Company</a></li>
                                    <li><a href="/about-objectives">Objectives</a></li>
                                    <li><a href="/about-scope-of-activities">Scope of Activities</a></li>
                                    <li><a href="/about-mission-vision">Mission and Vision</a></li>
                                    <li><a href="/about-history">History</a></li>
                                </ul>
                            </div>
                            <div class="col-md-8">
                                <h1>Scope of Activities</h1>
                                <hr />
                                <p class="text-justify">AGILE TECHNODYNAMICS, INC.'s general thrust is to engage in Trading and Contracting primarily within its established line of expertise and professional background of its manpower base then enter into related fields as it improves and expands its capabilities.</p>
                                <p class="text-justify">AGILE TECHNODYNAMICS, INC. is composed of engineers, architects, technicians, and workers highly qualified and experienced in their fields of endeavors; always ready to face the challenge and undertake activities mandated by the company.</p>
                <br /><img class="about-us-image" src="#" alt="company building and logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
    )
}

export default AboutScope;