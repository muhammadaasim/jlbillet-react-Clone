import React from 'react'
import {Link} from 'react-router-dom'
const Gallery = () => {
    return (
        <section className="page-tutorials-section">
            <div className="link-map">
                <div className="container">
                    <div className="links">
                        <Link to="/">Home</Link> / <Link to="/gallery">Gallery</Link>
                    </div>
                </div>
            </div>
            <div className="page-tutorials-inner">
                <div className="container">
                    <h3 className="page-inner-title">Gallery</h3>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="tutorial-images-container">
                                <div className="tutorial-image"><img src="assets/images/g-1.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-2.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-3.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-4.jpg" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-5.jpg" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-6.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-7.jpg" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-8.jpeg" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-9.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-10.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-11.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-12.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-13.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-14.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-15.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-16.png" alt="" /></div>
                                <div className="tutorial-image"><img src="assets/images/g-7.jpeg" alt="" /></div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
