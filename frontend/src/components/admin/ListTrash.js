import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { deleteInquiry, listInquiry, clearErrors } from '../../actions/inquiryActions'
import { DELETE_INQUIRY_RESET } from '../../constants/inquiryConstants'

const ListTrash = ( { history} ) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, inquiries } = useSelector(state => state.listInquiry)
    const { deleteError, isDeleted } = useSelector(state => state.inquiry)

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

        if(isDeleted){
            alert.success('Inquiry has been deleted successfully.');
            history.push('/admin/trash')

            dispatch({
                type: DELETE_INQUIRY_RESET
            })
        }
    }, [dispatch, alert, error, history, isDeleted, deleteError])

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
             if(inquiry.inquiryStatus==='Deleted'){
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
                                <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteInquiryHandler(inquiry._id)}>
                                    <i className='fa fa-trash'></i>
                                </button>
                            </Fragment>
                 })
             }
         })

         return data
    }

    const deleteInquiryHandler = (id) => {
        dispatch(deleteInquiry(id))
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

export default ListTrash