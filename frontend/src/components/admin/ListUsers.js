import React, { Fragment, useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import '../../css/Sidebar-Menu.css'
import '../../css/Sidebar-Menu-1.css'
import '../../css/bootstrap.min.css'
import '../../css/dashboard.css'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, clearErrors } from '../../actions/userActions'
import { UPDATE_ABOUT_RESET } from '../../constants/websiteConstants'
import { INSIDE_DASHBOARD_TRUE } from '../../constants/dashboardConstants'
import { logout } from './../../actions/userActions'

const ListUsers = ({history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, users } = useSelector(state => state.users)
    const { user } = useSelector(state => state.auth)

    const [isToggled, setToggled] = useState('false')

    const handleToggle = () => {
        setToggled(!isToggled)
    }

    useEffect(() => {
        dispatch(getUsers());

        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
        

        dispatch({
            type: INSIDE_DASHBOARD_TRUE
        })
    }, [dispatch, alert, error, history])

    const logoutHandler = () => {
        dispatch(logout());

        alert.success('Logged out successfully')
    }

    const setUsersData = () => {
        const data = { 
            columns: [
                {
                    label: 'Role',
                    field: 'role',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Contact Number',
                    field: 'contactNumber',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }
            ],
            rows: []
         }

         users.forEach(user => {
            data.rows.push({
                role: user.role,
                name: user.name,
                contactNumber: user.contactNumber,
                email: user.email,
                actions:   <Fragment>
                    <Link to={`/superadmin/user/${user._id}`} className='btn btn-primary py-1 px-2 ml-2'>
                        <i className='fa fa-pencil'></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" disabled={user.role === 'superadmin' ? true : false}>
                        <i className='fa fa-trash'></i>
                    </button>
                </Fragment>
             })
         })

         return data
    }

    return (
        <Fragment>
            <MetaData title={'Users'}/>
            <div id="wrapper" className={isToggled ? "toggled" : null} style={{paddingTop: '65px'}}>
            <div id="sidebar-wrapper" style={{"background": "var(--gray-dark)", "color": "var(--white)"}}>
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">Agile Technodynamics</li>
                    <li> <Link to="/admin/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link></li>
                    <li> <Link to="/admin/me"><i className="fa fa-user"></i> My Profile</Link></li>
                    <li> <Link to="/"><i className="fa fa-home"></i> Agile Homepage</Link></li>
                    <li> <Link to="/admin/products"><i className="fa fa-shopping-bag"></i> Products</Link></li>
                    <hr/>
                    {user && user.role !== 'admin' ? (
                            <Fragment>
                                <li> <Link to="/admin/users"><i className="fa fa-user"></i> Users</Link></li>
                                <li> <Link to="/register"><i className="fa fa-user"></i> Register</Link></li>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <li> <Link to="/admin/inquiries"><i className="fa fa-envelope"></i> Inquiries</Link></li>
                                <li> <Link to="/admin/quotations"><i className="fa fa-archive"></i> Appointment</Link></li>
                                <li> <Link to="/admin/others"><i className="fa fa-inbox"></i> Other Concerns</Link></li>
                                <hr/>
                                <li> <Link to="/admin/archives"><i className="fa fa-envelope-open"></i> Archives</Link></li>
                                <li> <Link to="/admin/trash"><i className="fa fa-trash"></i> Trash</Link></li>
                            </Fragment>
                        )}

                    <hr/>
                    <li className="text-danger" onClick={logoutHandler}> <Link to="/"><i className="fa fa-sign-out"></i> Log out</Link></li>
                    <li></li>
                </ul>
            </div>
                <div className="page-content-wrapper">
                    <div className="container-fluid">
                        <a className="btn btn-link" role="button" id="menu-toggle" onClick={handleToggle}>
                            <i className="fa fa-bars" style={{"color": "var(--gray-dark)"}}></i>
                        </a>
                        <Fragment>
                        <h1 className='mt-3 mb-3'>Users</h1>
                        {loading? <Loader/> : (
                            <MDBDataTable
                                data={setUsersData()}
                                className='px-3 ml-10'
                                bordered
                                striped
                                hover
                                entries={5}
                            />
                        )}
                        </Fragment>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ListUsers
