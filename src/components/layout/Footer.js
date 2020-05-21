import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <nav className="nav-sidebar">
          <h5>
            <ul className="trending">
              <li>
                <Link to='/'>Top Posts</Link>
              </li>
              <li>
                <Link to='/'>Topics</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/'>Content Policy</Link>
              </li>
              <li>
                <Link to='/'>Contact Us</Link>
              </li>
            </ul>
            </h5>
            <h4 className="">The Good News Station © 2020. All rights reserved</h4>
          </nav>
    </Fragment>
  );
};

export default Footer;
