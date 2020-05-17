import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Sidebar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/'>Profiles</Link>
      </li>
      <li>
        <Link to='/'>Posts</Link>
      </li>
      <li>
        <Link to='/'>
          <i  />{' '}
          <span >Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i  />{' '}
          <span >Logout</span>
        </a>
      </li>
    </ul>
    
    
  );

  const guestLinks = (
    <ul>
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
  <div>
    <div className="sidebar" >
    <nav >
      <h1>
        <Link to='/'>
          Top News of the Week!
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
    </div>
    <div className="sidebar2" >
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
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
