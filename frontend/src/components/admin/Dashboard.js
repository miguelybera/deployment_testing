import React, { Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import MetaData from './../layout/MetaData'
import Loader from './../layout/Loader'
import '../../css/bootstrap.min.css'
import '../../css/dashboard.css'
import '../../css/Sidebar-Menu.css'
import '../../css/Sidebar-Menu-1.css'

import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts } from '../../actions/productActions'
import { listInquiry } from '../../actions/inquiryActions'
import { INSIDE_DASHBOARD_TRUE } from '../../constants/dashboardConstants'

const Dashboard = () => {

    const dispatch = useDispatch();

    const { loading, products } = useSelector(state => state.products)
    const { inquiries } = useSelector(state => state.listInquiry)

    const [isToggled, setToggled] = useState('false')

    const handleToggle = () => {
        setToggled(!isToggled)
    }
    
    useEffect(() => {
        dispatch(getAdminProducts())
        dispatch(listInquiry())

        // countLength()

        dispatch({
            type: INSIDE_DASHBOARD_TRUE
        })


    }, [dispatch])

    // var inquiryLength, appointmentLength, otherConcernsLength = 0

    // const countLength = () => {
    //        inquiries.forEach(inquiry => {
    //             if(inquiry.concernType === 'Inquiry'){
    //                 inquiryLength += 1
    //             }

    //             if(inquiry.concernType === 'Appointment'){
    //                 appointmentLength += 1
    //             }

    //             if(inquiry.concernType === 'Others'){
    //                 otherConcernsLength += 1
    //             }
    //        })
    //        // && (inquiry.inquiryStatus !== "Deleted" && inquiry.inquiryStatus !== "Resolved")
    //        console.log('inq length', inquiryLength) //NaN
    //        console.log('app length', appointmentLength) //undefined
    //        console.log('oth length', otherConcernsLength) //0, didnt iterate
    // }
    
    return (
        <Fragment>
            <MetaData title={'Dashboard'}/>
            <Fragment>
                {loading ? <Loader/> : (
                    <Fragment>
                        <MetaData title={'Admin Dashboard'}/>
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
                                                <i className="fa fa-envelope-open" aria-hidden="true"></i><br/>
                                                <small>Inquiries</small>
                                                <p>{inquiries && inquiries.length} messages</p>
                                            </div>
                                            <div className="detail-section">
                                                <a href="#">More Info </a>
                                            </div>
                                        </div>
                                        <div className="dashbord dashbord-green">
                                            <div className="icon-section">
                                                <i className="fa fa-archive" aria-hidden="true"></i><br/>
                                                <small>Appointments</small>
                                                <p>{inquiries && inquiries.length} messages</p>
                                            </div>
                                            <div className="detail-section">
                                                <Link to="#">More Info </Link>
                                            </div>
                                        </div>
                                        <div className="dashbord dashbord-orange">
                                            <div className="icon-section">
                                                <i className="fa fa-inbox" aria-hidden="true"></i><br/>
                                                <small>Other Concerns</small>
                                                <p>{inquiries && inquiries.length} messages</p>
                                            </div>
                                            <div className="detail-section">
                                                <a href="#">More Info </a>
                                            </div>
                                        </div>
                                        <div className="dashbord dashbord-blue">
                                            <div className="icon-section">
                                                <i className="fa fa-home" aria-hidden="true"></i><br/>
                                                <p>Update Home</p>
                                            </div>
                                            <div className="detail-section">
                                                <Link to="/admin/update-home">Go to Update Home <i className="fa fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                        <div className="dashbord dashbord-red">
                                            <div className="icon-section">
                                                <i className="fa fa-info-circle" aria-hidden="true"></i><br/>
                                                <p>Update About Page</p>
                                            </div>
                                            <div className="detail-section">
                                                <Link to="/admin/about">Go to Update About <i className="fa fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                        <div className="dashbord dashbord-skyblue">
                                            <div className="icon-section">
                                                <i className="fa fa-quote-left" aria-hidden="true"></i><br/>
                                                <p>Update Footer</p>
                                            </div>
                                            <div className="detail-section">
                                                <Link to="/admin/update-footer">Go to Update Footer <i className="fa fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
            </Fragment>
        </Fragment>
    )
}

export default Dashboard
