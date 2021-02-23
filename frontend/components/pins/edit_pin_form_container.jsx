import React from "react";
import { connect } from "react-redux";

import { updatePin } from "../../actions/pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

import EditPinForm from "./edit_pin_form";

// const mapStateToProps = state => ({
//     pin: state.entities.pins[state.ui.objectId],
//     // pin: state.pins.pin,
//     errors: state.errors.pin,
//     formTitle: "Edit this Pin"
// });

// const mapDispatchToProps = dispatch => ({
//     processForm: pin => dispatch(updatePin(pin)),
//     openDeletePin: (pinId) => dispatch(openModal('delete-pin', pinId)),
//     closeModal: () => dispatch(closeModal())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);

const mapStateToProps = state => {
    // debugger
    return {
        // pin: Object.values(state.entities.pinss).filter(pin => (
        //     pin.pinId === state.pinId
        // )),
    // pin: state.entities.pins[state.ui.objectId],
    // pin: state.entities.pins[state.ui.pinId],
    // pin: state.entities.pins[state.pinId],
    errors: state.errors.pin,
    formTitle: "Edit this Pin"
}};

const mapDispatchToProps = dispatch => ({
    processForm: pin => dispatch(updatePin(pin)),
    openDeletePin: (pinId) => dispatch(openModal('delete-pin', pinId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);