import { connect } from "react-redux";
import PinShow from "./pin_show";

import { fetchPin } from "../../actions/pin_actions";
import { openModal } from "../../actions/modal_actions";
import BoardShow from "../boards/board_show";

const mapStateToProps = (state, ownProps) => ({
    pin: state.entities.pins[ownProps.match.params.pinId],
    users: state.entities.users,
    currentUserId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    openEditPin: pinId => dispatch(openModal("edit-pin", pinId)),
    openNewBoardPin: pinId => dispatch(openModal("new-board-pin", pinId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);

// I NEED TO USE EDIT BOARD, THIS IS HOW CAN I CHANGE/SAVE JOIN BOARD
// I STAETED DROPDOW MENUE, PROBOLY SHOULD CANSEL THAT AND ADD SCSS FILE FOR MODAL PART?
//  i added edit pin in containers -> in modals