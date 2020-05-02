import React from "react";
import { Link } from "react-router-dom";
import { Posts } from "../posts/Posts";

const Landing = () => {
  return (
    <section className="landingPage">
      <div className="overlay">
        <div className="landing-inner">
          <h1 className="title">Welcome to Good News Station!</h1>
          <Posts />
          <h4 className="subHeader">
            Please create an account or sign in to create a post and start
            adding some good news.
          </h4>
          <div clasName="mainButtons">
            <Link to="/register" className="btn-Primary">
              Create an Account
            </Link>
            <Link to="/login" className="btn-Primary">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
