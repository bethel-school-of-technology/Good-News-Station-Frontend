import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPosts } from "../../actions/post";
import PostFrom from "./PostFrom";
import PostItemLanding from "./PostItemLanding";

const LandingPosts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);


  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to Good News Station
      </p>

    <PostFrom />

      <div className="posts">
        {posts.map((post) => (
          <PostItemLanding key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

LandingPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(LandingPosts);