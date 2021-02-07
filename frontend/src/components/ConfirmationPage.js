import React, { Fragment, useEffect } from 'react'
import '../confirmationpage.css'
import '../contact.css'
import '../bootstrap.min.css'
import '../fonts/font-awesome.min.css'

import MetaData from './layout/MetaData'

const ConfirmationPage = () => {
    return (
        <Fragment>
            <MetaData title={'Form Sent!'}/>
            <Fragment>
                <section class="contact-form-section">
                    <h1>
                        <i class="fa fa-check-circle confirm-icon"></i>
                    </h1>
                    <h1>Form Sent!</h1>
                    <h6 class="congratulations-text">
                        Congratulations! Your inquiry has been sent. A copy of your was sent to your e-mail. We will get back to you soon!<br/>
                    </h6>
                    <a class="back-to-home" href="/">Back to Home&nbsp;<i class="fa fa-angle-right"></i></a>
                </section>
            </Fragment>
        </Fragment>
    )
}

export default ConfirmationPage
