import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'

import MetaData from './../layout/MetaData'
import Loader from './../layout/Loader'
import Sidebar from './Sidebar'
import '../../css/dashboard.css'
import '../../css/bootstrap.min.css'

import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts } from '../../actions/productActions'
import { listInquiry } from '../../actions/inquiryActions'

const Dashboard = () => {

    const dispatch = useDispatch();

    const { loading, products } = useSelector(state => state.products)
    const { inquiries } = useSelector(state => state.listInquiry)

    useEffect(() => {
        dispatch(getAdminProducts())
        dispatch(listInquiry())
    }, [dispatch])


    return (
        <Fragment>
            <MetaData title={'Dashboard'}/>
            <Fragment>
                <div className='row'>
                    <div className='col-4 col-md-2 '>
                        <Sidebar/>
                    </div>
                    <section className="dashboard-section col-8">
                        <h1>Dashboard</h1>
                        
                        <div className="dashboard-container">
                            {loading ? <Loader/> : (
                                <Fragment>
                                <MetaData title={'Admin Dashboard'}/>
                                    <div className="inbox-container small-width">
                                        <h3>Inbox</h3>
                                        <h5>
                                            {inquiries && inquiries.length}
                                        </h5>
                                        <hr/><Link to="/admin/inquiries">View messages&nbsp;<i className="fa fa-angle-right"></i></Link>
                                    </div>
                                    <div className="products-container small-width">
                                        <h3>Products</h3>
                                        <h5>
                                            {products && products.length}
                                        </h5>
                                        <hr/><Link to="/admin/products">View details&nbsp;<i className="fa fa-angle-right"></i></Link>
                                    </div>
                                    <div className="users-container small-width">
                                        <h3>Users</h3>
                                        <h5>3</h5>
                                        <hr/><Link to="/admin/users">View details&nbsp;<i className="fa fa-angle-right"></i></Link>
                                    </div>
                                </Fragment>
                            )}
                        </div>
                    </section>
                </div>   
            </Fragment>
        </Fragment>

    )
}

export default Dashboard
