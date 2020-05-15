import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
// Darkmode Begin
import Darkmode from 'darkmode-js';
// Darkmode End

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Good News is all around you <strong className="smiley-colors">=)</strong>
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password (Must be 6 characters or more)'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

// Darkmode Beginning
var options = {  
  bottom: '64px', // default: '32px'  
  right: '32px', // default: '32px'  
  left: 'unset', // default: 'unset'  
  time: '0.3s', // default: '0.3s'  
  mixColor: '#fff', // default: '#fff'  
  backgroundColor: '#fff',  // default: '#fff'  
  buttonColorDark: '#100f2c',  // default: '#100f2c'  
  buttonColorLight: '#fff', // default: '#fff'  
  saveInCookies: false, // default: true,  
  label: '🌓', // default: ''  
  autoMatchOsTheme: true // default: true
}
  // const darkmode = new Darkmode(options);
  new Darkmode({ label: '🌓' }).showWidget();
// DarkMode End

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
