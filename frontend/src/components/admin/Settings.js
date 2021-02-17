import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'

import MetaData from './../layout/MetaData'
import Loader from './../layout/Loader'
import '../../css/bootstrap.min.css'
import '../../css/dashboard.css'
import '../../css/Sidebar-Menu.css'

import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts } from '../../actions/productActions'
import { listInquiry } from '../../actions/inquiryActions'

const Settings = () => {

    const dispatch = useDispatch();

    return (
        <Fragment>
            <MetaData title={'Settings'}/>
            <Fragment>
            <div id="wrapper" style={{paddingTop: '65px'}}>
                            <div id="sidebar-wrapper" style={{"background": "var(--gray-dark)", "color": "var(--white)"}}>
                                <ul className="sidebar-nav">
                                    <li className="sidebar-brand">Agile Technodynamics</li>
                                    <li> <Link to="/admin/dashboard">Dashboard</Link></li>
                                    <li> <Link to="/admin/inquiries">Inquiries</Link></li>
                                    <li> <Link to="/admin/quotations">Appointment</Link></li>
                                    <li> <Link to="/admin/others">Other Concerns</Link></li>
                                    <li> <Link to="/admin/archives">Archives</Link></li>
                                    <li> <Link to="/admin/trash">Trash</Link></li>
                                    <li> <Link to="/admin/products">Products</Link></li>
                                    <li> <Link to="/admin/settings">Settings</Link></li>
                                </ul>
                            </div>
                            <div className="page-content-wrapper">
                                <div className="container-fluid">
                                    <a className="btn btn-link" role="button" id="menu-toggle" href="#menu-toggle">
                                        <i className="fa fa-bars" style={{"color": "var(--gray-dark)"}}></i></a>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <section className="dashboard-section">
                                                <div className="dashboard-container">
                                                    <div className="inbox-container small-width">
                                                        <h3>Update Home</h3>
                                                        <hr /><Link to="/admin/update-home">Go to Update Home<i className="fa fa-angle-right"></i></Link>
                                                    </div>
                                                    <div className="products-container small-width">
                                                        <h3>Update About Page</h3>
                                                        <hr /><Link to="/admin/about">Go to Update About<i className="fa fa-angle-right"></i></Link>
                                                    </div>
                                                    <div className="users-container small-width">
                                                        <h3>Update Footer</h3>
                                                        <hr /><Link to="/admin/update-footer">Go to Update Footer<i className="fa fa-angle-right"></i></Link>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </Fragment>
        </Fragment>
    )
}

export default Settings
