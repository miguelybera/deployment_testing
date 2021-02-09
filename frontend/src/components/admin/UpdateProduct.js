import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct, getProductDetails, clearErrors } from '../../actions/productActions'
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants'

const UpdateProduct = ({match, history}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState('');
    const [imagesPreview, setImagesPreview] = useState([])
    const [oldImages, setOldImages] = useState([]);
    
    const categories = [
        'Category1',
        'Category2',
        'Category3',
        'Category4',
        'Category5',
        'Category6',
        'Category7'
    ]

    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, product, } = useSelector(state => state.productDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.product);

    const productId = match.params.id

    useEffect(() => {

        if(product && product._id !== productId) {
            dispatch(getProductDetails(productId))
        }
        else { 
            setName(product.name)
            setDescription(product.description)
            setCategory(product.category)
            setOldImages(product.images)
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
            history.push('/admin/products');
            alert.success('Product updated successfully.')

            dispatch({
                type: UPDATE_PRODUCT_RESET
            })
        }
    }, [dispatch, error, alert, isUpdated, updateError, product, productId, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('description', description);
        formData.set('category', category);

        images.forEach(image => {
            formData.append('images', image)
        });

        dispatch(updateProduct(product._id, formData));
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])
        setOldImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if(reader.readyState === 2){
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }

    return (
        <Fragment>
            <MetaData title={'New Product'}/>
            <div className="row">
                <div className="col-4 col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-12 col-md-10">
                    <Fragment>
                    <div className="login-clean">
                        <form method="put" onSubmit={submitHandler} encType='multipart/form-data'>
                            <h2 className="sr-only">Update Product</h2>
                            <div className="div-forgot-password">
                                <h3 className="forgot-password-heading">Update Product</h3>
                            </div>
                            <div className="form-group">
                                <h6>Name</h6>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="product_name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <h6>Description</h6>
                                <textarea
                                    type="text" 
                                    className="form-control" 
                                    name="product_name"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    height='55px'
                                />
                            </div>
                            <div className="form-group">
                                <h6>Category</h6>
                                <div className="dropdown show">
                                    <select 
                                        name="category" 
                                        className="product-dropdown" 
                                        id="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <h6>Images</h6>
                                <input 
                                    type="file" 
                                    name="product_images" 
                                    onChange={onChange}
                                    multiple
                                />
                            </div>
                            
                            {oldImages && oldImages.map(img => (
                                <img 
                                    className='mt-3 mr-2'
                                    src={img.url}
                                    alt={img.url}
                                    key={img}
                                    width='55' 
                                    height='52'
                                />

                            ))}

                            {imagesPreview.map(img => (
                                <img 
                                    src={img} 
                                    key={img} 
                                    alt='Images Preview'
                                    className='mt-3 mr-2' 
                                    width='55' 
                                    height='52'
                                />
                            ))}

                            <div className="form-group">
                                    <button 
                                    className="btn btn-primary btn-block" 
                                    type="submit"
                                    disabled={loading ? true : false}
                                >
                                    Update Product
                                </button>
                            </div>
                        </form>
                    </div>
                    </Fragment>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateProduct
