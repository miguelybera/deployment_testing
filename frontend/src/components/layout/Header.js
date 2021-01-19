import React from 'react'
import { Fragment } from 'react'
import '../../styles.css'
import '../../bootstrap.min.css'
import { Link } from 'react-router-dom'

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
                        <li className="nav-item"><Link className="nav-link" to="#"></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/"><strong>Home</strong></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about-company"><strong>About Us</strong></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/our-products"><strong>Products</strong></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/our-services"><strong>Services</strong></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact-us"><strong>Contact Us</strong></Link></li>
                    </ul> 
                </div>
            </div>
        </nav>
        </Fragment>
    )
}

export default Header;