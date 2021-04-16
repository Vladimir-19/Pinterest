
import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import BoardItem from './board_item';
import BoardShowNavBar from './board_show_nav_bar'
import EditBoardContainer from './edit_board_form_container';

export default class BoardShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            fetched: false,
            openPin: false,
            openPinId: null,

            showCreateOptions: false,
            success: '',
            deleteMessage: '',
            deleted: false
        }

        // this.openEditBoard = this.openEditBoard.bind(this)
        // this.handleSave = this.handleSave.bind(this);

        this.deleteBoard = this.deleteBoard.bind(this);
        this.delete = this.delete.bind(this);

        this.toggleShow = this.toggleShow.bind(this);
        this.hide = this.hide.bind(this);

        this.handleCancel = this.handleCancel.bind(this);

    }

    handleCancel(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    toggleShow() {
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
        this.props.startLoading();
        this.props.fetchBoards();
        this.props.fetchPins().then(() => this.setState({ fetched: true}));
        setTimeout(() => this.props.stopLoading(), 600);
        // this.props.fetchUser(this.props.currentUser.id);
    }

    editBoardModal() {
        return (
            <EditBoardContainer
                board={this.props.board}
                closeModal={this.props.closeModal} />
        )
    }

    deleteBoard(e) {
        if (this.state.deleteMessage === 'Are you sure?') {
            this.delete(e)
        } else {
            this.setState({ deleteMessage: 'Are you sure?' })
        }
    }

    delete(e) {
        e.preventDefault();
        this.props.deleteBoard(this.props.board.id).then(() => this.props.history.push('/users/:userId'))
    } 
    

    render() {
        const { board, currentUser, pins, boardsPins, openEditBoard, modal, openModal, closeModal, loading } = this.props;
        
        let pinArr = [];
        if (this.state.fetched == true && board.pinIds.length > 0) {
            board.pinIds.map(pinId => {
                if (pinId != 'undefined') {
                    pinArr.push(pins[pinId])
                }
            })
        }

        const loader = (loading) ? (
            <div className="loading-background">
                <div className="loader"></div>
            </div>
        ) : null;

        if (pinArr.length > 0) {
            return (
                <div id='board-show-wrapper'>
                    {loader}
                    <Link to={`/users/${currentUser.id}`} style={{ "zIndex": "1000", "marginLeft": "50px", "color": "black" }}>
                        {/* margin-left */}
                        {/* <i className="fas fa-arrow-left"></i> */}
                        <i className="fas fa-long-arrow-alt-left" style={{ "fontSize": "170%" }}></i>
                    </Link>

                    <div id='board-show-header'>
                        <h1>{board.title}</h1>
                    </div>
                    <div id="profile-personal" style={{ "margin": "5px", "padding": "5px" }}>
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
                        {this.state.deleteMessage === 'Are you sure?' ?
                            <div className="insurance-box">
                                <p className='are-you-sure'>{this.state.deleteMessage}</p>
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
            return (
                <div id='board-show-wrapper'>
                    {loader}
                    <Link to={`/users/${currentUser.id}`} style={{ "zIndex": "1000", "marginLeft": "50px", "color": "black" }}>
                        {/* margin-left */}
                        {/* <i className="fas fa-arrow-left"></i> */}
                        <i className="fas fa-long-arrow-alt-left" style={{ "fontSize": "170%" }}></i>
                    </Link>

                    <div id='board-show-header'>
                        <h1>{board.title}</h1>
                    </div>
                    <div id="profile-personal" style={{ "margin": "5px", "padding": "5px" }}>
                        <h3>{board.description}</h3>
                        {/* {} */}
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
                            </div>
                        </div>
                        {board.title != "undefined" ?
                            <a className='delete-board' onClick={this.deleteBoard}>
                                <i className="far fa-trash-alt"></i>
                            </a>
                            : null}
                        {this.state.deleteMessage === 'Are you sure?' ?
                            <div className="insurance-box">
                                <p className='are-you-sure'>{this.state.deleteMessage}</p>
                                <div className="arrow-down"></div>
                            </div>

                            : null}
                </div>
                    <h2>This board has no pins yet!</h2>
                </div>
            )
        }
    }
}

BoardShow.defaultProps = {
    board: {
        id: 0,
        title: 'boardman',
        description: 'boardman gets paid',
        secret: false,
        pinIds: []
    }
}