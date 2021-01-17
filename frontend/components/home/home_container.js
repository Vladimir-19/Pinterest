import { connect } from "react-redux";
import Home from "./home";

import { fetchPins } from "../../actions/pin_actions";
import { startLoading, stopLoading } from "../../actions/loading_actions";

const mapStateToProps = state => {
    const currentUserId = state.session.id;
    const allPins = Object.values(state.entities.pins);
    const pins = (currentUserId) ? (
        allPins.filter(pin => pin.userId !== currentUserId)
    ) : (allPins.slice(0, 30));
    const loading = state.ui.loading;
    return { currentUserId, pins, loading };
    // return { currentUserId, pins};

};

const mapDispatchToProps = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);