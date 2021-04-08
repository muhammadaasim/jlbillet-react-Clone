import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div>
            <section className="page-contact-section">
                <div className="link-map">
                    <div className="container">
                        <div className="links">
                            <Link to="/">Home</Link> / <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="page-contact-inner">
                    <div className="container">
                        <h3 className="page-inner-title">CONTACT</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="contact-content">
                                    <p className="parax">Have questions? Comments or suggestions? Let us know what's on your
                                    mind.</p>
                                    <p className="parax">Hours of operation: Monday - Friday, 8am - 5pm PST</p>
                                    <p className="parax">Office: 619-800-1751</p>
                                    <p className="parax">Shop: NOT open to the public, available by appointment only.</p>
                                    <p className="parax">Mailing address: 12260 Crosthwaite Circle, Poway, CA 92064</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <form action="" className="contact-form-x1">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Full Name</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Phone Number</label>
                                                <input type="tel" name="" id="" className="fieldx1 form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Email Address</label>
                                                <input type="email" name="" id="" className="fieldx1 form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Company Name</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-field-container">
                                                <label>Comments/Questions</label>
                                                <textarea name="" id="" cols="30" rows="10"
                                                    className="fieldx1 form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="submit-btn-container">
                                                <input type="submit" className="submit-btn-1x" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact
