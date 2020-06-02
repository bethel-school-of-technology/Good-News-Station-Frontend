import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Footer from './Footer';
import Spotlight from './Spotlight'


const Sidebar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="text-left">
      <li>
        <Link to='/'>#1 Trending</Link>
      </li>
      <li>
        <Link to='/'>#2 Trending</Link>
      </li>
      <li>
        <Link to='/'>#3 Trending</Link>
      </li>
      <li>
        <Link to='/'>#4 Trending</Link>
      </li>
      <li>
        <Link to='/'>#5 Trending</Link>
      </li>
    </ul>


  );

  const guestLinks = (
    <ul className="text-left">
      <li>
        <Link to='/'>#1 Trending</Link>
      </li>
      <li>
        <Link to='/'>#2 Trending</Link>
      </li>
      <li>
        <Link to='/'>#3 Trending</Link>
      </li>
      <li>
        <Link to='/'>#4 Trending</Link>
      </li>
      <li>
        <Link to='/'>#5 Trending</Link>
      </li>
    </ul>
  );

  return (
    /* Link to a page with the top articles listed with short discription and cover photos */

    <div className="" >
      <div className="sidebar">
        <nav className="text-center">
          <h1>
            Top News of the Week
          </h1>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </nav>
      </div>
      <div className="sidebar3">
        <Spotlight />
      </div>
      <div className="sidebar3">
        <Footer />
      </div>
    </div>




  );
};

Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Sidebar);