import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import { useAlert } from 'react-alert'
import '../../css/Sidebar-Menu.css'
import '../../css/Sidebar-Menu-1.css'
import '../../css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteInquiry, updateInquiry, listInquiry, clearErrors } from '../../actions/inquiryActions'
import { DELETE_INQUIRY_RESET, UPDATE_INQUIRY_RESET } from '../../constants/inquiryConstants'
import { INSIDE_DASHBOARD_TRUE } from '../../constants/dashboardConstants'


const ListTrash = ( { history} ) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, inquiries } = useSelector(state => state.listInquiry)
    const { deleteError, isUpdated, isDeleted } = useSelector(state => state.inquiry)

    let deleteAll = false

    const [isToggled, setToggled] = useState('false')

    const handleToggle = () => {
        setToggled(!isToggled)
    }

    useEffect(() => {
        dispatch(listInquiry());

        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
        
        if(deleteError){
            alert.error(deleteError)
            dispatch(clearErrors())
        }

        if(isUpdated){
            alert.success('Inquiry has been updated successfully.');
            history.push('/admin/trash')

            dispatch({
                type: UPDATE_INQUIRY_RESET
            })
        }

        if(isDeleted && deleteAll){
            alert.success('Inquiry has been deleted successfully.');
            history.push('/admin/trash')

            dispatch({
                type: DELETE_INQUIRY_RESET
            })
        }
        
        dispatch({
            type: INSIDE_DASHBOARD_TRUE
        })
    }, [dispatch, alert, error, history, isDeleted, isUpdated, deleteError])

    const setInquiries = () => {
        const data = { 
            columns: [
                {
                    label: 'Date / Time',
                    field: 'createdAt',
                    sort: 'desc'
                },
                {
                    label: 'Last Name',
                    field: 'lastName'
                },
                {
                    label: 'First Name',
                    field: 'firstName'
                },
                {
                    label: 'Company Name',
                    field: 'companyName'
                },
                
                {
                    label: 'Status',
                    field: 'inquiryStatus'
                },
                {
                    label: 'Actions',
                    field: 'actions'
                }
            ],
            rows: []
         }

         inquiries.forEach(inquiry => {
             if(inquiry.inquiryStatus==='Deleted'){
                data.rows.push({
                    createdAt: inquiry.createdAt,
                    firstName: inquiry.firstName,
                    lastName: inquiry.lastName,
                    companyName: inquiry.companyName,
                    concernType: String(inquiry.concernType),
                    actions:   <Fragment>
                                <Link to={`/admin/inquiry/${inquiry._id}`} className='btn btn-primary py-1 px-2 ml-2'>
                                    <i className='fa fa-eye'></i>
                                </Link>
                                <button className="btn btn-secondary py-1 px-2 ml-2" onClick={() => updateInquiryHandler(inquiry._id, "Resolved")}>
                                    <i className='fa fa-undo'></i>
                                </button>
                                <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteInquiryHandler(inquiry._id)}>
                                    <i className='fa fa-trash'></i>
                                </button>
                            </Fragment>
                 })
             }
         })

         return data
    }

    const updateInquiryHandler = (id, inquiryStatus) => { 
        const formData = new FormData();
        formData.set('inquiryStatus', inquiryStatus);

        dispatch(updateInquiry(id, formData));
    }

    const deleteInquiryHandler = (id) => {

        if(window.confirm("Are you sure you want to delete this message? This cannot be undone.")){
            dispatch(deleteInquiry(id))
        }
    }

    const emptyTrash = () => {
        if(window.confirm("Are you sure you want to delete ALL messages? This cannot be undone.")){
            deleteAll = true 

            let deletedInquiryCount = 0

            inquiries.forEach(inquiry => {

                if(inquiry.inquiryStatus === 'Deleted') {
                    deletedInquiryCount += 1
                    dispatch(deleteInquiry(inquiry._id))
                    deletedInquiryCount -= 1
                }
            })

            if(deletedInquiryCount == 0){
                alert.success('Trash has been emptied.'); //this is working
            }
        }   
    }

    return (
        <Fragment>
            <MetaData title={'Trash'}/>
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
                        <h1 className='mt-3 mb-3'>Trash</h1>
                        <Link>
                            <button className='btn btn-dark btn-sm text-capitalize mb-5' onClick={emptyTrash}>
                                Empty Trash
                            </button>
                        </Link>
                        {loading? <Loader/> : (
                            <MDBDataTable
                                data={setInquiries()}
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

export default ListTrash