import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';

import { openModal } from '../../actions/modal_actions';
import { startLoading, stopLoading } from "../../actions/loading_actions";

import ProfileShow from './user_profile';


const mapStateToProps = (state, ownProps) => {
    const loading = state.ui.loading;
    return {
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards),
    pins: (state.entities.pins),
    users: Object.values(state.entities.users),
    loading
}};

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)), 
    openModal: modal => dispatch(openModal(modal)),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);