import { connect } from 'react-redux';
import NavBar from './navbar';

import { logoutUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAllUsers, fetchSingleUser } from "../../actions/user_actions"

const mapStateToProps = state => ({
    // currentUser: session && session.id && entities.users[session.id]
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    logout: () => dispatch(logoutUser()),
    // openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);