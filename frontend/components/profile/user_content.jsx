// import React from 'react';
// import { Redirect } from 'react-router-dom';

// export default class UserProfile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pins: '',
//             // loading: true,
//             openBoard: false,
//             openBoardId: null
//         }
//         this.handleClick = this.handleClick.bind(this);
//         this.handleButton = this.handleButton.bind(this);
//         this.handleEdit = this.handleEdit.bind(this);
//         //
//         this.handleScroll = this.handleScroll.bind(this);
//         // this.newBoard = this.newBoard.bind(this);
//     }

//     componentDidMount() {
//         this.props.fetchBoards()
//         this.props.fetchPins().then(() => this.setState({ pins: 'fetched', loading: false }))
//         window.addEventListener("scroll", this.handleScroll);
//     }

//     handleScroll() {
//         const { prevScrollPos } = this.state;
//         const currentScrollPos = window.pageYOffset;
//         const fadeInName = (prevScrollPos < currentScrollPos - 50);

//         this.setState({
//             fadeInName
//         });
//     }

//     newBoard() {
//         this.props.openModal("createboard");
//     }

//     handleButton(e) {
//         let board = (e.currentTarget);
//         const boardId = (board.getAttribute('value'))
//         if (boardId) {
//             this.setState({ openBoard: true, openBoardId: boardId })
//         }
//     }

//     handleClick() {
//         // this.props.openModal({ modal: 'createboard', currentUser: this.props.currentUser })
//         this.props.openModal("createboard");
//     }

//     handleEdit() {
//         this.props.openModal({ modal: 'editprofile', currentUser: this.props.currentUser })
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.boards.length != this.props.boards.length) {
//             this.props.fetchBoards();
//         }
//     }


//     render() {
//         const { currentUser, boards, pins, openModal, closeModal } = this.props;

//         // if (this.state.loading) {
//         //     return <LoadingIcon />;
//         // }

//         if (this.state.openBoard == true && this.state.openBoardId) {
//             return <Redirect to={`/boards/${this.state.openBoardId}`} />
//         }

//         const name = currentUser.firstName && currentUser.lastName ? <div><span>{currentUser.firstName}</span><span>{currentUser.lastName}</span></div> : <span>Add Your Name</span>;

//         const profilePic = currentUser.photoUrl ? (
//             <img className="create-pin-profile-image" src={currentUser.photoUrl} />
//         ) : (
//                 <div className="create-pin-profile-image"><i className="fas fa-user-circle"></i></div>
//             );

//         const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))
//         // const currentUserPins = pins.filter(pin => (pin.userId === currentUser.id))
//         <>
//         <ul id='board-list'>
//             {/* THIS IS LOOK OF A BOARD AKA board index container  */}
//             {currentUserBoards.map((board, id) => {
//                 let pinArr;
//                 let allPins;
//                 let imageTag =
//                     <div id='pin-image-wrapper1'>
//                         {/* <div className='pin-noimg'></div> I DON'T NEED THIS */}
//                     </div>
//                 if (board.pinIds.length > 0) {
//                     pinArr = board.pinIds.map(pinId => {
//                         return pins[pinId]
//                     })
//                     if (pinArr.length > 0) {
//                         allPins = pinArr.map((pin, idx) => {
//                             if (idx < 3 && pin != 'undefined') {
//                                 return <img id='pin-image1' src={pin.photoUrl} />
//                             }
//                         })
//                         imageTag =
//                             <div id='pin-image-wrapper'>
//                                 {allPins}
//                             </div>
//                     }
//                 }
//                 return (
//                     <div value={board.id} id='board-show-list' onClick={this.handleButton}>
//                         {imageTag}
//                         <div id='board-text'>
//                             <li>{board.title}</li>
//                             <p>{board.pinIds.length} Pins</p>
//                         </div>
//                     </div>
//                 )
//             })}
//             <div className='edit-create-button-wrapper'>
//                 <button
//                     className="plus-board"
//                     onClick={this.handleClick}
//                 >
//                     <i className="fas fa-plus"></i>
//                 </button>
//                 <button className="plus-board"
//                     onClick={this.handleEdit}>
//                     <i className="fas fa-pencil-alt"></i>
//                 </button>
//             </div>
//         </ul>
//     </>

import React from "react";

import { Link, withRouter } from "react-router-dom";
// import LinesEllipsis from "react-lines-ellipsis";



const BoardIndexItem = ({ board, pins, currentUser, user, openEditBoard }) => {
    const numPins = board.pinIds.length;
    const pinA = (pins[0]) ? <img src={`${pins[0].photo}`}></img> : null;
    const pinB = (pins[1]) ? <img src={`${pins[1].photo}`}></img> : null;
    const pinC = (pins[2]) ? <img src={`${pins[2].photo}`}></img> : null;
    const pinD = (pins[3]) ? <img src={`${pins[3].photo}`}></img> : null;
    const pinE = (pins[4]) ? <img src={`${pins[4].photo}`}></img> : null;
    const pinF = (pins[5]) ? <img src={`${pins[5].photo}`}></img> : null;

    const secretIcon = (board.secret) ? (
        <div className="board-index-item visibility">
            <i className="fas fa-lock board-index-item" id="lock-icon"></i>
        </div>
    ) : null;
    const klass = (currentUser.username === user.username) ? 'show' : 'hide';

    return (
        <div className="board-index-item container">
            <Link
                to={{
                    pathname: `/${user.username}/${board.title}`,
                    state: {
                        fromProfile: true
                    }
                }}
                className="board-index-item link"
            >
                <div className="board-index-item content">
                    <div className="board-index-item hover-overlay"></div>
                    <div>
                        <div className="board-index-item pins-container">
                            <div className="board-index-item pins">
                                <div className="board-index-item pin" id="a">{pinA}</div>
                                <div className="board-index-item pin" id="b">{pinB}</div>
                                <div className="board-index-item pin" id="c">{pinC}</div>
                                <div className="board-index-item pin" id="d">{pinD}</div>
                                <div className="board-index-item pin" id="e">{pinE}</div>
                                <div className="board-index-item pin" id="f">{pinF}</div>
                            </div>
                        </div>
                        <div className="board-index-item info">
                            <div className="board-index-item info-details">
                                <div className="board-index-item title">
                                    {board.title}
                                </div>
                                <div className="board-index-item additional">
                                    {secretIcon}
                                    <div className="board-index-item pin-count">
                                        {numPins} Pins
                  </div>
                                </div>
                            </div>
                            <button
                                className={`board-index-item edit-button ${klass}`}
                                onClick={(e, boardId) => openEditBoard(e, board.id)}
                            >
                                <i className="fas fa-pencil-alt board-index-item" id="edit-icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default withRouter(BoardIndexItem);