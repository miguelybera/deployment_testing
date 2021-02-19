import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MetaData from './../layout/MetaData'
import Loader from './../layout/Loader'
import '../../css/bootstrap.min.css'
import '../../css/dashboard.css'
import '../../css/Sidebar-Menu.css'
import '../../css/Sidebar-Menu-1.css'

import { useDispatch } from 'react-redux'
import { INSIDE_DASHBOARD_TRUE } from '../../constants/dashboardConstants'


const Settings = () => {

    const dispatch = useDispatch();

    const [isToggled, setToggled] = useState('false')
    
    const handleToggle = () => {
        setToggled(!isToggled)
    }

    useEffect(() => {
        dispatch({
            type: INSIDE_DASHBOARD_TRUE
        })
    })
    return (
        <Fragment>
            <MetaData title={'Settings'}/>
            <Fragment>
            <div id="wrapper" className={isToggled ? "toggled" : null} style={{paddingTop: '65px'}}>
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
                                    <a className="btn btn-link" role="button" id="menu-toggle" onClick={handleToggle}>
                                        <i className="fa fa-bars" style={{"color": "var(--gray-dark)"}}></i>
                                    </a>
                                    <div className="main-section">
                                        <div className="dashbord">
                                            <div className="icon-section">
                                                <i className="fa fa-inbox" aria-hidden="true"></i><br/>
                                                <small>Update Home</small>
                                            </div>
                                            <div className="detail-section">
                                                <Link to="/admin/update-home">Go to Update Home<i className="fa fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                        <div className="dashbord dashbord-green">
                                            <div className="icon-section">
                                                <i className="fa fa-inbox" aria-hidden="true"></i><br/>
                                                <small>Update About Page</small>
                                            </div>
                                            <div className="detail-section">
                                                <Link to="/admin/about">Go to Update About<i className="fa fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                        <div className="dashbord dashbord-orange">
                                            <div className="icon-section">
                                                <i className="fa fa-inbox" aria-hidden="true"></i><br/>
                                                <small>Update Footer</small>
                                            </div>
                                            <div className="detail-section">
                                                <Link to="/admin/update-footer">Go to Update Footer<i className="fa fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                        <div className="dashbord dashbord-blue">
                                            <div className="icon-section">
                                                <i className="fa fa-tasks" aria-hidden="true"></i><br/>
                                                <small>Task</small>
                                                <p>8</p>
                                            </div>
                                            <div className="detail-section">
                                                <a href="#">More Info </a>
                                            </div>
                                        </div>
                                        <div className="dashbord dashbord-red">
                                            <div className="icon-section">
                                                <i className="fa fa-shopping-cart" aria-hidden="true"></i><br/>
                                                <small>Cart</small>
                                                <p>$ 24</p>
                                            </div>
                                            <div className="detail-section">
                                                <a href="#">More Info </a>
                                            </div>
                                        </div>
                                        <div className="dashbord dashbord-skyblue">
                                            <div className="icon-section">
                                                <i className="fa fa-comments" aria-hidden="true"></i><br/>
                                                <small>Mentions</small>
                                                <p>96</p>
                                            </div>
                                            <div className="detail-section">
                                                <a href="#">More Info </a>
                                            </div>
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
