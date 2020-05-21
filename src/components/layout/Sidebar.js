import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Sidebar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="sidebarContent">
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
    <ul className="sidebarContent">
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

    <div className="sidebar" >
      <nav className="sidebarContent">
        <h1>
          <Link to='/GNSpicks'>
            Top News of the Week!
          </Link>
        </h1>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
      <div className="footer">
        <h1 className="sidebarContent">Footer info goes here</h1>
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
