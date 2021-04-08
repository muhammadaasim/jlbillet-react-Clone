import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <section className="page-sign-section">
            <div className="link-map">
                <div className="container">
                    <div className="links">
                        <Link to="/">Home</Link> / <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
            <div className="page-sign-inner">
                <div className="container">
                <h3 className="page-inner-title">SIGN IN</h3>

                    <div className="row sign-in-row">
                        <div className="col-md-6">
                            <div className="form-field-container">
                                <label>Email Address</label>
                                <input type="email" name="" id="" className="fieldx1 form-control" required />
                            </div>
                            <div className="form-field-container">
                                <label>Password</label>
                                <input type="password" name="" id="" className="fieldx1 form-control" required />
                            </div>
                            <div className="submit-btn-container">
                                <input type="submit" className="submit-btn-1x" value="Sign in" />
                                <a href="#" className="forget-pass">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sign-in-details">
                                <p className="sign-title">New Customer?</p>
                                <p className="sign-list-title">Create an account with us and you'll be able to:</p>
                                <ul className="sign-list">
                                    <li>Check out faster</li>
                                    <li>Save multiple shipping addresses</li>
                                    <li>Access your order history</li>
                                    <li>Track new orders</li>
                                    <li>Save items to your Wish List</li>
                                </ul>
                                <Link to="/createaccount" className="primary-btn-x large-btn">Create Account </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
