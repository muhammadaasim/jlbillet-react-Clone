import React from 'react'
import {Link} from 'react-router-dom'
const Tutorial = () => {
    return (
        <>
            <section className="page-tutorials-section">
                <div className="link-map">
                    <div className="container">
                        <div className="links">
                            <Link to="/">Home</Link> / <Link to="/tutorials">Tutorials</Link>
                        </div>
                    </div>
                </div>
                <div className="page-tutorials-inner">
                    <div className="container">
                        <h3 className="page-inner-title">TUTORIALS</h3>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="tutorial-images-container">
                                    <div className="tutorial-image"><img src="/assets/images/t-1.png" alt="" /></div>
                                    <div className="tutorial-image"><img src="/assets/images/t-2.png" alt="" /></div>
                                    <div className="tutorial-image"><img src="/assets/images/t-3.png" alt="" /></div>
                                    <div className="tutorial-image"><img src="/assets/images/t-4.jpg" alt="" /></div>
                                    <div className="tutorial-image"><img src="/assets/images/t-5.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tutorial
