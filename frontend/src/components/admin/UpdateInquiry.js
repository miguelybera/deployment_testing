import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateInquiry, getInquiryDetails, clearErrors } from '../../actions/inquiryActions'
import { UPDATE_INQUIRY_RESET } from '../../constants/inquiryConstants'

const UpdateInquiry = ( {match, history} ) => {

    const [status, setStatus] = useState('');
    
    const dispatch = useDispatch();
    const alert = useAlert();

    const { inquiry = {} } = useSelector(state => state.inquiryDetails)
    const { inquiryStatus } = inquiry
    const { loading, error, isUpdated } = useSelector(state => state.inquiry);

    const inquiryId = match.params.id

    useEffect(() => { 
        dispatch(getInquiryDetails(inquiryId))

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(isUpdated) {
            history.push('/admin/dashboard');
            alert.success('Inquiry updated successfully.')

            dispatch({
                type: UPDATE_INQUIRY_RESET
            })
        }
    }, [dispatch, error, alert, isUpdated, inquiry, inquiryId, history])

    const updateInquiryHandler = (id) => { 
        const formData = new FormData();
        formData.set('status', setStatus);

        dispatch(updateInquiry(id, formData));
    }

    return (
        <Fragment>
            <MetaData title={'View Message'}/>
            <div className="row">
                 <div className="col-4 col-md-2">
                    <Sidebar/>
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        {loading ? <Loader/> : (
                            <section className="process-section">
                                <div className="row concern-row">
                                    <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                        <h1 className="concern-id">Concern ID: {inquiry._id}</h1>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 status-column">
                                        <h4>Status</h4>
                                        <div className="status-div">
                                            <select 
                                                className="status-dropdown"
                                                name='status'
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                            >
                                                <optgroup label="This is a group">
                                                    <option value="Unresolved">Unresolved</option>
                                                    <option value="Resolved">Resolved</option>
                                                </optgroup>
                                            </select>
                                            <br/>
                                            <button 
                                                className="btn btn-primary update-status-button" 
                                                type="button"
                                                onClick={() => updateInquiryHandler(inquiry._id)}>
                                                Update Status
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-5 concern-div"></div>
                                <div className="m-5 concern-info-container">
                                    <h3>Message Information</h3>
                                    <p><strong>Name / Position:</strong>{inquiry.firstName} {inquiry.lastName} / {inquiry.position} </p>
                                    <p><strong>Company Name:</strong>{inquiry.companyName}</p>
                                    <p><strong>Email: </strong>{inquiry.customerEmail}</p>
                                    <p><strong>Contact No.:</strong>{inquiry.contactNumber}</p>
                                    <p><strong>Concern Type:</strong>{inquiry.concernType}</p>
                                    <p><strong>Message:</strong></p>
                                    <p>{inquiry.customerMessage}</p>
                                </div>
                                <div className="m-5">
                                    <h3>Message status:</h3>
                                    <p className="message-status">{inquiryStatus}</p>
                                </div>
                            </section>
                        )}
                    </Fragment>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateInquiry
