import React from 'react';
import { Link } from 'react-router-dom';
import "./TopNav.css"

function TopNav() {
    return (
        <div className="main-topNav">
            <Link className="home-page" to="/"><img className="logo" src={require("./images/logo.jpg")} alt="logo"/> DMV Covid Tracker</Link>
              
            <div className="link-topNav">
                <Link className="link" to="/about-covid19">About Covid 19</Link>
                <Link className="link" to="/locations">Testing Locations</Link>
                <Link className="link" to="/local-data">Local DMV Data</Link>
                <Link className="link" to="/world">World Info</Link>
                <Link className="link" to="/vaccine">Vaccine News</Link>
            </div>
              
        </div>
    )
}

export default TopNav
