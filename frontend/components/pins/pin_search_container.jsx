import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import PinIndexSearch from './pin_search';

const mapStateToProps = (state) => {
    const currentUser = state.entities.users[state.session.id];
    const modal = state.ui.modal;
    const searchPins = Object.values(state.ui.search.searchPins);
    const pins = Object.values(state.entities.pins);
    return {
        searchPins: searchPins,
        pins: pins,
        modal: modal,
        currentUser: currentUser
    }
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchPins: () => dispatch(fetchPins())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PinIndexSearch);