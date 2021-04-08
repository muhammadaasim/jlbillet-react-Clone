import React from 'react'
import { Link } from 'react-router-dom'
const CreateAccount = () => {
    return (
        <section className="create-account">
            <div className="link-map">
                <div className="container">
                    <div className="links">
                        <Link to="/">Home</Link> / <Link to="/createaccount">Create Account</Link>
                    </div>
                </div>
            </div>
            <div className="create-account-inner">
                <div className="container">
                    <h3 className="page-inner-title">NEW ACCOUNT</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="account-form">
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Email Address</label>
                                                <input type="email" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Password</label>
                                                <input type="password" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Confirm Password</label>
                                                <input type="password" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Country</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>First Name</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Last Name</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Address Line 1</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Address Line 2</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Company Name</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>City</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>State/Province</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Zip/Postcode</label>
                                                <input type="number" name="" id="" className="fieldx1 form-control"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Phone Number</label>
                                                <input type="tel" name="" id="" className="fieldx1 form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6"></div>
                                        <div className="col-md-12">
                                            <div className="submit-btn-container">
                                                <input type="submit" className="submit-btn-1x" value="Crate Account" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateAccount
