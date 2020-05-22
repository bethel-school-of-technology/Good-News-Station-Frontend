import React from "react";
import { Link } from "react-router-dom";
import LandingPosts from "../posts/LandingPosts";
import Sidebar from "./Sidebar";
import GNSLogo from "../../img/GoodNewsStation-LOGO.png"


const Landing = () => {
  return (
    <div className="container">
        <div className="landing">
          <h1 className="large text-dark">
            Welcome to
          </h1>
         <img className="landingLogo" alt="" src={GNSLogo}/>
        </div>

        {/* HOME PAGE LINKS */}
        <div className="test2">
        <div className="mainContent-Landing">
        <h1 className="">
            Here is some current Good News to get you started!
          </h1>
          <h4 className="">
            Ready to start contributing? Create an account or sign in to add a
            post and or view comments.
          </h4>
          <h3>
          <div className="mainButtons">
            <Link to="/register" className="btn-Primary">
              Create an Account
            </Link>
            {" | "}
            <Link to="/login" className="btn-Primary">
              Sign In
            </Link>
          </div>
          </h3>

          {/* LIST OF POSTS */}

          <div>
            <LandingPosts />
          </div>
        </div>

        <div className="sidebarContent">
          <Sidebar />
        </div>
        </div>
    </div>
  );
};
export default Landing;
