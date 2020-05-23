import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import { getProfileById } from '../../actions/profile';
import FollowUserButton from '../user/FollowUserButton';
import FollowersFollowing from '../user/FollowersFollowing'


const Profile = ({
  getProfileById,
  profile: { profile },
  auth,
  match,
  // follower_count: { users: {profile.users} }
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
          <Fragment>
            <Link to="/profiles" className="btn btn-light">
              Back To Profiles
          </Link>

            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to="/edit-profile" className="btn btn-light">
                  Edit Profile
                </Link>
              )}
            <div className="profile-grid my-1">
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
              <FollowersFollowing profile={profile} />


              {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id !== profile.user._id && (
                  <FollowUserButton profile={profile} />

                )}
            </div>
          </Fragment>
        )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
