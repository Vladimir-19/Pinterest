// import {
//     connect
// } from 'react-redux';

// import {
//     openModal, closeModal
// } from '../../actions/modal_actions';


// import EditProfile from './edit_profile';
// import { updateUser, fetchUser } from '../../actions/user_actions';


// const mapStateToProps = (state) => ({
//     currentUser: state.entities.users[state.session.id],
//     pins: Object.values(state.entities.pins),
//     boards: Object.values(state.entities.boards),
//     errors: state.errors.session,
// });

// const mapDispatchToProps = dispatch => ({
//     openModal: modal => dispatch(openModal(modal)),
//     closeModal: () => dispatch(closeModal()),
//     updateUser: (user, id) => dispatch(updateUser(user, id)),
//     fetchUser: userId => dispatch(fetchUser(userId))
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(EditProfile);


import React from "react";
import { connect } from "react-redux";

import EditProfileForm from "./edit_profile";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    errors: state.errors.user,
    currentUser: state.entities.users[state.session.id],

    users: Object.values(state.entities.users),
    // id: ownProps.match.params.id,
});

const mapDispatchToProps = dispatch => ({
    updateUser: (user, id) => dispatch(updateUser(user, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);