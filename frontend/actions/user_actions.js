import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";


const receiveUser = payload => ({ //user
    type: RECEIVE_USER,
    payload //user
});

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});


export const fetchUser = id => dispatch(
    APIUtil.fetchUser(id).then(
        payload => dispatch(receiveUser(payload)))
)

export const updateUser = (user, id) => dispatch => (
    APIUtil.updateUser(user, id).then(
        user => (dispatch(receiveUser(user))), err => ( 
        dispatch(receiveUserErrors(err.responseJSON)))
    )
);