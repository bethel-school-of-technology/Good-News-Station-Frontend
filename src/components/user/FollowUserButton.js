import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../actions/user";

const findUser = (followers, userId) => {
    if (followers) {
        return followers.find(follower => {
            return follower.user === userId;
         })
    }
    
}

const FollowUserButton = ({
    followUser,
    unfollowUser,
    auth: { user: { _id } },
    profile,
    profile: {
        user: { followers }
    },
    showActions,
    getProfileById
}) => {
    
    const isFollowing = !!findUser(followers, _id)

    return (

        <div className='dash-buttons'>

            {showActions && (

                <Fragment>
                    <div className='post-likes'>
                        {!isFollowing ?
                            (<button onClick={() => followUser(profile.user._id)}
                                type='button'
                                className='btn btn-success'>Follow
                            </button>
                            ) : (
                                <button onClick={() => unfollowUser(profile.user._id)}
                                    type='button'
                                    className='btn btn-danger'>Unfollow
                                </button>
                            )}
                    </div>
                </Fragment>
            )}
        </div>
    )
};
FollowUserButton.defaultProps = {
    showActions: true
};

FollowUserButton.propTypes = {
    auth: PropTypes.object.isRequired,
    followUser: PropTypes.func.isRequired,
    unfollowUser: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    showActions: PropTypes.bool
};

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(
    mapStateToProps,
    { followUser, unfollowUser }
)(FollowUserButton);








