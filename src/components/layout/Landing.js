import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import LandingPosts from "../posts/LandingPosts";


const Landing = ({ }) => {

  return (
    <section className="container">
      <div className="text-center">
        <div className="">
          <h1 className="large text-primary">Welcome to the Good News Station!</h1>
          <h1 className="">Here is some current Good News to get you started.</h1>
          <h4 className="">
            Ready to start contributing? Create an account or sign in to add a post and or view comments.
          </h4>


        {/* HOME PAGE LINKS */}

          <div className="mainButtons">
            <Link to="/register" className="btn-Primary">
              Create an Account
            </Link>
            {" | "}
            <Link to="/login" className="btn-Primary">
              Sign In
            </Link>
          </div>

        {/* LIST OF POSTS */}

         
            <div>
              <LandingPosts />
            </div>
          

        </div>
      </div>
    </section>
  );
};
export default Landing;
