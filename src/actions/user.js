import api from '../utils/api';
import {
    UPDATE_FOLLOW,
    FOLLOW_ERROR,
    GET_USER,
    USER_ERROR
} from './types';

////// ADD FOLLOW
export const followUser = id => async dispatch => {
    try {
        const res = await api.put(`/users/follow/${id}`);

        dispatch({
            type: UPDATE_FOLLOW,
            payload: { id, followers: res.data }
        });
    } catch (err) {
        dispatch({
            type: FOLLOW_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

////// REMOVE FOLLOW
export const unfollowUser = id => async dispatch => {
    try {
        const res = await api.put(`/users/unfollow/${id}`);
        dispatch({
            type: UPDATE_FOLLOW,
            payload: { id, followers: res.data }
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get user by ID
export const getUserById = userId => async dispatch => {
    try {
      const res = await api.get(`/users/${userId}`);
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };