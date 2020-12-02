import React from 'react';
import {
    connect
} from 'react-redux';

// import {
//     openModal, closeModal
// } from '../../actions/modal_actions';

import {
    fetchPins
} from '../../actions/pin_actions';

import {
    fetchBoards
} from '../../actions/board_actions';

import { createBoard } from '../../actions/board_actions';


export default class CreateBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="session-errors"
                        key={`error-${i}`}>
                            {error}
                    </li>
                ))}
            </ul>
        )
    }

    handleSubmit(e) {
        const board = Object.assign({}, this.state)
        this.props.createBoard(board) //.then((this.props.closeModal) && window.location.reload())
    }

    return() {
        return (
            <div>
                <div>
                    <i className="fas fa-times"></i>  
                </div>
                <div>
                    <h1>Create board</h1>
                </div>
                <div>
                    <span>Name</span>
                    <h1>
                        <input 
                        type="text"
                        value={this.state.title}
                        onChange={this.handleUpdate('title')}
                        placehilder='Like "Place to Go" or "Reciipes to Make"'
                        />
                    </h1>
                    <span>Details</span>
                    <p>
                        <input type="text"
                        value={this.state.description}
                        onChange={this.handleUpdate('description')}
                        placeholder='Optional, additional info aboout your board'
                        />
                    </p>
                    <button onClick={this.handleSubmit}>Create</button>
                    {this.renderErrors()}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    // currentUser: state.entities.users[state.session.id],
    pins: Object.values(state.entities.pins),
    boards: Object.values(state.entities.boards),
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    // openModal: modal => dispatch(openModal(modal)),
    // closeModal: () => dispatch(closeModal()),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoards: () => dispatch(fetchBoards()),
    createBoard: (board) => dispatch(createBoard(board)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateBoard);