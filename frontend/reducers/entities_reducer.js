import { combineReducers } from 'redux';

// import user from
import pins from "./pin_reducer";
// import pins from "../reducers/pin_reducer";

import boards from "./board_reducer";
// import boards from "../reducers/board_reducer";

export default combineReducers({
    // users,
    pins,
    boards
});