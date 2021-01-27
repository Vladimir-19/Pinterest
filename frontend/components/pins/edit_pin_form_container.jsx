import React from "react";
import { connect } from "react-redux";

import { updatePin } from "../../actions/pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

import EditPinForm from "./edit_pin_form";

const mapStateToProps = state => ({
    pin: state.entities.pins[state.ui.objectId],
    errors: state.errors.pin,
    formTitle: "Edit this Pin"
});

const mapDispatchToProps = dispatch => ({
    processForm: pin => dispatch(updatePin(pin)),
    openDeletePin: (pinId) => dispatch(openModal('delete-pin', pinId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);