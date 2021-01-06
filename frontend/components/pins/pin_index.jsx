import React from "react";
import PinIndexItem from "./pin_index_item";

import StackGrid, { transitions } from "react-stack-grid";

const shuffle = require("shuffle-array");
const masonryEvents = ["load", "resize"];

//BoardIndexContainer
class PinIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinSets: [], // don't need
            pinSetIdx: 0, // don't need
            // loadedPins: []
            loading: true,
            update: true
        };

        this.splitPins = this.splitPins.bind(this);
    }

    splitPins(pins) {
        const arr = [];
        for (let i = 0; i < pins.length; i += 30) {
            arr.push(pins.slice(i, i + 30));
        }
        return arr;
    }
    render() {
        const { page, pins, currentUserId, user, openEditPin, openNewBoardPin } = this.props;
        const pinIndexItems = pins.map(pin => (
            <PinIndexItem
                key={pin.id}
                page={page}
                pin={pin}
                // photo={pin.photo}
                userId={currentUserId}
                user={user}
                openEditPin={openEditPin}
                openNewBoardPin={openNewBoardPin}
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

// export default class PinIndex extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: true,
//             update: true
//         }
//     }

//     componentDidMount() {
//         this.props.fetchPins();
//         const timer = setTimeout(() => {
//             this.setState({ loading: false })
//         }, 4000);
//     }



//     render() {
//         const { scaleDown } = transitions;

//         // if (this.state.loading) {
//         //     return <LoadingIcon />;
//         // }
//         if (this.props.pins.length > 0) {
//             return (
//                 <>
//                     <StackGrid
//                         className="masonry-pins"
//                         columnWidth={250}
//                         appear={scaleDown.appear}
//                         appeared={scaleDown.appeared}
//                         enter={scaleDown.enter}
//                         entered={scaleDown.entered}
//                         leaved={scaleDown.leaved}
//                         monitorImagesLoaded={true}
//                     >
//                         {this.props.pins.map((pin) => (
//                             <PinIndexItem
//                                 pin={pin}
//                                 key={pin.id}
//                                 photo={pin.photoUrl}
//                                 fetchPins={this.props.fetchPins}
//                                 currentUser={this.props.currentUser}
//                                 openModal={this.props.openModal}
//                             />
//                         ))}
//                     </StackGrid>
//                     <div className='plus'>
//                         <Link to="/pins">
//                             <i className="fas fa-plus"></i>
//                         </Link>
//                     </div>
//                 </>
//             );
//         } else {
//             return null;
//         }
//     }
// }

