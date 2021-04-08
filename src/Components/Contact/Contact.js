import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div>
            <section class="page-contact-section">
                <div className="link-map">
                    <div className="container">
                        <div className="links">
                            <Link to="/">Home</Link> / <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
                <div class="page-contact-inner">
                    <div class="container">
                        <h3 class="page-inner-title">CONTACT</h3>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="contact-content">
                                    <p class="parax">Have questions? Comments or suggestions? Let us know what's on your
                                    mind.</p>
                                    <p class="parax">Hours of operation: Monday - Friday, 8am - 5pm PST</p>
                                    <p class="parax">Office: 619-800-1751</p>
                                    <p class="parax">Shop: NOT open to the public, available by appointment only.</p>
                                    <p class="parax">Mailing address: 12260 Crosthwaite Circle, Poway, CA 92064</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <form action="" class="contact-form-x1">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-field-container">
                                                <label>Full Name</label>
                                                <input type="text" name="" id="" class="fieldx1 form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-field-container">
                                                <label>Phone Number</label>
                                                <input type="tel" name="" id="" class="fieldx1 form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-field-container">
                                                <label>Email Address</label>
                                                <input type="email" name="" id="" class="fieldx1 form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-field-container">
                                                <label>Company Name</label>
                                                <input type="text" name="" id="" class="fieldx1 form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-field-container">
                                                <label>Comments/Questions</label>
                                                <textarea name="" id="" cols="30" rows="10"
                                                    class="fieldx1 form-control"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="submit-btn-container">
                                                <input type="submit" class="submit-btn-1x" />
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
