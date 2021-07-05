import React from "react";
import PinIndexItem from "./pin_index_item";

class PinIndex extends React.Component {
    constructor(props) {
        super(props);

        // delete this.splitPins = this.splitPins.bind(this);
    }

    render() {
        const { page, pins, currentUserId, user, openEditPin } = this.props;
        const pinIndexItems = pins.map(pin => (
            <PinIndexItem
                key={pin.id}
                page={page}
                pin={pin}
                // photo={pin.photo}
                userId={currentUserId}
                user={user}
                openEditPin={openEditPin}
            />
        ));

        return (
            <div className="pin-index container">
                <div className="pin-index" id="grid-container">
                    <div className="pin-index masonry" id="grid">
                        {pinIndexItems}
                    </div>
                </div>   
            </div>
        );
    };
};

export default PinIndex;

