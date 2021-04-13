import React from 'react';
import { Link } from 'react-router-dom';

class CreateBoardPinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pin_id: this.props.pinId,
            board_id: null,
            message: false,
            error: false
        };
        this.handleSave = this.handleSave.bind(this);


    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    handleSave(e) {
        e.preventDefault();
        // this.setState({ board_id: e.currentTarget.value },
        //     () => this.props.pinToBoard(this.state) //it helps not to press the button twice
        //         // .then(this.props.closeModal)
        //         );
        // // this.setState({ board_id: e.currentTarget.value })

        this.saveBoardPin(e)
    }

    saveBoardPin(e) {
        e.preventDefault();
        const pinnedArr = this.props.allBoards.filter(board => (board.pinIds.includes(this.props.pinId)))
        const pinBoardMatch = pinnedArr.filter(board => {
            return (board.id === e.currentTarget.value)}
            )

        if (pinBoardMatch.length === 0) {
            this.setState({ board_id: e.currentTarget.value, message: true},
                () => this.props.pinToBoard(this.state)) //it helps not to press the button twice
            setTimeout(() => this.setState({ message: false }), 2000)
        } else {
            this.setState({ error: true });   
            setTimeout(() => this.setState({ error: false }), 2000)
        }
    }

    // print() {
    //     if (message === true) {
    //         <div className="create-board error-container">
    //             <div className="create-board error">
    //                 {/* {this.handleSave()} */}
    //                 Pin already exists on your board!
    //             </div>
    //         </div>
    //     } else null;
    // }

    render() {
        const { currentUserId, pin, allBoards, joinBoardsPin, pins, closeModal } = this.props; //closeModal
        // const Userboards = allBoards.filter(board => (board.userId === currentUser.id));

        // if (this.props.allBoards) : ();
        

        const boards = allBoards.filter(board => board.userId === currentUserId);
        const boardListItems = boards.map(board => {
            // debugger
        const firstPinPhoto = (board.firstPin !== undefined) ? (
            <img src={board.pin.last.photo} className="board-list-item photo" />
        ) : null;
            // console.log(pin)
        // const alreadyExist = board.filter(board => (board.pinIds.includes(this.props.pinId)));
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
                    <div className="create-board-pin form-title"> 
                    Choose board
                        {this.state.error === true ? 
                            <div className="create-board error-container">
                                <div className="create-board error">
                                {/* {this.handleSave()} */}
                                    Pin already exists on your board!
                                </div>
                            </div>
                            : null }
                        {this.state.message === true ?
                            <div className="create-board error-container">
                                <div className="create-board error" style={{"color": "blue"}}>
                                    {/* {this.handleSave()} */}
                                    Saved!
                                </div>
                            </div>
                            : null}
                    </div>
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