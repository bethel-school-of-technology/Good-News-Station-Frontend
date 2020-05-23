import React, { Fragment } from 'react';
import PropTypes from "prop-types";


const FollowersFollowing = ({
    profile: {
        user: { following, followers }
    }
}) => {
    return (
        <div>
            
                <Fragment>
            <h1 class='large'>Followers : {followers.length}</h1>
            <h1 class='large'>Following : {following.length}</h1>
            </Fragment>
            
        </div>
         
    );
};

FollowersFollowing.propTypes = {
    profile: PropTypes.object.isRequired
};

export default FollowersFollowing;
