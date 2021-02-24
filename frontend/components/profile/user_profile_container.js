import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';

import { openModal } from '../../actions/modal_actions';

import ProfileShow from './user_profile';
import { fetchUser } from '../../util/user_api_util';


const mapStateToProps = (state) => {
    // debugger;
    return {
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards),
    pins: (state.entities.pins)
}};

const mapDispatchToProps = dispatch => ({
    // fetchAllUsers: () => dispatch(fetchAllUsers()),
    // fetchUser: id => dispatch(fetchUser(id)),
    openModal: modal => dispatch(openModal(modal)),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);