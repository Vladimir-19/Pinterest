import {RECEIVE_USER, RECEIVE_ALL_USERS } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {
                [action.currentUser.id]: action.currentUser
            });
        case RECEIVE_ALL_USERS:
                return action.users;
        // case LOGOUT_CURRENT_USER:
        //     return {};
        case RECEIVE_USER:
            return Object.assign({}, state, action.payload.user);
        default:
            return state;
    }
};

export default usersReducer;