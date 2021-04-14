import { connect } from "react-redux";
import React from "react";
import PinShow from "./pin_show";

import { fetchPin, fetchPins, deletePin, updatePin } from "../../actions/pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import  { startLoading, stopLoading } from "../../actions/loading_actions";

const mapStateToProps = (state, ownProps) => ({
    pin: state.entities.pins[ownProps.match.params.pinId],
    _pinState: state.entities.users,
    currentUserId: state.session.id,
    pins: Object.values(state.entities.pins),
    modal: state.ui.modal,
    loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    deletePin: (pinId) => dispatch(deletePin(pinId)),
    updatePin: pin => dispatch(updatePin(pin)),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);


