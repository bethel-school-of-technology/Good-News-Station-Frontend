import React from 'react';
import { Link } from 'react-router-dom';

const FollowProfileButton = () => {
    return (
        <div className='dash-buttons'>
            <Link to='/#' className='btn btn-success'>
                Follow
      </Link>
            <Link to='/#' className='btn btn-danger'>
                Unfollow
      </Link>
        </div>
    );
};

export default FollowProfileButton;
