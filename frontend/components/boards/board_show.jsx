
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

export default class BoardShow extends React.Component {
    constructor(props) {
        // debugger
        super(props) //props.board.id etc
        this.state = {
            loading: true,
            fetched: false,
            openPin: false,
            openPinId: null,

            success: '',
            ask: '',
            deleted: false
        }

        // this.openEditBoard = this.openEditBoard.bind(this)
        this.handleSave = this.handleSave.bind(this);
        
        this.deleteBoard = this.deleteBoard.bind(this);
        this.deleteForSure = this.deleteForSure.bind(this);
        this.checkPin = this.checkPin.bind(this);

    }
    handleSave(e) {
        e.preventDefault();
        // debugger
        this.props.processForm(this.state)
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
            board={this.props.board}/>
        )
    }

    deleteBoard(e) {
        // debugger
        if (this.state.ask === 'are you sure?') {
            this.deleteForSure(e)
        } else {
            this.setState({ ask: 'are you sure?' })
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
        const { board, currentUser, pins, boardsPins, openEditBoard} = this.props;
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
        // let hoho = board.id


        if (pinArr.length >= 0) {
            return (
                <div id='board-show-wrapper'>
                    <div id='board-show-header'>
                        <h1>{board.title}</h1>
                     
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
                    {this.editBoardModal()}

                

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
                    {board.title != "undefined" ?
                        <button className='plus-board' onClick={this.deleteBoard}>
                            <i className='fas fa-trash-alt'></i>
                        </button>
                        : null}
                    {this.state.ask === 'are you sure?' ? <p className='are-you-sure'>{this.state.ask}</p> : null}
                </div>
                
            )
        } else {
            
            <p>this board has no pins yet!</p>
        }
    }
}