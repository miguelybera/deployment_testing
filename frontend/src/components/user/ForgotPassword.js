import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from  'react-redux'
import { forgotPassword, clearErrors } from './../../actions/userActions'

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, loading, message } = useSelector(state => state.forgotPassword);
    
    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());

        }

        if(message){
            alert.success(message);
        }

    }, [dispatch, alert, error, message])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('email', email);

        dispatch(forgotPassword(formData));
    }

    const onChange = e => {
        const reader = new FileReader();

        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <Fragment>
            <MetaData title={'Forgot Password'}/>
            <div className="login-clean">
                <form onSubmit={submitHandler}>
                    <h2 className="sr-only">Forgot Password</h2>
                    <div className="div-forgot-password">
                        <h3 className="forgot-password-heading">Forgot password</h3>
                    </div>
                    <div className="form-group">
                        <h6>Enter email</h6>
                        <input 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            className="btn btn-primary btn-block"
                            type="submit"
                            disabled={ loading ? true : false}
                        >Send Email</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default ForgotPassword
