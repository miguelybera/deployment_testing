import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from  'react-redux'
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'

const UpdateHome = ( { history } ) => {

    const [titleBackground, setTitleBackground] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage1, setProductImage1] = useState('');
    const [productImage2, setProductImage2] = useState('');
    const [servicesDescription, setServicesDescription] = useState('');
    const [servicesBackground, setServicesBackground] = useState('');
    
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user);
    
    useEffect(() => {
        console.log(user)
        if(user) {
            
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

        dispatch(updateProfile(formData));
    }

    const onChange = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2){
            }
        }

        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <Fragment>
            <MetaData title={'Update Home'}/>
            <Fragment>
                <div class="login-clean">
                    <form method="post">
                        <h2 class="sr-only">Update Homepage</h2>
                        <div class="div-forgot-password">
                            <h3 class="forgot-password-heading">Update Homepage </h3>
                        </div>
                        <div class="form-group">
                            <h6>Main Background</h6><input type="file" id="user_avatar" name="user_avatar" accept="image/*"/>
                        </div>
                        <div class="form-group">
                            <h6>Product Description</h6><input type="text" class="form-control" name="user_fullname" placeholder />
                        </div>
                        <div class="form-group">
                            <h6>Product Image (Left)</h6><input type="file" id="user_avatar" name="user_avatar" accept="image/*"/>
                        </div>
                        <div class="form-group">
                            <h6>Product Image (Right)</h6><input type="file" id="user_avatar" name="user_avatar" accept="image/*"/>
                        </div>
                        
                        <div class="form-group">
                            <h6>Services Description</h6><input type="text" class="form-control" name="user_fullname" placeholder />
                        </div>
                        <div class="form-group">
                            <h6>Services Background</h6><input type="file" id="user_avatar" name="user_avatar" accept="image/*"/>
                        </div>
                        <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Update Home</button></div>
                    </form>
                </div>
            </Fragment>
        </Fragment>
    )
}

export default UpdateHome
