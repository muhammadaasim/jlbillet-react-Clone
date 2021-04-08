import React from 'react'
import { Link } from 'react-router-dom'
const ForgetPass = () => {
    return (
        <section className="create-account">
            <div className="link-map">
                <div className="container">
                    <div className="links">
                        <Link to="/">Home</Link> / <Link to="/forgetpassword">Forget Password</Link>
                    </div>
                </div>
            </div>
            <div className="create-account-inner" style={{paddingTop:"40px",paddingBottom:"120px"}}>
                <div className="container">
                    <h3 className="page-inner-title">RESET PASSWORD</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="account-form">
                                <p style={{ color: "#ccc", fontSize: "15px" }}>Fill in your email below to request a new password. An email will be sent to the address below containing a link to verify your email address.</p>
                                <form action="" className="balance-form">
                                <p style={{ color: "#ccc" }}>Email Address</p>

                                    <div className="only-field">
                                        <input type="text" required className="form-control" />
                                        <input type="submit" value="RESET PASSWORD" />
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

export default ForgetPass
