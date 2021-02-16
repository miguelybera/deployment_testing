import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateAbout, getSingleAbout, clearErrors } from '../../actions/websiteActions'
import { UPDATE_ABOUT_RESET } from '../../constants/websiteConstants'

const UpdateAbout = ({ match, history }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, about } = useSelector(state => state.aboutDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.website);

    const aboutId = match.params.id

    useEffect(() => {

        if(about && about._id !== aboutId) {
            dispatch(getSingleAbout(aboutId))
        }
        else { 
            setTitle(about.title)
            setDescription(about.description)
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
            history.push('/admin/about');
            alert.success('Information updated successfully.')

            dispatch({
                type: UPDATE_ABOUT_RESET
            })
        }
    }, [dispatch, error, alert, isUpdated, updateError, about, aboutId, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('title', title);
        formData.set('description', description);

        dispatch(updateAbout(about._id, formData));
    }


    return (<Fragment>
        <MetaData title={'Update About'}/>
        <div className="row">
            <div className="col-4 col-md-2">
                <Sidebar/>
            </div>
            <div className="col-12 col-md-10">
                <Fragment>
                <div className="login-clean">
                    <form method="put" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h2 className="sr-only">Update About "{about.title}"</h2>
                        <div className="div-forgot-password">
                            <h3 className="forgot-password-heading">Update About "{about.title}"</h3>
                        </div>
                        <div className="form-group">
                            <h6>Name</h6>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <h6>Description</h6>
                            <textarea
                                type="text" 
                                className="form-control" 
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                height='55px'
                            />
                        </div>
                        <div className="form-group">
                                <button 
                                className="btn btn-primary btn-block" 
                                type="submit"
                                disabled={loading ? true : false}
                            >
                                Update Information
                            </button>
                        </div>
                    </form>
                </div>
                </Fragment>
            </div>
        </div>
    </Fragment>
)
}

export default UpdateAbout
