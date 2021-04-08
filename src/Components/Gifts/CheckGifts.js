import React from 'react'
import { Link } from 'react-router-dom'
const Gifts = () => {
    return (
        <section className="balance-section">
            <div className="balance-section-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bal-content">
                                <p className="cs-title">Check Gift Certificate Balance</p>
                                <p><strong>You can check the balance of a gift certificate by typing the code in to the
                                    box below.</strong></p>
                                <p>Gift Certificate Code</p>
                                <form action="" className="balance-form">
                                    <div className="only-field">
                                        <input type="text" required className="form-control" />
                                        <input type="submit" value="Check Balance" />
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

export default Gifts
