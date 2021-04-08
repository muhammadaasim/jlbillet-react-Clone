import React from 'react'
import { Link } from 'react-router-dom'
const Dealers = () => {
    return (
        <section className="page-dealer-section">
            <div className="link-map">
                <div className="container">
                    <div className="links">
                        <Link to="/">Home</Link> / <Link to="/dealers">Dealers</Link>
                    </div>
                </div>
            </div>
            <div className="page-dealer-inner">
                <div className="container">
                    <h3 className="page-inner-title">DEALERS</h3>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="dealer-content">
                                <h4 className="dealer-heading">JL Billet Dealers & Distributors</h4>
                                <div className="dealers-info">
                                    <h4 className="info-title">Optics Planet</h4>
                                    <p className="info-address">3150 Commercial Avenue
                                    Northbrook, IL 60062</p>
                                    <p className="info-phone"><a href="tel:(800) 504-5897
                                    ">(800) 504-5897 </a></p>
                                    <p className="info-email"><a href="#">opticsplanet.com/jl-billet-brand</a></p>
                                </div>
                                <div className="dealers-info">
                                    <h4 className="info-title">Rainier Arms *</h4>
                                    <p className="info-address">2504 Auburn Way N
                                    Auburn, WA 98002</p>
                                    <p className="info-phone"><a href="tel:(253) 218-2999">(253) 218-2999</a></p>
                                    <p className="info-email"><a href="rainierarms.com">rainierarms.com</a></p>
                                </div>
                                <div className="dealers-info">
                                    <h4 className="info-title">Firearms Unknown - National City</h4>
                                    <p className="info-address">416 National City Blvd. Unit B
                                    National City, CA 91950</p>
                                    <p className="info-phone"><a href="tel:(619) 507-3174">(619) 507-3174</a></p>
                                    <p className="info-email"><a href="firearmsunknown.com">firearmsunknown.com</a></p>
                                </div>
                                <div className="dealers-info">
                                    <h4 className="info-title">Gunfighter Tactical</h4>
                                    <p className="info-address">6904 Miramar Rd
                                    San Diego, CA 92121</p>
                                    <p className="info-phone"><a href="tel:(858) 547-9999">(858) 547-9999</a></p>
                                    <p className="info-email"><a href="gunfightertactical.com">gunfightertactical.com</a>
                                    </p>
                                </div>
                                <div className="dealers-info">
                                    <h4 className="info-title">Firearms Unknown - Oceanside</h4>
                                    <p className="info-address">1906 Oceanside Blvd. Suite K
                                    Oceanside, CA 92054</p>
                                    <p className="info-phone"><a href="tel:(760) 730-5599">(760) 730-5599</a></p>
                                    <p className="info-email"><a href="firearmsunknown.com">firearmsunknown.com</a></p>
                                </div>
                                <div className="dealers-info">
                                    <h4 className="info-title">Atibal Sights</h4>
                                    <p className="info-address">15446 W. Eugene Terrace
                                    Surprise, AZ 85379</p>
                                    <p className="info-phone"><a href="tel:"></a></p>
                                    <p className="info-email"><a href="atibalsights.com">atibalsights.com</a></p>
                                </div>
                                <div className="dealers-info">
                                    <h4 className="info-title">North County Firearms </h4>
                                    <p className="info-address">120 N. Pacific St. Suite C1
                                    San Marcos, CA 92069</p>
                                    <p className="info-phone"><a href="tel:(760) 798-7300">(760) 798-7300</a></p>
                                    <p className="info-email"><a href="northcountyfirearms.com">northcountyfirearms.com</a>
                                    </p>
                                </div>
                                <div className="dealers-info">
                                    <h4 className="info-title">UM Tactical *</h4>
                                    <p className="info-address">1955 10th Ave North
                                    Lake Worth, Florida 33461</p>
                                    <p className="info-phone"><a href="tel:">866.979.4GUN</a></p>
                                    <p className="info-email"><a href="umtactical.com">umtactical.com</a></p>
                                </div>
                                <div className="dealers-info">
                                    <h4 className="info-title">Tridentis Tactical *</h4>
                                    <p className="info-address">6195 Lake Murray Blvd
                                    La Mesa, CA 91942</p>
                                    <p className="info-phone"><a href="tel:(619) 303-8259">(619) 303-8259</a></p>
                                    <p className="info-email"><a href="tridentistactical.com">tridentistactical.com</a></p>
                                </div>
                                <div className="more-info">
                                    <div className="cs-title">Contact us for dealer inquiries.</div>
                                    <p>Requirements for being a Dealer or Distributor of JL Billet products</p>
                                    <p className="ubold">To qualify for the Dealer Program:</p>
                                    <p>The JL Billet Dealer program requires a pre-approved application and an initial
                                    purchase of $1500.00, $400.00 minimum per order, and $5000.00 annually to
                                    maintain that status. All amounts are based on dealer discount prices. </p>
                                    <p className="ubold">To qualify for the Distributor Program:</p>
                                    <p>JL Billet Distributor status requires a pre-approved application and a minimum
                                    initial order of $8500.00, $2,500.00 Minimum per order, and $25,000.00 annually
                                    to maintain that status.</p>
                                    <p>Both Dealers and Distributors must abide by our Minimum Advertised Pricing Policy
                                    (MAP). Retail pricing must stay at or above 95% of MSRP, you may not offer any
                                    additional promotions in order to encourage the sale of the product; violators
                                    of this policy will lose dealer/distributorship of JL Billet products. Open box,
                                    sample and demo items may be sold below MAP, only if the items are clearly
                                    marked in the sale as “open box” and are in no way represented as new JL Billet
                                    product.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row form-row-dealer">
                        <div className="col-md-12">
                            <div className="form-container-d">
                                <form action="" className="contact-form-x1">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-field-container">
                                                <label>Full Name</label>
                                                <input type="text" name="" id="" className="fieldx1 form-control"
                                                    required />
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
                                                <input type="email" name="" id="" className="fieldx1 form-control"
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
            </div>
        </section>
    )
}

export default Dealers
