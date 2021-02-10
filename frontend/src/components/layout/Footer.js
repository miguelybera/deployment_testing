import React, { Fragment } from 'react'
import '../../css/footer.css'
import '../../css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from './../../actions/userActions'

const Footer = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout());

        alert.success('Logged out successfully')
    }
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
                                <li><i className="fa fa-home"></i>&nbsp;2/F Agile Center, 248 Fortune 5, Parada Road, Valenzuela City, Philippines</li>
                                <li></li>
                                <li><i className="fa fa-phone"></i>&nbsp;(632) 445 - 1418</li>
                                <li><i className="fa fa-mobile-phone"></i>&nbsp;(632) 292 - 4823</li>
                                <li><i className="fa fa-envelope"></i>&nbsp;agilet@ymail.com</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Quick Links</h3>
                            <ul>
                                <li className="nav-item"><Link className="nav-link" to="/"><strong>Home</strong></Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about-company"><strong>About Us</strong></Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/our-products"><strong>Products</strong></Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/our-services"><strong>Services</strong></Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact-us"><strong>Contact Us</strong></Link></li>
                                <li>&nbsp;</li>
                                <li>
                                    {user ? (
                                    <div>
                                        <Link className="" to="/">
                                            <button className="btn btn-dark btn-sm text-capitalize text-danger ml-3" type="button"  onClick={logoutHandler}>Log out</button>
                                        </Link>
                                    </div>
                                    
                                ) : !loading && <Link to="/login">
                                    <button className="btn btn-dark btn-sm text-capitalize text-white-50 text-danger" type="button">Login to Dashboard</button>
                                </Link>}
                                </li>
                            </ul>
                            
                            
                            <br/><br/>
                            
                        </div>
                    </div>
                    <p className="copyright">Agile Technodynamics, Inc © 1997</p>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;