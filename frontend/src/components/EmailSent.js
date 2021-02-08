import React, { Fragment, useEffect } from 'react'
import '../confirmationpage.css'
import '../contact.css'
import '../bootstrap.min.css'
import '../fonts/font-awesome.min.css'

import MetaData from './layout/MetaData'

const ConfirmationPage = () => {
    return (
        <Fragment>
            <MetaData title={'Email Sent!'}/>
            <Fragment>
                <section className="contact-form-section">
                    <h1>
                        <i className="fa fa-check-circle confirm-icon"></i>
                    </h1>
                    <h1>Email Sent!</h1>
                    <h6 className="congratulations-text">
                        Check your email for the link to reset your password. If you can't find it, you might have to check your spam.<br/>
                    </h6>
                    <a className="back-to-home" href="/">Back to Home&nbsp;<i className="fa fa-angle-right"></i></a>
                </section>
            </Fragment>
        </Fragment>
    )
}

export default ConfirmationPage
