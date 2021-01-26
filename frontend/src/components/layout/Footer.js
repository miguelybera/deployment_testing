import React, { Fragment } from 'react'
import '../../footer.css'
import '../../bootstrap.min.css'
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
                            </ul>
                            {user ? (
                                <div className="ml-4 dropdown d-inline">
                                <Link
                                    className="btn dropdown-toggle text-white mr-4"
                                    type="button"
                                    id="dropDownMenuButton"
                                    data-toggle="dropdown"
                                    aria-aria-haspopup="true"
                                    aria-expanded="false">
                                        {user && user.name}
                                    </Link>
                                    <div className="dropdown-menu" aria-aria-labelledby="dropDownMenuButton">
                                        <Link className="dropdown-item" to="/">
                                            Dashboard
                                        </Link>
                                        <Link className="dropdown-item" to="/me">
                                                My Profile
                                            </Link>
                                        {user && user.role !== 'admin' ? (
                                            <Link className="dropdown-item" to="/register">
                                                Register New Users
                                            </Link>
                                        ) : (
                                            <Link></Link>
                                        )}
                                        <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                            Log out
                                        </Link>
                                    </div>
                                </div>
                                
                            ) : !loading && <Link to="/login">
                                <button className="btn btn-dark btn-sm text-capitalize text-white-50" type="button">Login to Dashboard</button>
                            </Link>}
                            
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