import React, { Fragment, useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateInquiry, listInquiry, clearErrors } from '../../actions/inquiryActions'

const ListArchives = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, inquiries } = useSelector(state => state.listInquiry)

    useEffect(() => {
        dispatch(listInquiry());

        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error])

    const updateInquiryHandler = (id, inquiryStatus) => { 
        const formData = new FormData();
        formData.set('inquiryStatus', inquiryStatus);

        dispatch(updateInquiry(id, formData));
    }

    const setInquiries = () => {
        const data = { 
            columns: [
                {
                    label: 'Inquiry ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Last Name',
                    field: 'lastName',
                    sort: 'asc'
                },
                {
                    label: 'First Name',
                    field: 'firstName',
                    sort: 'asc'
                },
                {
                    label: 'Company Name',
                    field: 'companyName',
                    sort: 'asc'
                },
                {
                    label: 'Concern Type',
                    field: 'concernType',
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

         inquiries.forEach(inquiry => {
             if(inquiry.inquiryStatus==='Resolved'){
                data.rows.push({
                    id: inquiry._id,
                    firstName: inquiry.firstName,
                    lastName: inquiry.lastName,
                    companyName: inquiry.companyName,
                    concernType: String(inquiry.concernType),
                    actions:   <Fragment>
                                <Link to={`/admin/inquiry/${inquiry._id}`} className='btn btn-primary'>
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
            <MetaData title={'Archives'}/>
            <div className="row">
                <div className="col-4 col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-12 col-md-10">
                    <Fragment>
                    <h1 className='mt-5'>Archives</h1>
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
        </Fragment>
    )
}

export default ListArchives