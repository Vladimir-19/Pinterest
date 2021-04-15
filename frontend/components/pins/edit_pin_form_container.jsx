import React from "react";
import { connect } from "react-redux";
import EditPinForm from "./edit_pin_form";

import { updatePin, deletePin } from "../../actions/pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
    formTitle: "Edit this Pin",
});

const mapDispatchToProps = dispatch => ({
    processForm: pin => dispatch(updatePin(pin)),
    deletePin: pinId => dispatch(deletePin(pinId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);