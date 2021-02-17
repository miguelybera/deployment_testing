import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import '../../css/Sidebar-Menu.css'
import '../../css/Sidebar-Menu-1.css'
import '../../css/bootstrap.min.css'
import '../../css/dashboard.css'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts, deleteProduct, clearErrors } from '../../actions/productActions'
import { DELETE_PRODUCT_RESET } from '../../constants/productConstants'

const ProductsList = ( {history} ) => {
    
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, products } = useSelector(state => state.products)
    const { deleteError, isDeleted } = useSelector(state => state.product)

    const [isToggled, setToggled] = useState('false')

    const handleToggle = () => {
        setToggled(!isToggled)
    }

    useEffect(() => {
        dispatch(getAdminProducts());

        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }

        if(deleteError){
            alert.error(deleteError)
            dispatch(clearErrors())
        }

        if(isDeleted){
            alert.success('Product has been deleted successfully.');
            history.push('/admin/products')

            dispatch({
                type: DELETE_PRODUCT_RESET
            })
        }
    }, [dispatch, alert, error, history, isDeleted, deleteError])

    const setProducts = () => {
        const data = { 
            columns: [
                {
                    label: 'Product ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Product Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Category',
                    field: 'category',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions'
                }
            ],
            rows: []
         }

         products.forEach(product => {
             data.rows.push({
                id: product._id,
                name: product.name,
                category: product.category,
                actions: <Fragment>
                            <Link to={`/admin/product/${product._id}`} className='btn btn-primary py-1 px-2'>
                                <i className='fa fa-pencil'></i>
                            </Link>
                            <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteProductHandler(product._id)}>
                                <i className='fa fa-trash'></i>
                            </button>
                        </Fragment>
             })
         })
         return data
    }

    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id))
    }
    
    return (
        <Fragment>
            <MetaData title={'All Products'}/>
            <div id="wrapper" className={isToggled ? "toggled" : null} style={{paddingTop: '65px'}}>
                <div id="sidebar-wrapper" style={{"background": "var(--gray-dark)", "color": "var(--white)"}}>
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">Agile Technodynamics</li>
                        <li> <Link to="/admin/dashboard">Dashboard</Link></li>
                        <li> <Link to="/admin/inquiries">Inquiries</Link></li>
                        <li> <Link to="/admin/quotations">Appointment</Link></li>
                        <li> <Link to="/admin/others">Other Concerns</Link></li>
                        <li> <Link to="/admin/archives">Archives</Link></li>
                        <li> <Link to="/admin/trash">Trash</Link></li>
                        <li> <Link to="/admin/products">Products</Link></li>
                        <li> <Link to="/admin/settings">Settings</Link></li>
                    </ul>
                </div>
                <div className="page-content-wrapper">
                    <div className="container-fluid">
                        <a className="btn btn-link" role="button" id="menu-toggle" onClick={handleToggle}>
                            <i className="fa fa-bars" style={{"color": "var(--gray-dark)"}}></i>
                        </a>
                        <Fragment>
                            <h1 className="mt-3 mb-3">
                                All Products
                            </h1>
                            <Link to='/admin/newProduct'>
                                <button className='btn btn-dark btn-sm text-capitalize mb-5'>
                                    Add New Product
                                </button>
                            </Link>
                            {loading ? <Loader/> : (
                                <MDBDataTable
                                    data={setProducts()}
                                    className='px-10 table-sm'
                                    bordered
                                    striped
                                    hover
                                    entries={5}
                                />
                            )}
                        </Fragment>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsList
