import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateHome, getHomeDetails, clearErrors } from '../../actions/websiteActions'
import { UPDATE_HOME_RESET } from '../../constants/websiteConstants'

const UpdateHome = ({history}) => {
    
    const [productDescription, setProductDescription] = useState('')
    const [servicesDescription, setServicesDescription] = useState('')
    const [titleBackground, setTitleBackground] = useState('')
    const [servicesBackground, setServicesBackground] = useState('')
    const [productImageLeft, setProductImageLeft] = useState('')
    const [productImageRight, setProductImageRight] = useState('')
    
    //image previews
    const [titleBgPreview, setTitleBgPreview] = useState('')
    const [servicesBgPreview, setServicesBgPreview] = useState('')
    const [prodImgLeftPreview, setProdImgLeftPreview] = useState('')
    const [prodImgRightPreview, setProdImgRightPreview] = useState('')
    
    //old images
    const [oldTitleBg, setOldTitleBg] = useState('')
    const [oldServicesBg, setOldServicesBg] = useState('')
    const [oldProdImageLeft, setOldProdImageLeft] = useState('')
    const [oldProdImageRight, setOldProdImageRight] = useState('')
    
    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, homePage } = useSelector(state => state.homeDetails) 
    const { loading, error: updateError, isUpdated } = useSelector(state => state.home)

    let var_titleBackground, var_servicesBackground, var_productImageLeft, var_productImageRight = ""

    if(homePage.titleBackground){
        var_titleBackground = homePage.titleBackground.url
    } 
    // else {
    //     var_titleBackground = "https://res.cloudinary.com/agiletech3itf/image/upload/v1613009941/avatars/y0k3r3kes5wovvrefnvw.jpg"
    // }

    if(homePage.servicesBackground){
        var_servicesBackground = homePage.servicesBackground.url
    } 
    // else {
    //     var_servicesBackground = "https://res.cloudinary.com/agiletech3itf/image/upload/v1613009941/avatars/y0k3r3kes5wovvrefnvw.jpg"
    // }

    if(homePage.productImageLeft){
        var_productImageLeft = homePage.productImageLeft.url
    } 
    // else {
    //     var_productImageLeft = "https://res.cloudinary.com/agiletech3itf/image/upload/v1613009941/avatars/y0k3r3kes5wovvrefnvw.jpg"
    // }

    if(homePage.productImageRight){
        var_productImageRight = homePage.productImageRight.url
    } 
    // else {
    //     var_productImageRight = "https://res.cloudinary.com/agiletech3itf/image/upload/v1613009941/avatars/y0k3r3kes5wovvrefnvw.jpg"
    // }

    
    useEffect(() => {

        if(homePage){
            setProductDescription(homePage.productDescription)
            setServicesDescription(homePage.servicesDescription)
            setTitleBgPreview(var_titleBackground)
            setServicesBgPreview(var_servicesBackground)
            setProdImgLeftPreview(var_productImageLeft)
            setProdImgRightPreview(var_productImageRight)
        }else{
            dispatch(getHomeDetails())
        }

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if(updateError) {
            alert.error(updateError);

            history.push('/dashboard')
            dispatch(clearErrors())
        }

        if(isUpdated) {
            history.push('/dashboard')
            alert.success('Home updated successfully.');

            dispatch({
                type: UPDATE_HOME_RESET
            })
        }

    }, [dispatch, alert, error, history, updateError, isUpdated, homePage])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('productDescription', productDescription);
        formData.set('servicesDescription', servicesDescription);
        formData.set('titleBackground', titleBackground);
        formData.set('servicesBackground', servicesBackground);
        formData.set('productImageLeft', productImageLeft);
        formData.set('productImageRight', productImageRight);

        dispatch(updateHome(formData));
    }

    const changeTitleBg = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2){
                setTitleBgPreview(reader.result)
                setTitleBackground(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])
    }
    
    const changeProdImgLeft = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2){
                setProdImgLeftPreview(reader.result)
                setProductImageLeft(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])
    }

    const changeProdImgRight = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2){
                setProdImgRightPreview(reader.result)
                setProductImageRight(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])
    }

    const changeServicesBg = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2){
                setServicesBgPreview(reader.result)
                setServicesBackground(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <Fragment>
            <MetaData title={'Update Home'}/>
            <div className="">
                {loading ? <Loader/> : (
                    <Fragment>
                    <div className="login-clean">
                        <form method="put" onSubmit={submitHandler} encType='multipart/form-data'  style={{width: '90%'}}>
                            <h2 className="sr-only">Update Homepage</h2>
                            <div className="div-forgot-password">
                                <h3 className="forgot-password-heading">Update Homepage </h3>
                            </div>
                            <div className="form-group">
                                <h6>Main Background</h6>
                                <figure className='mr-3 item-rtl'>
                                    <img 
                                        src={titleBgPreview}
                                        className='small-avatar'
                                        alt='Main Background Preview'
                                    />
                                </figure>
                                <input 
                                    type="file" 
                                    id="titleBackground" 
                                    name="titleBackground" 
                                    accept="images/*"
                                    onChange={changeTitleBg}
                                />
                            </div>
                            <div className="form-group">
                                <h6>Product Description</h6>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="productDescription" 
                                    name="productDescription" 
                                    value={productDescription}
                                    onChange={(e) => setProductDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <h6>Product Image (Left)</h6>
                                <figure className='mr-3 item-rtl'>
                                    <img 
                                        src={prodImgLeftPreview}
                                        className='small-avatar'
                                        alt='Product Image Left Preview'
                                    />
                                </figure>
                                <input 
                                    type="file" 
                                    id="productImageLeft" 
                                    name="productImageLeft" 
                                    accept="images/*"
                                    onChange={changeProdImgLeft}
                                />
                            </div>
                            <div className="form-group">
                                <h6>Product Image (Right)</h6>
                                <figure className='mr-3 item-rtl'>
                                    <img 
                                        src={prodImgRightPreview}
                                        className='small-avatar'
                                        alt='Avatar Preview'
                                    />
                                </figure>
                                <input 
                                    type="file" 
                                    id="productImageRight" 
                                    name="productImageRight" 
                                    accept="images/*"
                                    onChange={changeProdImgRight}
                                />
                            </div>
                            
                            <div className="form-group">
                                <h6>Services Description</h6>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="servicesDescription" 
                                    name="servicesDescription" 
                                    value={servicesDescription}
                                    onChange={(e) => setServicesDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <h6>Services Background</h6>
                                <figure className='mr-3 item-rtl'>
                                    <img 
                                        src={servicesBgPreview}
                                        className='small-avatar'
                                        alt='Avatar Preview'
                                    />
                                </figure>
                                <input 
                                    type="file" 
                                    id="servicesBackground" 
                                    name="servicesBackground" 
                                    accept="images/*"
                                    onChange={changeServicesBg}
                                />
                            </div>
                            <div className="form-group">
                                <button 
                                    className="btn btn-primary btn-block" 
                                    type="submit"
                                    disabled={loading ? true : false}
                                >
                                    Update Home
                                </button>
                            </div>
                        </form>
                    </div>
                </Fragment>
                )}
            </div>
        </Fragment>
    )
}

export default UpdateHome