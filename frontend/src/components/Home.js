import React, { Fragment, useEffect } from 'react'
import '../styles.css'
import '../bootstrap.min.css'
import '../fonts/font-awesome.min.css'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
            <Fragment>
                <MetaData title={'Home'}/>
                <section className="section1 welcome" style={{height: "100%", width: "100%"}}>
                <div className="welcome-container">
                    <img className="agile-logo-small" src="https://res.cloudinary.com/agiletech3itf/image/upload/v1610472388/agile-logo_cqnjad.png"/>
                    <h1 className="agile-name font-weight-bold">AGILE TECHNODYNAMICS</h1>
                </div>
            </section>
            <div className="row">
                <div className="col-md-auto description-container">
                    <div>
                        <h1 className="font-weight-bold">Our Products</h1>
                        <h6 className="product-description">Suspendisse blandit ornare pellentesque. Sed quis magna nibh. Sed a sem eros. Sed scelerisque felis condimentum, iaculis purus sed, lobortis mi. Donec leo dui, rhoncus nec enim eu, vulputate sodales ante. Maecenas convallis iaculis arcu sed bibendum. Vestibulum tincidunt dui velit, eget interdum massa scelerisque nec. Suspendisse commodo fringilla rutrum.&nbsp;</h6>
                    </div>
                    <h6></h6><a href="product.html">See Products&nbsp;<i className="fa fa-angle-right"></i></a>
                </div>
                <div className="col-md-6">
                    <div className="product" style={{background: "url('https://res.cloudinary.com/agiletech3itf/image/upload/v1609921524/samples/products/12v-hybrid-gel-front-access-battery_d7maov.png') center / auto no-repeat"}}></div>
                </div>
                <div className="col-md-6">
                    <div className="product" style={{background: "url('https://res.cloudinary.com/agiletech3itf/image/upload/v1609921523/samples/products/2v-agm-battery_qtplaq.png') center / auto no-repeat"}}></div>
                </div>
            </div>
            <div className="row our-services our-services-column description-container our-services-photo">
                <div className="col">
                    <div className="div-our-services">
                        <h1 className="our-services font-weight-bold">Our Services</h1>
                        <h6 className="description">Suspendisse blandit ornare pellentesque. Sed quis magna nibh. Sed a sem eros. Sed scelerisque felis condimentum, iaculis purus sed, lobortis mi. Donec leo dui, rhoncus nec enim eu, vulputate sodales ante. Maecenas convallis iaculis arcu sed bibendum. Vestibulum tincidunt dui velit, eget interdum massa scelerisque nec. Suspendisse commodo fringilla rutrum.&nbsp;</h6><a className="services-link" href="services.html">See Services&nbsp;<i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
            </Fragment>
    )
}

export default Home;
