import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from  'react-redux'
import { useAlert } from 'react-alert'
import MetaData from '../layout/MetaData'
import { register, clearErrors } from './../../actions/userActions'
import './../../forms.css'
import { set } from 'mongoose'

const Register = ({history}) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        contactNumber: '',
        password: ''
    })

    const { name, email, contactNumber, password } = user;
    const [ avatar, setAvatar ] = useState('');
    const [ avatarPreview, setAvatarPreview ] = useState('/images/default_avatar.png')
 
    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {


        if(error){

            alert.error(error);
            dispatch(clearErrors);

        }
    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        
        formData.set('name', name);
        formData.set('email', email);
        formData.set('contactNumber', contactNumber);
        formData.set('password', password);
        formData.set('avatar', avatar);
        
        dispatch(register(formData));
    }

    const onChange = e => {
        if(e.target.name === 'avatar') {
            const reader = new FileReader();

            reader.onload = () => {
                if(reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0]);
        }
        else {
            setUser({ ...user, [e.target.name]: e.target.defaultValue})
        }
    }

    return (
        <Fragment>
            <MetaData title={'Register'}/>
            <div className="login-clean">
                <form method="post" onSubmit={submitHandler} encType='multipart/form-data'>
                    <h2 className="sr-only">Register New User</h2>
                    <div className="div-forgot-password">
                        <h3 className="forgot-password-heading">Register New User</h3>
                    </div>
                    <div className="form-group">
                        <h6>Name</h6>
                        <input 
                            type="text"
                            className="form-control"
                            name="user_fullname"
                            defaultValue={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <h6>Email</h6>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="user_email"
                            defaultValue={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <h6>Contact Number</h6>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="user_number" 
                            defaultValue={contactNumber}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <h6>Password</h6>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="user_password"
                            defaultValue={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <h6>Avatar</h6>
                        <figure className='mr-3 item-rtl'>
                            <img 
                                src={avatarPreview}
                                className='rounded-circle small-avatar'
                                alt='Avatar Preview'
                            />
                        </figure>
                        <input 
                            type="file" 
                            id="user_avatar" 
                            name="user_avatar" 
                            accept="images/*"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            className="btn btn-primary btn-block"
                            type="submit"
                            disabled={ loading ? true : false}
                        >Register</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Register
