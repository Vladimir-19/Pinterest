import React from 'react';


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


