import React from 'react'
import { Fragment } from 'react'
import '../../App.css'
import '../../bootstrap.min.css'
const Header = () => {
    return (
        <Fragment>
        <nav className="navbar navbar-dark navbar-expand-md fixed-top">
            <div className="container">
                <button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
            <a href="/">
                <img className="agile-logo" src="https://res.cloudinary.com/agiletech3itf/image/upload/v1610472388/agile-tech-big-blue-logo_cej4nt.png"/>
            </a>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav flex-grow-1 justify-content-between">
                        <li className="nav-item"><a className="nav-link" href="#"></a></li>
                        <li className="nav-item"><a className="nav-link" href="/"><strong>Home</strong></a></li>
                        <li className="nav-item"><a className="nav-link" href="about-company"><strong>About Us</strong></a></li>
                        <li className="nav-item"><a className="nav-link" href="our-products"><strong>Products</strong></a></li>
                        <li className="nav-item"><a className="nav-link" href="our-services"><strong>Services</strong></a></li>
                        <li className="nav-item"><a className="nav-link" href="contact-us"><strong>Contact Us</strong></a></li>
                    </ul> 
                </div>
            </div>
        </nav>
        </Fragment>
    )
}

export default Header;