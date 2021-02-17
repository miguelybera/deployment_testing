import React from 'react'
import { Fragment } from 'react'
import '../../css/styles.css'
import '../../css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from './../../actions/userActions'

const Header = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout());

        alert.success('Logged out successfully')
    }

    return (
        <Fragment>
        <nav className="navbar navbar-dark navbar-expand-md fixed-top">
            <div className="container">
                <button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
            <Link to="/">
                <img className="agile-logo" src="https://res.cloudinary.com/agiletech3itf/image/upload/v1610472388/agile-tech-big-blue-logo_cej4nt.png"/>
            </Link>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav flex-grow-1 justify-content-between">
                        <li className="nav-item"><Link className="nav-link" to="#"></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/"><strong>Home</strong></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about-company"><strong>About Us</strong></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/our-products"><strong>Products</strong></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/our-services"><strong>Services</strong></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact-us"><strong>Contact Us</strong></Link></li>
                        {user ? (
                                <div className="ml-4 dropdown d-inline">
                                <Link
                                    className="btn dropdown-toggle text-black mr-4"
                                    type="button"
                                    id="dropDownMenuButton"
                                    data-toggle="dropdown"
                                    aria-aria-haspopup="true"
                                    aria-expanded="false">
                                        {user && user.name}
                                    </Link>
                                    <div className="dropdown-menu" aria-aria-labelledby="dropDownMenuButton">
                                        <Link className="dropdown-item" to="/admin/dashboard">
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
                                <div></div>
                            </Link>}
                    </ul> 
                </div>
            </div>
        </nav>
        </Fragment>
    )
}

export default Header;