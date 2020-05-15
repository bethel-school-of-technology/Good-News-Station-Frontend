import axios from 'axios';
import {
    UPDATE_FOLLOW,
    POST_ERROR,
} from './types';

////// ADD FOLLOW
export const addFollow = id => async dispatch => {
    try {
        const res = await axios.put(`/api/users/follow/${id}`);

        dispatch({
            type: UPDATE_FOLLOW,
            payload: { id, following: res.data }
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

////// REMOVE FOLLOW
export const removeFollow = id => async dispatch => {
    try {
        const res = await axios.put(`/api/users/unfollow/${id}`);

        dispatch({
            type: UPDATE_FOLLOW,
            payload: { id, following: res.data }
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};