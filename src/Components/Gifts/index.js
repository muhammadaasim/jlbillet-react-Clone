import React from 'react'
import Gifts from './Gifts'
// import './styles.css'
import CheckGifts from './CheckGifts'
import Tabs from "./Tabs";
import Panel from "./Panel";
import { Link } from 'react-router-dom'
const index = () => {
    return (
        <>
            <div className="link-map">
                <div className="container">
                    <div className="links">
                        <Link to="/">Home</Link> / <Link to="/gifts">Gifts</Link>
                    </div>
                </div>
            </div>

            {/* <Tabs>
                <Panel title="My Events">
                    <Gifts />
                </Panel>
                <Panel title="My asdf">
                    <CheckGifts />
                </Panel>
            </Tabs> */}
        </>
    )
}

export default index
