import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";

import { fetchBoards } from "../../actions/board_actions";
import { createPin, fetchPins } from "../../actions/pin_actions";
import { pinToBoard } from "../../actions/join_boards_pins_actions";
import CreatePinForm from "./create_pin";
// import modal from "../../modal/modal";
// import { openModal } from "../../../actions/modal_actions";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    pin: { "title": "", "description": "", url: "", photo: null },
    boards: Object.values(state.entities.boards).filter(board => (
        board.userId === state.session.id
    )),
    // boards: Object.values(state.entities.boards),
    // pins: Object.values(state.entities.pins),
    errors: state.errors.pin,
    formType: "Create Pin",
});

const mapDispatchToProps = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    processForm: pin => dispatch(createPin(pin)),
    // createPin: (pin) => dispatch(createPin(pin)),
    pinToBoard: boardPin => dispatch(pinToBoard(boardPin)),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePinForm));
// export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm);

// import {
//     connect
// } from 'react-redux';

// import {
//     openModal
// } from '../../../actions/modal_actions';

// import {
//     fetchBoards
// } from '../../../actions/board_actions';

// import {
//     createPin, fetchPins
// } from '../../../actions/pin_actions';

// import { pinToBoard } from '../../../actions/board_pin_actions';

// import { withRouter } from 'react-router-dom';

// import CreatePin from './create_pin_form';


// const mapStateToProps = (state) => ({
//     currentUser: state.entities.users[state.session.id],
//     boards: Object.values(state.entities.boards),
//     pins: Object.values(state.entities.pins)
// });

// const mapDispatchToProps = dispatch => ({
//     openModal: modal => dispatch(openModal(modal)),
//     fetchBoards: () => dispatch(fetchBoards()),
//     fetchPins: () => dispatch(fetchPins()),
//     createPin: (pin) => dispatch(createPin(pin)),
//     pinToBoard: (boardPin) => dispatch(pinToBoard(boardPin))
// });

// export default withRouter(connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CreatePin));