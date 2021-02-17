import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateInquiry, listInquiry, clearErrors } from '../../actions/inquiryActions'
import { UPDATE_INQUIRY_RESET } from '../../constants/inquiryConstants'
// import "mdbreact/dist/css/mdb.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";

const ListOrders = ({history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, inquiries } = useSelector(state => state.listInquiry)
    const { isUpdated } = useSelector(state => state.inquiry)

    useEffect(() => {
        dispatch(listInquiry());

        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }

        if(isUpdated){
            alert.success('Inquiry has been moved to trash successfully.');
            history.push('/admin/inquiries')

            dispatch({
                type: UPDATE_INQUIRY_RESET
            })
        }
    }, [dispatch, alert, error, isUpdated, history])

    const updateInquiryHandler = (id, inquiryStatus) => { 
        const formData = new FormData();
        formData.set('inquiryStatus', inquiryStatus);

        dispatch(updateInquiry(id, formData));
    }
    
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
             if(inquiry.concernType==='Inquiry' && (inquiry.inquiryStatus !== "Deleted" && inquiry.inquiryStatus !== "Resolved")){
                data.rows.push({
                    createdAt: inquiry.createdAt,
                    firstName: inquiry.firstName,
                    lastName: inquiry.lastName,
                    companyName: inquiry.companyName,
                    inquiryStatus: inquiry.inquiryStatus && (String(inquiry.inquiryStatus).includes('Processing') || String(inquiry.inquiryStatus).includes('Resolved'))
                        ? <p style={{ color: 'green' }}>{inquiry.inquiryStatus}</p>
                        :  <p style={{ color: 'red' }}>{inquiry.inquiryStatus}</p>,
                    actions:   <Fragment>
                                <Link to={`/admin/inquiry/${inquiry._id}`} className='btn btn-primary py-1 px-2 ml-2'>
                                    <i className='fa fa-eye'></i>
                                </Link>
                                <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => updateInquiryHandler(inquiry._id, "Deleted")}>
                                    <i className='fa fa-trash'></i>
                                </button>
                            </Fragment>
                 })
             }
         })

         return data
    }
    
    return (
        <Fragment>
            <MetaData title={'Inquiries'}/>
            <div id="wrapper"style={{paddingTop: '65px'}}>
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
                        <Fragment>
                        <h1 className='mt-5'>Inbox - Inquiry</h1>
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

export default ListOrders