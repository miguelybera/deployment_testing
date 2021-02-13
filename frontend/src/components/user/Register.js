import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from  'react-redux'
import { register, clearErrors } from './../../actions/userActions'

const Register = ( { history } ) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        contactNumber: '',
        password: '',
        confirmPassword: ''
    })

    const { name, email, contactNumber, password, confirmPassword } = user;
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('images/default_avatar.png');
    const [useDefaultImage, setDefaultImage] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {
        if(isAuthenticated) {
            history.push('/')
        }

        if(error){
            alert.error(error);
            dispatch(clearErrors());

        }
    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);
        formData.set('contactNumber', contactNumber);
        formData.set('avatar', avatar);
        formData.set('useDefaultImage', useDefaultImage)

        dispatch(register(formData));
    }

    const onChange = e => {
        
        if(e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if(reader.readyState === 2){
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else if(e.target.name === 'useDefaultImage') {
            let chkbox = document.getElementById('useDefaultImage')

            if(chkbox.checked == true) {
                setDefaultImage(true)
            }
            else{
                setDefaultImage(false)
            }
        }
        else {
            setUser({
                ...user,
                [e.target.name]: e.target.value
            })
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
                            name="name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <h6>Email</h6>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <h6>Contact Number</h6>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="contactNumber" 
                            value={contactNumber}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <h6>Password</h6>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <h6>Confirm Password</h6>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type='checkbox'
                            id='useDefaultImage'
                            name='useDefaultImage'
                            value={useDefaultImage}
                            onChange={onChange}/>
                            &nbsp;Use default image
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
                            id="avatar" 
                            name="avatar" 
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
