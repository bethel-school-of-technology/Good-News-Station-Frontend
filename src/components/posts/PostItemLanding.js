import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addPost } from '../../actions/post';

const PostItemLanding = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => (
  <div class="post bg-white p-1 my-1">

      {/* PROFILE AVATAR */}

    <div>
      <Link to={`/profile/${user}`}>
        <img class="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div>

      {/* POST CREATED DATE */}

    <div>
      <p class="my-1">{text}</p>
      <p class="post-date">
        Posted on <Moment format="MM/DD/YYYY">{date}</Moment>
      </p>
    </div>
  </div>
);
PostItemLanding.propTypes = {
  post: PropTypes.object.isRequired,
};


export default connect(null, { addPost }) (PostItemLanding)