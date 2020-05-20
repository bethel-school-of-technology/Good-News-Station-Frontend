import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile, deleteAccount } from '../../actions/profile';

const initialState = {
    location: '',
    status: '',
    bio: ''
};

const ProfileForm = ({
    profile: { profile, loading },
    createProfile,
    deleteAccount,
    getCurrentProfile,
    history
}) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (!profile) getCurrentProfile();
        if (!loading && profile) {
            const profileData = { ...initialState };
            for (const key in profile) {
                if (key in profileData) profileData[key] = profile[key];
            }
            for (const key in profile.social) {
                if (key in profileData) profileData[key] = profile.social[key];
            }
            if (Array.isArray(profileData.skills))
                profileData.skills = profileData.skills.join(', ');
            setFormData(profileData);
        }
    }, [loading, getCurrentProfile, profile]);

    const {
        location,
        status,
        bio
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, profile ? true : false);
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Edit Your Profile</h1>
            <p className="lead">
                <i className="fas fa-user" /> Add some changes to your profile
      </p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <div>
                        Go
                    <a href="https://wordpress.com/log-in?client_id=1854&redirect_to=https%3A%2F%2Fpublic-api.wordpress.com%2Foauth2%2Fauthorize%3Fclient_id%3D1854%26response_type%3Dcode%26blog_id%3D0%26state%3D8c9cbb046effe3ddcb0d8cd9ec4a76c7308d39a7624efae65db95273317d24ff%26redirect_uri%3Dhttps%253A%252F%252Fen.gravatar.com%252Fconnect%252F%253Faction%253Drequest_access_token" target="blank"> Here </a>and use the same email you logged in with, to set/change profile picture using Gravatar.
                    </div>
                    <br></br>
                    {/* <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                    // value={picture}
                    // onChange={onChange}
                    /> */}
                    {/* <small className="form-text">
                        Choose profile picture
          </small>
                    <br /> */}
                    <input
                        type="text"
                        placeholder="Inspirational Quote"
                        name="status"
                        value={status}
                        onChange={onChange}
                    />
                    <small className="form-text">
                        Inspirational Quote
          </small>
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={location}
                        onChange={onChange}
                    />
                    <small className="form-text">
                        City & state suggested (eg. Boston, MA)
          </small>
                </div>


                <div className="form-group">
                    <textarea
                        placeholder="A short bio of yourself"
                        name="bio"
                        value={bio}
                        onChange={onChange}
                    />
                    <small className="form-text">Tell us a little about yourself</small>
                </div>
                <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>

                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">
                    Go Back
        </Link>
            </form>
        </Fragment>
    );
};

ProfileForm.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile, deleteAccount })(
    ProfileForm
);
