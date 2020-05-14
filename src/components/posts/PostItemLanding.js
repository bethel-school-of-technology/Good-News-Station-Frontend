import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const PostItemLanding = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
    <div class="post bg-light p-1 my-1">

      {/* PROFILE AVATAR */}

      <div>
        <Link to={`/profile/${user}`}>
          <img class="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>

      {/* POST CREATED DATE */}

      <div>
        <p class="text-left my-1">{text}</p>
        <p class="text-left post-date">
          Posted on <Moment format="MM/DD/YYYY">{date}</Moment>
        </p>

        {showActions && (
          <Fragment>

      {/* COMMENTS/BUTTON */}

          {/*   <Link to={`/posts/${_id}`} className='table btn btn-primary'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link> */}

        </Fragment>
      )}
    </div>
  </div>
);

PostItemLanding.defaultProps = {
  showActions: true
};

PostItemLanding.propTypes = {
  post: PropTypes.object.isRequired,
};


export default connect()(PostItemLanding);