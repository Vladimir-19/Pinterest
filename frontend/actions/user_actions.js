import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";


const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

// const receiveSingleUser = user => ({
//     type: RECEIVE_SINGLE_USER,
//     user
// });

export const fetchUser = userId => dispatch (
    APIUtil.fetchUser(userId).then(
        user => dispatch(receiveUser(user)))
)

export const updateUser = (user, id) => dispatch => (
    APIUtil.updateUser(user, id).then(
        user => (dispatch(receiveUser(user))), err => ( 
        dispatch(receiveUserErrors(err.responseJSON)))
    )
);

// EXTRA 
export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

// export const fetchSingleUser = id => dispatch => (
//     UserAPIUtil.fetchSingleUser(id)
//         .then(payload => dispatch(receiveSingleUser(payload)))
// );