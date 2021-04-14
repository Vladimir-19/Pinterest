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
            this.setState({ error: true })   
            setTimeout(() => this.setState({ error: false }), 2000)
        }
    }

    render() {
        const { currentUserId, allBoards, closeModal, pins } = this.props; 

        const boards = allBoards.filter(board => board.userId === currentUserId);
        const boardListItems = boards.map(board => {
        // debugger
        let i = pins[board.pinIds[0]]
        const pinPhoto = (i !== undefined) ? (
            <img src={i.photo} className="pinBoard-list photo"/>
            ) : null;
            return (
                <li
                    key={board.id}
                    className="create-board-pin pinBoard-list"
                    value={board.id} 
                    // value={boards.id}
                    onClick={this.handleSave}
                    >
                    <div className="pinBoard-list photo-container" >
                        {pinPhoto}
                    </div>
                    <div className="pinBoard-list title">
                        {board.title}
                    </div>
                    <div className="pinBoard-list save-button">
                        <div>&nbsp;<i className="fas fa-thumbtack save-icon"></i></div> 
                    </div>
                </li>
            )
        })

        return (
            <div >
                <div className="create-board-pin form-title"> 
                    Choose board
                        {this.state.error === true ? 
                            <div className="create-board error-container">
                                <div className="create-board error">
                                    Already on your board!
                                </div>
                            </div>
                            : null }
                        {this.state.message === true ?
                            <div className="create-board error-container">
                                <div className="create-board error" style={{"color": "blue"}}>
                                    Saved!
                                </div>
                            </div>
                            : null}
                </div>
                <div className="create-board-pin body">
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