import React from 'react';
import PinIndexContainer from "../pins/pin_index_container";

const shuffle = require('shuffle-array'); //Randomize the order of the elements in a given array *** Fisher-Yates algorithm. *****

class Home extends React.Component {
    constructor(props) {
        super(props) 
       
    }
    /**
     * logic of pin.userId !== currentUserId is in /home_container.js
     */

    componentDidMount() {
        if (this.props.currentUserId === null) {
            this.props.startLoading();
            this.props.fetchPins();
            setTimeout(() => this.props.stopLoading(), 1200);
        } else {
            this.props.startLoading();
            this.props.fetchPins();
            setTimeout(() => this.props.stopLoading(), 1200);
        }
    }

    render() {
        const { currentUserId, loading, pins } = this.props;
        let klass;
        
        const loader = (loading) ? (
            <div className="loading-background">
                <div className="loader"></div>
            </div>
        ) : null;

        const otherPins = shuffle(pins.slice(0, 30));
        // const otherPins = shuffle(pins);

        return (
            <div className={`home-container ${klass}`}>
                {loader}
                <PinIndexContainer
                    key={otherPins.id}
                    pins={otherPins}
                    page="home"
                />
            </div>
        )
    }
};

export default Home;