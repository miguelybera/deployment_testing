import React, { Fragment, useEffect, useState } from 'react'
import '../css/styles.css'
import MetaData from './layout/MetaData'
import { useSelector, useDispatch } from 'react-redux'
import { getHomeDetails} from './../actions/websiteActions'

const Home = () => {

    const dispatch = useDispatch();

    const { home } = useSelector(state => state.getHome) //get website detials
    
    const [titleBackground, setTitleBackground] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage1, setProductImage1] = useState('');
    const [productImage2, setProductImage2] = useState('');
    const [servicesDescription, setServicesDescription] = useState('');
    const [servicesBackground, setServicesBackground] = useState('');
    
    useEffect(() => {
        // dispatch(getHomeDetails()); // need to be logged in

        console.log(home.productDescription)
        console.log(home.servicesBackground)
        if(home) {
           setProductDescription(home.productDescription)
           setServicesDescription(home.servicesDescription) 
        }
    }, [dispatch, home])

    return (
            <Fragment>
                <MetaData title={'Home'}/>
                <section className="section1 welcome" style={{height: "100%", width: "100%"}}>
                <div
                    className="welcome-container"
                    style={{
                        background: "linear-gradient(to bottom, rgba(216, 203, 194, 0.8) 0%, rgba(34, 33, 32, 0.8) 100%), url('https://res.cloudinary.com/agiletech3itf/image/upload/v1610472389/welcome-bg_agacxj.png') center / auto no-repeat", 
                        backgroundSize: "cover", 
                        width: "100%", 
                        height: "100%"}
                    }>
                    <img className="agile-logo-small" src="https://res.cloudinary.com/agiletech3itf/image/upload/v1610472388/agile-logo_cqnjad.png" alt="company logo"/>
                    <h1 className="agile-name font-weight-bold">AGILE TECHNODYNAMICS</h1>
                </div>
            </section>
            <div className="row">
                <div className="col-md-auto description-container">
                    <div>
                        <h1 className="font-weight-bold">Our Products</h1>
                        <h6 className="product-description">{home.productDescription}&nbsp;</h6>
                    </div>
                    <a href="product.html">See Products&nbsp;<i className="fa fa-angle-right"></i></a>
                </div>
                <div className="col-md-6">
                    <div className="product" style={{background: "url('https://res.cloudinary.com/agiletech3itf/image/upload/v1609921524/samples/products/12v-hybrid-gel-front-access-battery_d7maov.png') center / auto no-repeat"}}></div>
                </div>
                <div className="col-md-6">
                    <div className="product" style={{background: "url('https://res.cloudinary.com/agiletech3itf/image/upload/v1609921523/samples/products/2v-agm-battery_qtplaq.png') center / auto no-repeat"}}></div>
                </div>
            </div>
            <div 
                className="row our-services our-services-column description-container our-services-photo" 
                style={{
                    background: 'linear-gradient(to right, rgb(0,0,0) 0%, rgba(151,161,179,0.4) 100%), url("https://res.cloudinary.com/agiletech3itf/image/upload/v1610472388/service-bg_lbwajk.jpg") no-repeat', 
                    backgroundSize: "cover", 
                    backgroundPosition: "right"
                    }}
                >
                <div className="col">
                    <div className="div-our-services">
                        <h1 className="our-services font-weight-bold">Our Services</h1>
                        <h6 className="description">{home.servicesDescription}&nbsp;</h6><a className="services-link" href="services.html">See Services&nbsp;<i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
