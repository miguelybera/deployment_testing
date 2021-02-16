import React, { Fragment, useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutDetails, clearErrors } from '../../actions/websiteActions'
import { UPDATE_ABOUT_RESET } from '../../constants/websiteConstants'

const ListAbout = ({history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, abouts } = useSelector(state => state.abouts)
    const { isUpdated } = useSelector(state => state.website)

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
            <div className="row">
                <div className="col-4 col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-12 col-md-10">
                    <Fragment>
                    <h1 className='mt-5'>Update About Us</h1>
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
        </Fragment>
    )
}

export default ListAbout
