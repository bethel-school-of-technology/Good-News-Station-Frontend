import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <nav className="nav-sidebar">
          <h4>
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
            </h4>
            <br />
            <h5 className="">The Good News Station © 2020. All rights reserved</h5>
          </nav>
    </Fragment>
  );
};

export default Footer;
