import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';

import { openModal } from '../../actions/modal_actions';
import { fetchAllUsers, fetchUser } from "../../actions/user_actions";
import { startLoading, stopLoading } from "../../actions/loading_actions";

import ProfileShow from './user_profile';


const mapStateToProps = (state, ownProps) => {
    const loading = state.ui.loading;
    return {
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards),
    pins: (state.entities.pins),
    // 
    users: Object.values(state.entities.users),
    loading
    // idS: ownProps.match.currentUser,
}};

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()), // ???
    fetchUser: id => dispatch(fetchUser(id)), // ???
    openModal: modal => dispatch(openModal(modal)),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);

// import { connect } from "react-redux";
// import React from "react";

// import { fetchAllUsers, fetchUser } from "../../actions/user_actions";
// import { openModal, closeModal } from "../../actions/modal_actions";
// import UserProfile from "./user_profile";

// const mapStateToProps = (state, ownProps) => ({
//     currentUser: state.entities.users[state.session.id],
//     users: Object.values(state.entities.users),
//     username: ownProps.match.params.username,
//     boards: Object.values(state.entities.boards),
//     boardsPins: state.entities.boardsPins,
//     pins: Object.values(state.entities.pins),
// });

// const mapDispatchToProps = dispatch => ({
//     fetchAllUsers: () => dispatch(fetchAllUsers()),
//     fetchUser: id => dispatch(fetchUser(id)),
//     openModal: modal => dispatch(openModal(modal)),
//     closeModal: () => dispatch(closeModal())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);