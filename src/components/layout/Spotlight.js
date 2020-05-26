import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Spotlight = () => {
    return (
        <Fragment>
            <nav className="nav-sidebar">
                <h1 className="">
                    User Spotlight
                </h1>
                <h4>
                    <ul className="trending">
                        <li>
                            <Link to='/UserSpotlight_1'>Defying odds</Link>
                        </li>
                        <li>
                            <Link to='/UserSpotlight_2'>Apply the humanity</Link>
                        </li>
                        <li>
                            <Link to='/UserSpotlight_3'>An act of kindness</Link>
                        </li>
                        <li>
                            <Link to='/UserSpotlight_4'>Need a story here</Link>
                        </li>
                    </ul>
                </h4>
            </nav>
        </Fragment>
    );
};

export default Spotlight;
