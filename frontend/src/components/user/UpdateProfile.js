import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from  'react-redux'
import { updateProfile, loadUser, clearErrors } from './../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'

const UpdateProfile = ({ history }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('images/default_avatar.png');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user);
    
    useEffect(() => {
        if(user) {
            setName(user.name);
            setEmail(user.email);
            setContactNumber(user.contactNumber);
            setAvatarPreview(user.avatar.url);
        }

        if(error){
            alert.error(error);
            dispatch(clearErrors());

        }

        if(isUpdated){
            alert.success('User updated successfully');
            dispatch(loadUser());

            history.push('/me')

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, alert, error, history, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('contactNumber', contactNumber);
        formData.set('avatar', avatar);

        dispatch(updateProfile(formData));
    }

    const onChange = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2){
                setAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <Fragment>
            <MetaData title={'Update Profile'}/>
            <div className="login-clean">
                <form method="post" onSubmit={submitHandler}>
                    <h2 className="sr-only">Update Profile</h2>
                    <div className="div-forgot-password">
                        <h3 className="forgot-password-heading">Update Profile</h3>
                    </div>
                    <div className="form-group">
                        <h6>Name</h6>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <h6>Email</h6>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <h6>Contact Number</h6>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="contactNumber"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
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
                        >Update Profile</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default UpdateProfile
