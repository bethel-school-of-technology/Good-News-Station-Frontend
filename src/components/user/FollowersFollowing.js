import React, { Fragment } from 'react';
import PropTypes from "prop-types";


const FollowersFollowing = ({
    profile: {
        user: { following, followers }
    }
}) => {

    return (
        <div className='profile-about bg-light p-2'>
                <Fragment>
                    <h2 className='text-primary'>Followers : {followers.length}</h2>
                    <h2 className='text-primary'>Following : {following.length}</h2>
                </Fragment>
        </div>
    );
};

FollowersFollowing.propTypes = {
    profile: PropTypes.object.isRequired
};

export default FollowersFollowing;