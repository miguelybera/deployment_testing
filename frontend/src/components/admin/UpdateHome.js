import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from  'react-redux'
import { updateHome, getHomeDetails, clearErrors } from './../../actions/websiteActions'
import { UPDATE_HOME_RESET } from '../../constants/websiteConstants'

const UpdateHome = ( { history } ) => {

    const [titleBackground, setTitleBackground] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage1, setProductImage1] = useState('');
    const [productImage2, setProductImage2] = useState('');
    const [servicesDescription, setServicesDescription] = useState('');
    const [servicesBackground, setServicesBackground] = useState('');
    
    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, home, } = useSelector(state => state.getHome) //get website detials
    const { loading, error: updateError, isUpdated } = useSelector(state => state.website);

    useEffect(() => {

        dispatch(getHomeDetails())
        //setProductDescription(home.productDescription)
        //setServicesDescription(home.servicesDescription)

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(updateError){
            alert.error(updateError);
            dispatch(clearErrors());
        }

        if(isUpdated) {
            history.push('/');
            alert.success('Home updated successfully.')

            dispatch({
                type: UPDATE_HOME_RESET
            })
        }
    }, [dispatch, error, alert, isUpdated, updateError, home, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('productDescription', productDescription);
        formData.set('servicesDescription', servicesDescription);

        dispatch(updateHome(formData));
    }

    return (
        <Fragment>
            <MetaData title={'Update Home'}/>
            <Fragment>
                <div class="login-clean">
                    <form method="put" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h2 class="sr-only">Update Homepage</h2>
                        <div class="div-forgot-password">
                            <h3 class="forgot-password-heading">Update Homepage </h3>
                        </div>
                        <div class="form-group">
                            <h6>Main Background</h6>
                            <input 
                                type="file" 
                                id="user_avatar" 
                                name="user_avatar" 
                                accept="image/*"
                            />
                        </div>
                        <div class="form-group">
                            <h6>Product Description</h6>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="productDescription" 
                                name="productDescription" 
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <h6>Product Image (Left)</h6>
                            <input 
                                type="file" 
                                id="user_avatar" 
                                name="user_avatar" 
                                accept="image/*"
                            />
                        </div>
                        <div class="form-group">
                            <h6>Product Image (Right)</h6>
                            <input
                                type="file" 
                                id="user_avatar" 
                                name="user_avatar" 
                                accept="image/*"
                            />
                        </div>
                        
                        <div class="form-group">
                            <h6>Services Description</h6>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="servicesDescription" 
                                name="servicesDescription" 
                                value={servicesDescription}
                                onChange={(e) => setServicesDescription(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <h6>Services Background</h6>
                            <input
                                type="file" 
                                id="user_avatar" 
                                name="user_avatar" 
                                accept="image/*"
                            />
                        </div>
                        <div class="form-group">
                            <button 
                                class="btn btn-primary btn-block" 
                                type="submit"
                                disabled={loading ? true : false}
                            >
                                Update Home
                            </button>
                        </div>
                    </form>
                </div>
            </Fragment>
        </Fragment>
    )
}

export default UpdateHome
