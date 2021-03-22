import React from "react";
import { connect } from "react-redux";
import EditPinForm from "./edit_pin_form";

import { updatePin, deletePin } from "../../actions/pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
    // pin: state.entities.pins[state.ui.objectId],
    // pin: state.entities.pins[state.match.pinId],
    // pin: state.entities.pins[ownProps.match.params.pinId],
    errors: state.errors.pin,
    formTitle: "Edit this Pin",
    // pin: state.entities.pins[state.ui.objectId] //try
});

const mapDispatchToProps = dispatch => ({
    processForm: pin => dispatch(updatePin(pin)),
    deletePin: pinId => dispatch(deletePin(pinId)),
    openDeletePin: (pin) => dispatch(openModal('delete-pin', pin)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);