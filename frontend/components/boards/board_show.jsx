
import React from 'react';
import { Link } from 'react-router-dom';
// import LoadingIcon from '../loading/loading';
import { Redirect } from 'react-router-dom';
import BoardItem from './board_item';
// import PinIndexContainer from '../pins/pin_index_container';
import BoardShowNavBar from './board_show_nav_bar'
import EditBoardContainer from './edit_board_form_container';
//delte
import edit from './edit';
// import { closeModal } from '../../actions/modal_actions';

export default class BoardShow extends React.Component {
    constructor(props) {
        // debugger
        super(props) //props.board.id etc
        this.state = {
            loading: true,
            fetched: false,
            openPin: false,
            openPinId: null,

            showCreateOptions: false,
            success: '',
            ask: '',
            deleted: false
        }

        // this.openEditBoard = this.openEditBoard.bind(this)
        // this.handleSave = this.handleSave.bind(this);
        
        this.deleteBoard = this.deleteBoard.bind(this);
        this.deleteForSure = this.deleteForSure.bind(this);
        this.checkPin = this.checkPin.bind(this);

        this.toggleShow = this.toggleShow.bind(this);
        this.hide = this.hide.bind(this);

        this.handleCancel = this.handleCancel.bind(this);

    }

    handleCancel(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    toggleShow() {
        // debugger;
        this.setState({ showCreateOptions: !this.state.showCreateOptions })
    }
    hide(e) {
        if (e && e.relatedTarget) {
            e.relatedTarget.click();
        }
        this.setState({ showCreateOptions: false });
    }

    // handleSave(e) {
    //     e.preventDefault();
    //     // debugger
    //     this.props.processForm(this.state)
    // }
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
        // this.props.fetchUser(this.props.currentUser.id);
    }

    // openEditBoard() {
    //     e.preventDefault();
    //     this.props.openEditBoard(this.props.board.id)
    // }

    editBoardModal() {
        // debugger;
        return (
            <EditBoardContainer
            board={this.props.board}
            closeModal={this.props.closeModal}/>
        )
    }

    deleteBoard(e) {
        // debugger
        if (this.state.ask === 'Are you sure?') {
            this.deleteForSure(e)
        } else {
            this.setState({ ask: 'Are you sure?' })
        }
        // this.props.deleteBoard(this.props.board.id).then(() => this.checkPin()); //then(() => location.reload());
    }
    deleteForSure(e) {
        //  debugger
        e.preventDefault();
        this.props.deleteBoard(this.props.board.id).then(() => this.checkPin())
    } //then(() => window.history.go(-1));
    checkPin() {
        // if (this.errors.length === 'undefind') {
        this.props.history.push('/users/:userId');
        // } else {
        // this.setState({ ask: '' })
        // }
    }

    render() {
        const { board, currentUser, pins, boardsPins, openEditBoard, modal, openModal, closeModal} = this.props;
        // if (!modal) return null;

        // debugger
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

                    <Link to={`/users/${currentUser.id}`} style={{ "zIndex": "1000", "marginLeft" : "50px", "color" : "black" }}> 
                        {/* margin-left */}
                        {/* <i className="fas fa-arrow-left"></i> */}
                        <i className="fas fa-long-arrow-alt-left" style={{ "fontSize": "170%" }}></i>
                    </Link>

                    <div id='board-show-header'>
                        <h1>{board.title}</h1>
                    </div>
                    <div id="profile-personal" style={{"margin" : "5px", "padding" : "5px"}}>
                        <h3>{board.description}</h3>
                    </div>
                    {/* here  */}
                    {/* <BoardShowNavBar
                        openEditBoard={this.openEditBoard}
                        board={board}
                        user={currentUser}
                    /> */}
                    {/* <button
                        className="board-show button"
                        onClick={(e, boardId) => openEditBoard(e, board.id)} // was boardId
                    >
                        <i className="fas fa-pencil-alt board-show icon" id="edit-board-icon"></i>
                    </button> */}
                    
                    {/* {this.editBoardModal()} */}
                    <div id="profile-nav-bar">
                        <div >
                            <a
                                className="xxx"
                                onClick={this.toggleShow}
                                onBlur={this.hide}
                            >
                                <div >
                                    <div >
                                        <i className="far fa-edit" style={{ color: "gray", fontSize: "200%" }}></i>
                                    </div>
                                </div>
                            </a>
                            <div id="create-pinboard-container" style={{
                                visibility: this.state.showCreateOptions ?
                                    "visible" :
                                    "hidden"
                            }}>
                                <div className="modal-container" >
                                    <div className="modal-background" id={modal} onClick={closeModal}>
                                        <div className="modal-child" id={`${modal}-child`} onClick={e => e.stopPropagation()}>
                                            {this.editBoardModal()}
                                        </div>
                                    </div>
                                </div>

                                {/* <h3 >
                                {this.editBoardModal()}
                            </h3> */}
                                {/* <div >
                                <div id="create-pin-button">
                                </div>
                            </div> */}

                            </div>
                        </div>
                        {board.title != "undefined" ?
                            <a className='delete-board' onClick={this.deleteBoard}>
                                <i className="far fa-trash-alt"></i>
                            </a>
                            : null}
                            {this.state.ask === 'Are you sure?' ? 
                            <div className="insurance-box">
                                <p className='are-you-sure'>{this.state.ask}</p>
                                <div className="arrow-down"></div>
                            </div>
                            
                            : null}
                    </div>

                

                    <ul id='board-list-wrap'>
                        {pinArr.map((pin) => (
                            <BoardItem
                                pin={pin}
                                key={pin.id}
                                page="profile"
                            />
                            // <PinIndexContainer
                            //     pin={pin}
                            //     key={pin.id}
                            //     page="profile"/>
                        ))}
                    </ul>
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
            
            <h1>This board has no pins yet!</h1>
        }
    }
}