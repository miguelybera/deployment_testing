import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import '../../css/Sidebar-Menu.css'
import '../../css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateInquiry, getInquiryDetails, clearErrors } from '../../actions/inquiryActions'
import { UPDATE_INQUIRY_RESET } from '../../constants/inquiryConstants'

const UpdateInquiry = ( { match, history } ) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, inquiry } = useSelector(state => state.inquiryDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.inquiry);

    const inquiryId = match.params.id

    useEffect(() => { 
        if(inquiry && inquiry._id !== inquiryId) {
            dispatch(getInquiryDetails(inquiryId))
        }

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(updateError){
            alert.error(updateError);
            dispatch(clearErrors());
        }

        if(isUpdated) {
            history.push('/dashboard');
            alert.success('Inquiry updated successfully.')

            dispatch({
                type: UPDATE_INQUIRY_RESET
            })
        }
    }, [dispatch, error, alert, isUpdated, updateError, inquiry, inquiryId, history])

    const updateInquiryHandler = (id, inquiryStatus) => { 
        const formData = new FormData();
        formData.set('inquiryStatus', inquiryStatus);

        dispatch(updateInquiry(id, formData));
    }

    return (
        <Fragment>
            <MetaData title={'View Message'}/>
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
                    <Fragment>
                        {loading ? <Loader/> : (
                            <section className="process-section">
                                <div className="m-5 concern-info-container">
                                    <h3>{inquiry.concernType} sent on {inquiry.createdAt}</h3>
                                    <hr/>
                                    <p style={{fontSize: '25px'}}><strong>Sender Information</strong></p>
                                    <p><strong>From: </strong>{inquiry.firstName} {inquiry.lastName}, {inquiry.position} at {inquiry.companyName} </p>
                                    <p><strong>Email: </strong>{inquiry.customerEmail}</p>
                                    <p><strong>Contact No.: </strong>{inquiry.contactNumber}</p>
                                    <hr/>
                                    <p style={{fontSize: '20px'}}>{inquiry.customerMessage}</p>
                                </div>
                                <div className="m-5">
                                    {(inquiry.inquiryStatus === 'Resolved') ? (
                                        <Fragment>
                                            <button 
                                                className="btn btn-primary update-status-button" 
                                                type="button"
                                                onClick={() => updateInquiryHandler(inquiry._id, 'Unresolved')}
                                                style={{marginBottom: '65px'}}>
                                                Restore message back to {inquiry.concernType}
                                            </button>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <button 
                                                className="btn btn-primary update-status-button" 
                                                type="button"
                                                onClick={() => updateInquiryHandler(inquiry._id, 'Resolved')}
                                                style={{marginBottom: '65px'}}>
                                                Mark this message as 'Resolved'
                                            </button>
                                        </Fragment>
                                    )}
                                </div>
                            </section>
                        )}
                    </Fragment>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default UpdateInquiry
