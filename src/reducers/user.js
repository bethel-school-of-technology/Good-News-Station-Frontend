import {
    UPDATE_FOLLOW
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
        case UPDATE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user =>
                user._id === payload.id ? { ...user, followers: payload.followers } : user
                ),
                loading: false
            };
        default:
            return state;
    }
}
