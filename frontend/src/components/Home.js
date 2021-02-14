import React, { Fragment, useEffect } from 'react'
import '../css/styles.css'
import MetaData from './layout/MetaData'
import Loader from './layout/Loader'
import { useAlert } from 'react-alert'
import { useSelector, useDispatch } from 'react-redux'
import { getHomeDetails, clearErrors } from '../actions/websiteActions'

const Home = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, homePage } = useSelector(state => state.homeDetails)

    let titleBackground, servicesBackground, productImageLeft, productImageRight = ""

    
    if(homePage.titleBackground){
        titleBackground = homePage.titleBackground.url
    } else {
        titleBackground = "https://res.cloudinary.com/agiletech3itf/image/upload/v1613009941/avatars/y0k3r3kes5wovvrefnvw.jpg"
    }

    if(homePage.servicesBackground){
        servicesBackground = homePage.servicesBackground.url
    } else {
        servicesBackground = "https://res.cloudinary.com/agiletech3itf/image/upload/v1613009941/avatars/y0k3r3kes5wovvrefnvw.jpg"
    }

    if(homePage.productImageLeft){
        productImageLeft = homePage.productImageLeft.url
    } else {
        productImageLeft = "https://res.cloudinary.com/agiletech3itf/image/upload/v1613009941/avatars/y0k3r3kes5wovvrefnvw.jpg"
    }

    if(homePage.productImageRight){
        productImageRight = homePage.productImageRight.url
    } else {
        productImageRight = "https://res.cloudinary.com/agiletech3itf/image/upload/v1613009941/avatars/y0k3r3kes5wovvrefnvw.jpg"
    }

    useEffect(() => {
        dispatch(getHomeDetails())
        
        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error]) //loop if homePage added as dependency
    return (
            <Fragment>
                <MetaData title={'Home'}/>
                {loading ? <Loader/> : (
                    <Fragment>
                        <section className="section1 welcome" style={{height: "100%", width: "100%"}}>
                            <div
                                className="welcome-container"
                                style={{
                                    background: "linear-gradient(to bottom, rgba(216, 203, 194, 0.8) 0%, rgba(34, 33, 32, 0.8) 100%), url("+`${titleBackground}`+") center / auto no-repeat", 
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
                                    <h6 className="product-description">{homePage.productDescription}&nbsp;</h6>
                                </div>
                                <a href="product.html">See Products&nbsp;<i className="fa fa-angle-right"></i></a>
                            </div>
                            <div className="col-md-6">
                                <div className="product" style={{background: "url("+`${productImageLeft}`+") center / auto no-repeat"}}></div>
                            </div>
                            <div className="col-md-6">
                                <div className="product" style={{background: "url("+`${productImageRight}`+") center / auto no-repeat"}}></div>
                            </div>
                        </div>
                        <div 
                            className="row our-services our-services-column description-container our-services-photo" 
                            style={{
                                background: "linear-gradient(to right, rgb(0,0,0) 0%, rgba(151,161,179,0.4) 100%), url("+`${servicesBackground}`+") no-repeat", 
                                backgroundSize: "cover", 
                                backgroundPosition: "right"
                                }}
                            >
                            <div className="col">
                                <div className="div-our-services">
                                    <h1 className="our-services font-weight-bold">Our Services</h1>
                                    <h6 className="description">{homePage.servicesDescription}&nbsp;</h6><a className="services-link" href="services.html">See Services&nbsp;<i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
        </Fragment>
    )
}

export default Home;