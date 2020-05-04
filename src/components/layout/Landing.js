import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PostItem from "../posts/PostItem";
import { getPosts } from "../../actions/post";

const Landing = ({ getPosts, posts }) => {
  return (
    <section className="container">
      <div className="">
        <div className="">
          <h1 className="large text-primary">Welcome to Good News Station!</h1>
          <h4 className="">
            Please create an account or sign in to create a post and start
            adding some good news.
          </h4>

          {/* LIST OF POSTS */}

          <Fragment>
            <h1 className="">Some Current Good News</h1>
            <p className="lead"></p>

            {/* POSTS LISTS */}

            <div className="posts">
              {(post) => <PostItem key={post._id} post={post} />}
            </div>
          </Fragment>

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
        </div>
      </div>
    </section>
  );
};
export default Landing;
