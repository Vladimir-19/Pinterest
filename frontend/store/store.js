import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(thunk)
    )
    // createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

);

export default configureStore;