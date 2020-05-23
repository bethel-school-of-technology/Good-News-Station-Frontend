import {
    UPDATE_FOLLOW,
    FOLLOW_ERROR,
    GET_USER,
    USER_ERROR
} from '../actions/types';

const initialState = {
    users: [],
    user: null,
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER:
        case UPDATE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user =>
                    user._id === payload.id ? { ...user, following: payload.following } : user
                ),
                loading: false
            };
        case FOLLOW_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case USER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                user: null
            };
        default:
            return state;
    }
}
