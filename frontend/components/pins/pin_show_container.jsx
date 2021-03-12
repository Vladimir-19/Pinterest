// import { connect } from "react-redux";
// import PinShow from "./pin_show";

// import { fetchPin } from "../../actions/pin_actions";
// import { openModal } from "../../actions/modal_actions";
// import BoardShow from "../boards/board_show";

// const mapStateToProps = (state, ownProps) => ({
//     pin: state.entities.pins[ownProps.match.params.pinId],
//     users: state.entities.users,
//     currentUserId: state.session.id,
// });

// const mapDispatchToProps = dispatch => ({
//     fetchPin: pinId => dispatch(fetchPin(pinId)),
//     openEditPin: pinId => dispatch(openModal("edit-pin", pinId)),
//     openNewBoardPin: pinId => dispatch(openModal("new-board-pin", pinId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PinShow);

import { connect } from "react-redux";
import React from "react";
import PinShow from "./pin_show";

import { fetchPin, fetchPins, deletePin, updatePin } from "../../actions/pin_actions";
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => ({
    pin: state.entities.pins[ownProps.match.params.pinId],
    // users: state.entities.users,
    _pinState: state.entities.users,
    currentUserId: state.session.id,
    pins: Object.values(state.entities.pins)
});

const mapDispatchToProps = dispatch => ({
    // fetchPin: pinId => dispatch(fetchPin(pinId)),
    // openEditPin: pinId => dispatch(openModal("edit-pin", pinId)),
    // openNewBoardPin: pinId => dispatch(openModal("new-board-pin", pinId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    deletePin: (pinId) => dispatch(deletePin(pinId)),
    updatePin: pin => dispatch(updatePin(pin)),
    openNewBoardPin: pinId => dispatch(openModal("new-board-pin", pinId)), //i have it in constructor
});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);


