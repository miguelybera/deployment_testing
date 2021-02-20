import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from  'react-redux'
import { updatePassword, clearErrors } from './../../actions/userActions'
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants'

const UpdatePassword = ( { history }) => {
    
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');


    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated, loading } = useSelector(state => state.user);
    
    useEffect(() => {

        if(error){
            alert.error(error);
            dispatch(clearErrors());

        }

        if(isUpdated){
            alert.success('Password updated successfully');

            history.push('/admin/me')

            dispatch({
                type: UPDATE_PASSWORD_RESET
            })
        }

    }, [dispatch, alert, error, history, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('oldPassword', oldPassword);
        formData.set('newPassword', newPassword);

        dispatch(updatePassword(formData));
    }

    return (
        <Fragment>
            <MetaData title={'Change Password'}/>
            <div className="login-clean" style={{paddingTop: '65px'}}>
                <form method="post" onSubmit={submitHandler}>
                    <h2 className="sr-only">New Password</h2>
                    <div className="div-forgot-password">
                        <h3 className="forgot-password-heading">New Password</h3>
                    </div>
                    <div className="form-group">
                        <h6>Old Password</h6>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="oldPassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <h6>New Password</h6>
                        <input
                            type="password"
                            className="form-control"
                            name="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            className="btn btn-primary btn-block"
                            type="submit"
                            disabled={ loading ? true : false}
                        >Update Password</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default UpdatePassword
