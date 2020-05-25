import React, { Fragment} from "react";
import { Link } from "react-router-dom";
import LandingPosts from "../posts/LandingPosts";
import Sidebar from "./Sidebar";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GNSLogo from "../../img/GoodNewsStation-LOGO_INV.png";

const Landing = ({ auth: { isAuthenticated, loading } }) => {
  
  const loggedOutLeft = (
    <h3 className="loginText">
      Ready to start contributing? Create an account or sign in to add a post
      and or view comments.
    </h3>
  );
  
  const loggedInLeft = <div></div>;
  
  const loggedOutRight = (
    <div className="mainButtons">
      <Link to="/register" className="btn btn-primary btnLanding">
        Create Account
      </Link>
      <Link to="/login" className="btn btn-primary btnLanding">
        Sign In
      </Link>
    </div>
  );
  
  const loggedInRight = <div className = "mainContent-Landing"></div>;

  return (
    <div className="container">
      <div className="landing">
        <img className="landingLogo" alt="" src={GNSLogo} />
        <br />
        <br />
        <h2 className="text-light">GOOD NEWS ALL IN ONE PLACE</h2>
      </div>

      {/* HOME PAGE LINKS */}
      <div className="landingBody">
        
        <div className="mainContent-Landing">
          
          {!loading && (
            <Fragment>{isAuthenticated ? loggedInLeft : loggedOutLeft}</Fragment>
          )}

          {/* LIST OF POSTS */}

          <div>
            <LandingPosts />
          </div>
        </div>

        <div className="sidebarContent">
          
          {!loading && (
            <Fragment>{isAuthenticated ? loggedInRight : loggedOutRight}</Fragment>
          )}

          <Sidebar />
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
