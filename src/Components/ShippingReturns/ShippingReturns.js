import React from 'react'
import { Link } from 'react-router-dom'
const ShippingReturns = () => {
    return (
        <section className="page-shipping-section">
            <div className="link-map">
                <div className="container">
                    <div className="links">
                        <Link to="/">Home</Link> / <Link to="/shippingandreturns">Shipping & Returns</Link>
                    </div>
                </div>
            </div>
            <div className="page-shipping-inner">
                <div className="container">
                    <h3 className="page-inner-title">SHIPPING & RETURNS</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shipping-content text-center">
                                <h4 className="ship-title">LIMITED LIABILITY and WARRANTY </h4>
                                <p className="parax">These products are guaranteed to be free from defects in material and
                                workmanship. In the event of any defects in material or workmanship, the
                                manufacturer’s sole liability shall be the repair or replacement of any such
                                product(s) that are defective in material or workmanship. The repair or replacement
                                of any such product(s) shall be the manufacturer’s sole responsibility. This
                                warranty specifically excludes any and all consequential or accidental damages. No
                                other warranties or liability whatsoever, are either expressed or implied. If any
                                such warranties shall be imposed by law notwithstanding this provision, then such
                                warranties shall be the responsibility of the immediate buyer. By way of example,
                                and not limitation, there shall be no warranties of merchantability, use of trade,
                                or fitness for any particular purpose. By placing an order you agree to these terms.
                                </p>
                            </div>
                            <div className="shipping-content text-center">
                                <h4 className="ship-title">RETURN POLICY</h4>
                                <p className="parax">You may return most new, unopened, unused items within 30 days of
                                delivery for a full refund (Subject to a 15% restocking fee). We'll also pay the
                                return shipping costs if the return is a result of our error (you received an
                                    incorrect or defective item, etc.).</p>
                                <p className="parax">You should expect to receive your refund within two weeks of giving
                                your package to the return shipper, however, in many cases you will receive a refund
                                more quickly. This time period includes the transit time for us to receive your
                                return from the shipper (5 to 10 business days), the time it takes us to process
                                your return once we receive it (3 to 5 business days), and the time it takes your
                                    bank to process our refund request (5 to 10 business days).</p>
                                <p className="parax">If you need to return an item, simply login to your account, view the
                                order using the "Complete Orders" link under the My Account menu and click the
                                Return Item(s) button. We'll notify you via e-mail of your refund once we've
                                received and processed the returned item.
                                </p>
                            </div>
                            <div className="shipping-content text-center">
                                <h4 className="ship-title">SHIPPING</h4>
                                <p className="parax">We can ship to virtually any address in the USA. Note that there are
                                restrictions on some products, and some products cannot be shipped to international
                                destinations.

                                When you place an order, we will estimate shipping and delivery dates for you based
                                on the availability of your items and the shipping options you choose. Depending on
                                the shipping provider you choose, shipping date estimates may appear on the shipping
                                quotes page. Order processing is typically 2-3 days, but due to high market demands
                                can occasionally be up to 10 business days.

                                Orders that require items be shipped to an an FFL must have the correct shipping
                                address (where the parts are being shipped to) when the order is placed.

                                Please also note that the shipping rates for many items we sell are weight-based.
                                The weight of any such item can be found on its detail page. To reflect the policies
                                of the shipping companies we use, all weights will be rounded up to the next full
                                    pound.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ShippingReturns
