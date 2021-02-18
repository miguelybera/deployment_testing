import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import '../../css/Sidebar-Menu.css'
import '../../css/Sidebar-Menu-1.css'
import '../../css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateFooter, getFooterDetails, clearErrors } from '../../actions/websiteActions'
import { UPDATE_FOOTER_RESET } from '../../constants/websiteConstants'

const UpdateFooter = ({history}) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const [footerTitle, setFooterTitle] = useState('')
    const [footerDescription, setFooterDescription] = useState('')
    const [addressInfo, setAddressInfo] = useState('')
    const [phoneInfo, setPhoneInfo] = useState('')
    const [cellphoneInfo, setCellphoneInfo] = useState('')
    const [emailInfo, setEmailInfo] = useState('')

    const { error, footerInfo } = useSelector(state => state.footerDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.website);

    const [isToggled, setToggled] = useState('false')

    useEffect(() => {
        if(footerInfo){
            setFooterTitle(footerInfo.footerTitle)
            setFooterDescription(footerInfo.footerDescription)
            setAddressInfo(footerInfo.addressInfo)
            setPhoneInfo(footerInfo.phoneInfo)
            setCellphoneInfo(footerInfo.cellphoneInfo)
            setEmailInfo(footerInfo.emailInfo)
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
            history.push('/admin/settings');
            alert.success('Footer updated successfully.')

            dispatch({
                type: UPDATE_FOOTER_RESET
            })
        }
    }, [dispatch, alert, error, history, updateError, isUpdated])
    
    const handleToggle = () => {
        setToggled(!isToggled)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('footerTitle', footerTitle);
        formData.set('footerDescription', footerDescription);
        formData.set('addressInfo', addressInfo);
        formData.set('phoneInfo', phoneInfo);
        formData.set('cellphoneInfo', cellphoneInfo);
        formData.set('emailInfo', emailInfo);

        dispatch(updateFooter(formData));
    }

    return (<Fragment>
        <MetaData title={'Update Footer'}/>
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
                    <Fragment>
                        <div className="login-clean">
                            <a className="btn btn-link" role="button" id="menu-toggle" onClick={handleToggle} style={{marginTop: '-150px'}}>
                                <i className="fa fa-bars" style={{"color": "var(--gray-dark)"}}></i>
                            </a>
                            <form method="put" onSubmit={submitHandler} encType='multipart/form-data' style={{maxWidth: '500px'}}>
                                <h2 className="sr-only">Update Footer</h2>
                                <div className="div-forgot-password">
                                    <h3 className="forgot-password-heading">Update Footer</h3>
                                </div>
                                <div className="form-group">
                                    <h6>Footer Title</h6>
                                    <textarea 
                                        type="text" 
                                        className="form-control" 
                                        name="footerTitle"
                                        value={footerTitle}
                                        style={{width: '100%'}}
                                        onChange={(e) => setFooterTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <h6>Footer Description</h6>
                                    <textarea
                                        type="text" 
                                        className="form-control" 
                                        name="footerDescription"
                                        value={footerDescription}
                                        style={{width: '100%', height: '250px'}}
                                        onChange={(e) => setFooterDescription(e.target.value)}
                                        height='55px'
                                    />
                                </div>
                                <div className="form-group">
                                    <h6>Address Info</h6>
                                    <textarea 
                                        type="text" 
                                        className="form-control" 
                                        name="addressInfo"
                                        value={addressInfo}
                                        style={{width: '100%', height: '150px'}}
                                        onChange={(e) => setAddressInfo(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <h6>Phone Info</h6>
                                    <textarea 
                                        type="text" 
                                        className="form-control" 
                                        name="phoneInfo"
                                        value={phoneInfo}
                                        style={{width: '100%'}}
                                        onChange={(e) => setPhoneInfo(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <h6>Cellphone Info</h6>
                                    <textarea 
                                        type="text" 
                                        className="form-control" 
                                        name="cellphoneInfo"
                                        value={cellphoneInfo}
                                        style={{width: '100%'}}
                                        onChange={(e) => setCellphoneInfo(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <h6>Email Info</h6>
                                    <textarea 
                                        type="text" 
                                        className="form-control" 
                                        name="emailInfo"
                                        value={emailInfo}
                                        style={{width: '100%'}}
                                        onChange={(e) => setEmailInfo(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                        <button 
                                        className="btn btn-primary btn-block" 
                                        type="submit"
                                        disabled={loading ? true : false}
                                    >
                                        Update Footer
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

export default UpdateFooter