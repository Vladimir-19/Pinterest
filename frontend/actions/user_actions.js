import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
// export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";



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

// const receiveSingleUser = payload => ({
//     type: RECEIVE_SINGLE_USER,
//     payload
// });

// export const fetchUser = userId => dispatch (
//     APIUtil.fetchUser(userId).then(
//         user => dispatch(receiveUser(user)))
// )
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

// EXTRA 
export const fetchAllUsers = () => dispatch => (
    APIUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

// export const fetchSingleUser = id => dispatch => (
//     UserAPIUtil.fetchSingleUser(id)
//         .then(payload => dispatch(receiveSingleUser(payload)))
// );