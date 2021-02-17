
import React from 'react';
import { Link } from 'react-router-dom';
// import LoadingIcon from '../loading/loading';
import { Redirect } from 'react-router-dom';
import BoardItem from './board_item';
// import PinIndexContainer from '../pins/pin_index_container';
import BoardShowNavBar from './board_show_nav_bar'

export default class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            fetched: false,
            openPin: false,
            openPinId: null
        }

        this.openEditBoard = this.openEditBoard.bind(this)
    }

    // handleClick(e) {
    //   let pin = (e.currentTarget);
    //   const pinId = (pin.getAttribute('value'))
    //   if (pinId) {
    //   this.setState({openPin: true, openPinId: pinId})
    // }
    // }

    componentDidMount() {
        this.props.fetchBoards();
        this.props.fetchPins().then(() => this.setState({ fetched: true, loading: false }))
    }

    openEditBoard() {
        e.preventDefault();
        this.props.openEditBoard(this.props.board.id)
    }

    render() {
        const { board, currentUser, pins, boardsPins, openEditBoard } = this.props;

        // let boardPins = boardsPins 
        // .filter(boardPin => board.id === boardPin.boardId)
        // .map(boardPin => pins[boardPin.pinId])
        // .filter(boardPin => boardPin !== undefined);

        // if (this.state.loading) {
        //     return <LoadingIcon />;
        // }
                // I NEED THIS I NEED THIS I NEED THIS I NEED THIS
            // if (board.pinIds.length == 0) {
            //     return (
            //         <div>
            //             <p id='no-pins-yet'>this board has no pins yet!</p>
            //             <Link className="back-arrow-board" to={`/users/${currentUser.id}`}>
            //                 <i className="fas fa-arrow-left"></i>
            //             </Link>
            //         </div>
            //     )
            // }
        // <div className="board-show pin-feed">
        //     <PinIndexContainer
        //         pins={boardPins}
        //         page="profile"
        //     />
        //     </div>
        let pinArr = [];
        if (this.state.fetched == true && board.pinIds.length > 0) {
            board.pinIds.map(pinId => {
                if (pinId != 'undefined') {
                    pinArr.push(pins[pinId])
                }
            })
        }

        if (pinArr.length >= 0) {
            return (
                <div id='board-show-wrapper'>
                    <div id='board-show-header'>
                        <h1>{board.title}</h1>
                     
                    </div>
                    {/* here  */}
                    <button
                        className="board-show button"
                        onClick={(e, board) => openEditBoard(e, board)} // was boardId
                    >
                    {/* <button
                        className="board-show button"
                        onClick={(e, boardId) => openEditBoard(e, board.id)}
                    > */}
                        <i className="fas fa-pencil-alt board-show icon" id="edit-board-icon"></i>
                    </button>

                

                    <ul id='board-list-wrap'>
                        {pinArr.map((pin) => (
                            <BoardItem
                                pin={pin}
                                key={pin.id}
                            />
                            // <PinIndexContainer
                            //     pin={pin}
                            //     key={pin.id}
                            //     page="profile"/>
                        ))}
                    </ul>
                    <Link className="back-arrow-board" to={`/users/${currentUser.id}`}>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    {/* <div>
                        here
                        <BoardShowNavBar
                            openEditBoard={this.openEditBoard}
                            board={board}
                            user={currentUser}
                        />
                    </div> */}
                </div>
                
            )
        } else {
            
            <p>this board has no pins yet!</p>
        }
    }
}

// import React, { Component } from 'react'

// import BoardShowNavBar from './board_show_nav_bar';
// // import PinIndexContainer from "../pin/pin_index_container";

// export default class BoardShow extends Component {
//     constructor(props) {
//         super(props);

//         this.openEditBoard = this.openEditBoard.bind(this);
//     }

//     componentDidMount() {
//         this.props.fetchSingleUser(this.props.currentUser.id);
//     }

//     openEditBoard(e) {
//         e.preventDefault();
//         this.props.openEditBoard(this.props.board.id)
//     }

//     render() {
//         const { currentUser, board, pins, boardsPins } = this.props;

//         const secretIcon = (board.secret) ? (
//             <div className="board-show visibility">
//                 <i className="fas fa-lock board-show" id="lock-icon"></i>
//             </div>
//         ) : (
//                 null
//             );
//         let boardPins = boardsPins
//             .filter(boardPin => board.id === boardPin.boardId)
//             .map(boardPin => pins[boardPin.pinId])
//             .filter(boardPin => boardPin !== undefined);

//         return (
//             <div className="board-show container">
//                 <div className="board-show header">
//                     <div className="board-show navbar-container">
//                         <BoardShowNavBar
//                             openEditBoard={this.openEditBoard}
//                             board={board}
//                             user={currentUser}
//                         />
//                     </div>
//                     <div className="board-show info">
//                         <div className="board-show main-info">
//                             <div className="board-show title">
//                                 {board.title}
//                             </div>
//                             <div className="board-show stats">
//                                 {secretIcon}
//                                 <div className="board-show count pin">
//                                     {`${board.pinIds.length} pins`}
//                                 </div>
//                                 <div className="board-show count follower">
//                                     ·  7 followers
//                 </div>
//                             </div>
//                         </div>
//                         <div className="board-show description">
//                             {board.description}
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div className="board-show pin-feed">
//                     <PinIndexContainer
//                         pins={boardPins}
//                         page="profile"
//                     />
//                 </div> */}
//             </div>
//         )
//     }
// }

// BoardShow.defaultProps = {
//     board: {
//         id: 0,
//         title: 'boardman',
//         description: 'boardman gets paid',
//         secret: false,
//         pinIds: []
//     }
// }