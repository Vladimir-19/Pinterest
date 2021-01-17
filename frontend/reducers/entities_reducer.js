import { combineReducers } from 'redux';

import users from './users_reducer';
import pins from "./pins_reducer";
// import pins from "../reducers/pin_reducer";

import boards from "./boards_reducer";
// import boards from "../reducers/board_reducer";
import joinBoardsPins from "./join_boards_pins_reducer"

export default combineReducers({
    users,
    pins,
    boards,
    joinBoardsPins
});