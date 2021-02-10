import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { listInquiry, clearErrors } from '../../actions/inquiryActions'

const ListOrders = () => {

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
                    label: 'Status',
                    field: 'inquiryStatus',
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
             if(inquiry.concernType==='Appointment'){
                data.rows.push({
                    id: inquiry._id,
                    firstName: inquiry.firstName,
                    lastName: inquiry.lastName,
                    companyName: inquiry.companyName,
                    inquiryStatus: String(inquiry.inquiryStatus),
                    actions:   <Link to={`/admin/inquiry/${inquiry._id}`} className='btn btn-primary'>
                                <i className='fa fa-eye'></i>
                            </Link>
                 })
             }
         })

         return data
    }
    return (
        <Fragment>
            <MetaData title={'Quotations'}/>
            <div className="row">
                <div className="col-4 col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-12 col-md-10">
                    <Fragment>
                    <h1 className='mt-5'>Inbox - Quotations</h1>
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

export default ListOrders