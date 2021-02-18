import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import '../../css/Sidebar-Menu.css'
import '../../css/Sidebar-Menu-1.css'
import '../../css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateAbout, getSingleAbout, clearErrors } from '../../actions/websiteActions'
import { UPDATE_ABOUT_RESET } from '../../constants/websiteConstants'
import { INSIDE_DASHBOARD_TRUE } from '../../constants/dashboardConstants'

const UpdateAbout = ({ match, history }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, about } = useSelector(state => state.aboutDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.website);

    const aboutId = match.params.id

    const [isToggled, setToggled] = useState('false')
    
    const handleToggle = () => {
        setToggled(!isToggled)
    }

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
        
        dispatch({
            type: INSIDE_DASHBOARD_TRUE
        })
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
                        <div className="login-clean">
                            <a className="btn btn-link" role="button" id="menu-toggle" onClick={handleToggle} style={{marginTop: '-150px'}}>
                                <i className="fa fa-bars" style={{"color": "var(--gray-dark)"}}></i>
                            </a>
                            <form method="put" onSubmit={submitHandler} encType='multipart/form-data' style={{maxWidth: '500px'}}>
                                <h2 className="sr-only">Update About "{about.title}"</h2>
                                <div className="div-forgot-password">
                                    <h3 className="forgot-password-heading">Update About "{about.title}"</h3>
                                </div>
                                <div className="form-group">
                                    <h6>Name</h6>
                                    <textarea 
                                        type="text" 
                                        className="form-control" 
                                        name="title"
                                        value={title}
                                        style={{width: '100%'}}
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
                                        style={{width: '100%', height: '250px'}}
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
            </div>
    </Fragment>
)
}

export default UpdateAbout
