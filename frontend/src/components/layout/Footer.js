import React, { Fragment } from 'react'
import '../../footer.css'
import '../../bootstrap.min.css'

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 item text">
                            <h3>About Us</h3>
                            <p>AGILE TECHNODYNAMICS, INC. is a duly registered company with the Securities and Exchange Commission (SEC). The company was organized from the Engineering background of its main incorporator with the aim of consolidating its resources under one roof and to gain expertise for its Construction and Services whose ultimate goal is supreme clientele satisfaction.</p>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Contact Info</h3>
                            <ul>
                                <li><a href="#"><i className="fa fa-home"></i>&nbsp;2/F Agile Center, 248 Fortune 5, Parada Road, Valenzuela City, Philippines</a></li>
                                <li></li>
                                <li><a href="#"><i className="fa fa-phone"></i>&nbsp;(632) 445 - 1418</a></li>
                                <li><a href="#"><i className="fa fa-mobile-phone"></i>&nbsp;(632) 292 - 4823</a></li>
                                <li><a href="#"><i className="fa fa-envelope"></i>&nbsp;agilet@ymail.com</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="product.html">Products</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="copyright">Agile Technodynamics, Inc © 1997</p>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;