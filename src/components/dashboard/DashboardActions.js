import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/profile/' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> View Profile
      </Link>
    </div>
  );
};

export default DashboardActions;
