import React from 'react';
import { Link } from 'react-router-dom';

// export default class CreateBoardsPinsForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             message: false
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(e) {
//         // e.preventDefault();
//         // this.props.pinToBoard(boardPin).then(
//         //     this.setState(() => {
//         //         message: true;
//         //     }),
//         // );
//         e.preventDefault();
//         this.setState({ board_id: e.currentTarget.value },
//             // () => this.props.pinToBoard(biardPin)
//             () => this.props.pinToBoard(this.state)); //.then(this.props.closeModal));
//     }

//     componentDidMount() {
//         this.props.fetchBoards();
//     }

//     render() {
//         const { currentUser, boards } = this.props;
//         const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))
//         const success =
//             this.state.message === true ? (
//                 <h3 className="pin-board-success">
//                     Successfully saved to your board!
//                 </h3>
//             ) : null;


//         if (boards.length > 0) {
//             return (
//                 <>
//                     <div className="pinboard-container">
//                         <div onClick={this.props.closeModal} className="close-x">
//                             <i className="fas fa-times"></i>
//                         </div>
//                         <div className="modal-pinboard-text">
//                             <h1>Choose a board</h1>
//                         </div>
//                         <ul className="modal-pinboard-list">
//                             {currentUserBoards.map((board) => (
//                                 <li key={board.id}>
//                                     {board.title}
//                                     <button
//                                         className="pinboard-button"
//                                         onClick={this.handleClick}>
//                                         Save
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                         {success}
//                         <Link className="back-arrow-modal" to="/">
//                             <i className="fas fa-arrow-left"></i>
//                         </Link>
//                     </div>
//                 </>
//             );
//         } else {
//             return null;
//         }
//     }
// }

class CreateBoardPinForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            pin_id: this.props.pinId,
            board_id: null,
            // message: false
        };
        this.handleSave = this.handleSave.bind(this);

    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    // endgame(e) {
    //     e.preventDefault();
    //     // this.state.pinToBoard(this.state)
    //     console.log(this.state)
    // }

    handleSave(e) {
        // debugger
        e.preventDefault();
        // console.log(e.currentTarget.value)
        this.setState({ board_id: e.currentTarget.value },
            () => this.props.pinToBoard(this.state) //it helps not to press the button twice
                // .then(this.props.closeModal)
                );
        // this.setState({ board_id: e.currentTarget.value })

        // console.log(this.state)
        // this.endgame(e)
        // this.props.pinToBoard(boardPin).then(
        //     this.setState(() => {
        //         message: true;
        //     }),
        // );
    }

    render() {
        // debugger;
        const { currentUserId, pin, allBoards, closeModal } = this.props;
        // const Userboards = allBoards.filter(board => (board.userId === currentUser.id));
        const boards = allBoards.filter(board => board.userId === currentUserId);
        const boardListItems = boards.map(board => {
            const firstPinPhoto = (board.firstPin !== undefined) ? (
                <img src={board.pin.photo} className="board-list-item photo" />
            ) : null;
                // debugger;
            return (
                <li
                    key={board.id}
                    className="create-board-pin board-list-item"
                    value={board.id} 
                    // value={boards.id}
                    onClick={this.handleSave}
                >
                    <div className="board-list-item photo-container">
                        {firstPinPhoto}
                    </div>
                    <div className="board-list-item title">
                        {board.id}
                    </div>
                    {/* <div className="save-text">&nbsp;Save</div> */}
                    {/* <button value={board.id} onClick={(e) => this.handleSave(e)}>save</button> */}

                    <div className="board-list-item save-button">
                        <i className="fas fa-thumbtack save-icon"></i>
                        <div className="save-text">&nbsp;Save</div>
                        {/* //<div className="save-text">Save</div> */}
                    </div>
                </li>
            )
        })

        return (
            <div className="create-board-pin container">
                <div className="create-board-pin header">
                    <div className="create-board-pin form-title">Choose board</div>
                    <a
                        onClick={closeModal}
                        className="create-board-pin close-link"
                    >
                        <i className="fas fa-times close-icon"></i>
                    </a>
                </div>
                <div className="create-board-pin body">
                    {/* <div className="create-board-pin first-half">
                        <div className="create-board-pin photo-container">
                            <img src={pin.photo} className="create-board-pin photo" />
                        </div>
                    </div> */}
                    <div className="create-board-pin second-half">
                        <ul className="create-board-pin board-list">
                            {boardListItems}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBoardPinForm;