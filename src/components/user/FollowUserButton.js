import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFollow, removeFollow } from "../../actions/user";

const FollowUserButton = ({
    addFollow,
    removeFollow,
    auth: { user: { _id, following } },
    showActions
}) => (
        <div className='dash-buttons'>
            
            {showActions && (
                <Fragment>
                    <button onClick={() => addFollow(_id)}
                        type='button'
                        className='btn btn-success'>Follow
                            <span>{following.length > 10 && <span>{following.length}</span>}</span>
                    </button>

                    <button onClick={() => removeFollow(_id)}
                        type='button'
                        className='btn btn-danger'>Unfollow
                    </button>
                </Fragment>
            )}
        </div >
    );

FollowUserButton.defaultProps = {
    showActions: true
};

FollowUserButton.propTypes = {
    auth: PropTypes.object.isRequired,
    addFollow: PropTypes.func.isRequired,
    removeFollow: PropTypes.func.isRequired,
    showActions: PropTypes.bool
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { addFollow, removeFollow }
)(FollowUserButton);








