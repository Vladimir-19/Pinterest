import React from 'react';
import { Link } from 'react-router-dom';

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
        const { currentUserId, pin, allBoards, joinBoardsPin, pins, closeModal } = this.props; //closeModal
        // const Userboards = allBoards.filter(board => (board.userId === currentUser.id));
        const boards = allBoards.filter(board => board.userId === currentUserId);
        const boardListItems = boards.map(board => {
            // debugger
        const firstPinPhoto = (board.firstPin !== undefined) ? (
            <img src={board.pin.last.photo} className="board-list-item photo" />
        ) : null;
            // console.log(pin)
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
                        {board.title}
                    </div>
                    {/* <div className="save-text">&nbsp;Save</div> */}
                    {/* <button value={board.id} onClick={(e) => this.handleSave(e)}>save</button> */}

                    <div className="board-list-item save-button">
                        <div>&nbsp;<i className="fas fa-thumbtack save-icon"></i></div> 
                        {/* //<div className="save-text">Save</div> */}
                    </div>
                </li>
            )
        })

        return (
            <div >
                {/* className="create-board-pin container" */}
                <div >
                    {/* className="create-board-pin header" */}
                    <div className="create-board-pin form-title">Choose board</div>
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