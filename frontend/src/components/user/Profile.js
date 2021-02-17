import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MetaData from './../layout/MetaData'
import Loader from '../layout/Loader'
import '../../css/profile.css'

const Profile = () => {
    
    const { user, loading } = useSelector(state => state.auth)
    
    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'My Profile'} />
                    <section className="profile-section" style={{paddingTop: '65px'}}>
                        <h1>My Profile</h1>
                        <div className="profile-container">
                            <div className="image-container small-width">
                                <img className="profile-picture" alt="user" src={user.avatar.url}/>
                            </div>
                            <div className="info-container small-width">
                                <h3>Full name</h3>
                                <h5>{user.name}</h5>
                                <h3>Role</h3>
                                <h5>{user.role}</h5>
                                <h3>Email Address</h3>
                                <h5>{user.email}</h5>
                                <h3>Contact No.</h3>
                                <h5>{user.contactNumber}</h5>
                            </div>
                            <div className="button-container small-width">
                                <Link className="btn btn-primary" type="button" to="/me/edit-profile">Edit Profile</Link>
                                <Link className="btn btn-primary" type="button" to="/password/update">Change Password</Link>
                            </div>
                        </div>
                    </section>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Profile
