import React, { Fragment, useEffect} from 'react'
import '../../individual-product.css'
import { useDispatch, useSelector } from  'react-redux'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import Loader from '../layout/Loader'
import { useAlert } from 'react-alert'
import MetaData from '../layout/MetaData'

const ProductDetails = ( { match }) => {

    const dispatch = useDispatch();
    const { loading, error, product } = useSelector(state => state.productDetails)
    const alert = useAlert();

    useEffect(() => {

        dispatch(getProductDetails(match.params.id));

        if(error){

            alert.error(error)
            dispatch(clearErrors())

        }

    }, [dispatch, alert, error, match.params.id])

    return (
        <Fragment>
            {loading ? <Loader/> : (
                <Fragment>
                    <section className="individual-product-section">
                        <div className="row individual-products">
                            <div className="col-sm-5 col-md-5 col-lg-5 offset-lg-0"><img className="product-image" src={product.images[0].url}/></div>
                            <div className="col-sm-7 col-md-7 col-lg-7 offset-lg-0">
                                <h3 className="individual-product-name">${product.name}</h3><a className="link-back" href="/our-products">Go back&nbsp;<i className="fa fa-angle-right"></i>&nbsp;</a>
                            </div>
                        </div>
                    </section>
                </Fragment>
            )}
        </Fragment>
    )
}

export default ProductDetails
