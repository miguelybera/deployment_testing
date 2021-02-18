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
import { getAboutDetails, clearErrors } from '../../actions/websiteActions'
import { UPDATE_ABOUT_RESET } from '../../constants/websiteConstants'
import { INSIDE_DASHBOARD_TRUE } from '../../constants/dashboardConstants'


const ListAbout = ({history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, abouts } = useSelector(state => state.abouts)
    const { isUpdated } = useSelector(state => state.website)

    const [isToggled, setToggled] = useState('false')

    const handleToggle = () => {
        setToggled(!isToggled)
    }

    useEffect(() => {
        dispatch(getAboutDetails());

        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
        
        if(isUpdated){
            alert.success('About Us information has been updated successfully.');
            history.push('/admin/about')

            dispatch({
                type: UPDATE_ABOUT_RESET
            })
        }

        dispatch({
            type: INSIDE_DASHBOARD_TRUE
        })
    }, [dispatch, alert, error, isUpdated, history])

    const setAboutData = () => {
        const data = { 
            columns: [
                {
                    label: 'Title',
                    field: 'title',
                    sort: 'asc'
                },
                {
                    label: 'Description',
                    field: 'description',
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

         abouts.forEach(about => {
            data.rows.push({
                title: about.title,
                description: about.description,
                actions:   <Fragment>
                            <Link to={`/admin/about/${about._id}`} className='btn btn-primary py-1 px-2 ml-2'>
                                <i className='fa fa-eye'></i>
                            </Link>
                        </Fragment>
             })
         })

         return data
    }

    return (
        <Fragment>
            <MetaData title={'All About Us'}/>
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
                        <Fragment>
                        <h1 className='mt-3 mb-3'>Update About Us</h1>
                        {loading? <Loader/> : (
                            <MDBDataTable
                                data={setAboutData()}
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

export default ListAbout
