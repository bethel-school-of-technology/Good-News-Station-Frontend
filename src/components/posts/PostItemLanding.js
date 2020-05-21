import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import Linkify from "react-linkify";

const PostItemLanding = ({
  addLike,
  removeLike,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => (
  <div className="post bg-light p-1 my-1">
{/* PROFILE AVATAR */}

    <div>
      <Link to={`/profile/${user}`}>
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div>

{/* POST CREATED DATE */}

    <div>
    
    <Linkify>
      <p className="text-left my-1">{text}</p>
      </Linkify>


      <p className="text-left post-date">
        Posted on <Moment format="MM/DD/YYYY">{date}</Moment>
      </p>

      {showActions && (
        <Fragment>

{/* LIKE BUTTON */}

          <div className="post-likes">
            <h4>Was this post helpful?</h4>

            <Link to={`/posts`} type="button" className="btn btn-light">
              <i className="fas fa-thumbs-up" />{" "}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </Link>

{/* DISLIKE BUTTON */}

            <Link to={`/posts`} type="button" className="btn btn-light">
              <i className="fas fa-thumbs-down" />
            </Link>
          </div>

{/* COMMENTS/BUTTON */}

          <Link to={`/posts/${_id}`} className="btn btn-primary btnLeft">
            Discussion{" "}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
         
        </Fragment>
      )}
    </div>
  </div>
);

PostItemLanding.defaultProps = {
  showActions: true,
};

PostItemLanding.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect()(PostItemLanding);
