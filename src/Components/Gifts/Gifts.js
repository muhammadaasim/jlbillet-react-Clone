import React from 'react'
import { Link } from 'react-router-dom'
const Gifts = () => {
    return (
        <section className="page-gift-x1">
            <div className="gift-x1-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form action="" className="contact-form-x1">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-field-container">
                                            <label>Your Name</label>
                                            <input type="text" name="" id="" className="fieldx1 form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-field-container">
                                            <label>Your Email</label>
                                            <input type="email" name="" id="" className="fieldx1 form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-field-container">
                                            <label>Recipient's Names</label>
                                            <input type="text" name="" id="" className="fieldx1 form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-field-container">
                                            <label>Recipient's Email</label>
                                            <input type="email" name="" id="" className="fieldx1 form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-field-container">
                                            <label>Amount</label>
                                            <input type="number" name="" id="" className="fieldx1 form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="check-container">
                                            <p><input type="checkbox" name="" id="" /> I understand that Gift
                                                Certificates
                                                expire after 360 days</p>
                                            <p><input type="checkbox" name="" id="" /> I agree that Gift Certificates
                                                are
                                                nonrefundable</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label>Optional Message </label>
                                        <textarea name="" id="" cols="30" rows="10"
                                            className="fieldx1 form-control"></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <label>Gift Certificate Theme REQUIRED</label>
                                        <div className="form-check-container">
                                            <p><input type="radio" name="" id="" /> Birthday</p>
                                            <p><input type="radio" name="" id="" /> Boy</p>
                                            <p><input type="radio" name="" id="" /> Celebration</p>
                                            <p><input type="radio" name="" id="" /> Christmas</p>
                                            <p><input type="radio" name="" id="" /> General</p>
                                            <p><input type="radio" name="" id="" /> Girl</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="submit-btn-container two-btn">
                                            <button className="t-btn">Preview</button>
                                            <input type="submit" className="submit-btn-1x"
                                                value="add gift certificate to cart" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gifts
