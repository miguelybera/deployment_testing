import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layout/MetaData'

import '../contact.css'
import '../bootstrap.min.css'
import '../fonts/font-awesome.min.css'

const Contact = () => {
    return (
        <Fragment>
            <MetaData title={'Contact Us'}/>
            <Fragment>
                <form>
                    <div className="contact-container">
                        <div className="contact-header">
                            <h1 style={{textAlign: 'center'}}>Contact Us</h1>
                        </div>
                        <div className="labelname">
                            <label>Your Name</label>
                        </div>
                        <div className="firstname">
                            <input name="firstname" type="text" className="feedback-input" placeholder="First Name" id="firstname"/>
                        </div>
                        <div className="lastname">
                            <input name="lastname" type="text" className="feedback-input" placeholder="Last Name" id="lastname"/>
                        </div>
                        <div className="labelcompany">
                            <label>Your Company Name</label>
                        </div>
                        <div className="companyname">
                            <input name="companyname" type="text" className="feedback-input" placeholder="Company Name" id="companyname"/>
                        </div>
                        <div className="labelposition">
                            <label>Your Position in Company</label>
                        </div>
                        <div className="position">
                            <input name="position" type="text" className="feedback-input" placeholder="Position" id="position"/>
                        </div>
                        <div className="labelemail">
                            <label>Your Email</label>
                        </div>
                        <div className="email">
                            <input name="email" type="email" className="feedback-input" placeholder="Email" id="email"/>
                        </div>
                        <div className="labelcontact">
                            <label>Your Contact Number</label>
                        </div>
                        <div className="contact">
                            <input name="contactnumber" type="text" className="feedback-input" placeholder="Contact Number" id="contactnumber"/>
                        </div>
                        <div className="labelconcern">
                            <label>Your Concern Type</label>
                        </div>
                        <div className="concern">
                            <select name="concern" className="concern-dropdown" id="concern">
                                <option>         -        </option>
                                <option value="Inquiry">Inquiry</option>
                                <option value="Quotation">Request for Quotation</option>
                                <option value="Other">Other Concerns</option>
                            </select>
                        </div>
                        <div className="labelmessage">
                            <label>Your Message</label>
                        </div>
                        <div className="message">
                            <textarea name="message" className="feedback-input" placeholder="Comment" value="message"></textarea>
                        </div>
                        <div className="submit">
                            <input type="submit" value="SUBMIT"/>
                        </div>
                    </div>
                </form>
            </Fragment>
        </Fragment>
    )
}

export default Contact