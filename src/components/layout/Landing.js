import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import LandingPosts from "../posts/LandingPosts";

const Landing = ({ }) => {

  return (
    <section className="container">
      <div className="text-center">
        <div className="landingImage">
          <h1 className="large text-primary">Welcome to</h1>
          <image />
          <h1 className="">Here is some current Good News to get you started.</h1>
          <h4 className="">
            Ready to start contributing? Create an account or sign in to add a post and or view comments.
          </h4>
          </div>

        {/* HOME PAGE LINKS */}

          <div className="mainBtns">
          <h3><Link to="/register" className="btn-Primary">
              Create an Account
            </Link>
           <span> | </span> 
            <Link to="/login" className="btn-Primary">
              Sign In
            </Link>
            </h3>
          </div>

        {/* LIST OF POSTS */}

          <Fragment>
            <div>
              <LandingPosts />
            </div>
          </Fragment>

      </div>
    </section>
  );
};
export default Landing;
