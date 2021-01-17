import React from 'react';
import PinIndexContainer from "../pins/pin_index_container";

const shuffle = require('shuffle-array');

class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            loading: true
        };
    }

    // componentDidMount() {
    //     if (this.props.currentUserId === null) {
    //         this.props.fetchPins();
    //     } else {
    //         this.props.startLoading();
    //         this.props.fetchPins();
    //         // setTimeout(() => this.props.stopLoading(), 2800);
    //         setTimeout(this.setState({ loading: false }), 2800);

    //     }
    // }

    render() {
        const { currentUserId, loading, pins } = this.props;
        let spacer, klass;
        if (currentUserId === null) {
            klass = "no-scroll";
            spacer = null;
        } else {
            klass = "";
            spacer = <div id="spacer"></div>;
        };
        const loader = (loading) ? (
            <div className="loading-background">
                <div className="loading"></div>
            </div>
        ) : null;

        const otherPins = shuffle(pins.slice(0, 60));

        return (
            <div className={`home-container ${klass}`}>
                {spacer}
                {loader}
                <PinIndexContainer
                    // key={pinId}
                    pins={otherPins}
                    page="home"
                />
            </div>
        )
    }
};

export default Home;