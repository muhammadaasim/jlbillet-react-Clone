import React from 'react'
import {Link} from 'react-router-dom'
const Sitemap = () => {
    return (
        <section className="page-site-map">
            <div className="link-map">
                <div className="container">
                    <div className="links">
                        <Link to="/">Home</Link> / <Link to="/sitemap">Sitemap</Link>
                    </div>
                </div>
            </div>
            <div className="site-map-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cs-title">Sitemap</div>
                            <div className="site-map-list">
                                <ul className="outer-list">
                                    <li>
                                        Pages
                                    <ul className="inner-list">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Dealers</a></li>
                                            <li><a href="#">Tutorials</a></li>
                                            <li><a href="#">Gallery</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Shipping & Returns</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </li>
                                    <li>Categories
                                    <ul className="inner-list">
                                            <li>
                                                <a href="#">AR15</a>
                                                <ul className="inner-inner-list">
                                                    <li>
                                                        <a href="#">AR 15 Handguards</a>
                                                        <ul className="inner-inner-list2">
                                                            <li><a href="#">M-Lok Accessories</a></li>
                                                            <li><a href="#">AR15 M-Lok Handguards</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">AR 15 Lower Parts</a></li>
                                                    <li><a href="#">AR 15 Upper Parts</a></li>
                                                    <li><a href="#">AR 15 Barrels</a></li>
                                                    <li><a href="#">AR 15 Magazines</a></li>
                                                    <li><a href="#">Jigs</a></li>
                                                    <li><a href="#">AR 15 All Parts</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">308 LR DPMS</a>
                                                <ul className="inner-inner-list">
                                                    <li>
                                                        <a href="#">308 Handguards</a>
                                                        <ul className="inner-inner-list2">
                                                            <li><a href="#">DPMS G2</a></li>
                                                            <li><a href="#">M-Lok Accessories</a></li>
                                                            <li><a href="#">308/AR10 Handguards-Low Profile</a></li>
                                                            <li><a href="#">308/AR10 Handguards-High Profile</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">308 Upper Parts</a></li>
                                                    <li><a href="#">308 Lower Parts</a></li>
                                                    <li><a href="#">308 Win Barrels</a></li>
                                                    <li><a href="#">Jigs</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Show All</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        Brands
                                    <ul className="inner-list">
                                            <li><a href="#">Ballistic Advantage</a></li>
                                            <li><a href="#">Hexmag</a></li>
                                            <li><a href="#">JL Billet</a></li>
                                            <li><a href="#">Lancer</a></li>
                                            <li><a href="#">Naroh Arms</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sitemap
