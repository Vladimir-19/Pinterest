import React from "react";
import { Link } from 'react-router-dom';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.board.id,
            title: this.props.board.title,
            description: this.props.board.description,
        };

        this.update = this.update.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    update(field) {
        return (e =>
            this.setState({ [field]: e.currentTarget.value })
        )
    }

    handleSave(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => location.reload());
    }

    handleCancel() {
        location.reload()
    }

    render() {
        const { board, formTitle } = this.props;

        if (this.state.success === 'Your board was successfully deleted!')
            return (
                <p>{this.state.success}</p>
            )

        return (
            <div className="edit-board container">
                <form className="edit-board form">
                    <div className="edit-board header">
                        <div className="edit-board form-title">
                            {formTitle}
                        </div>
                    </div>
                    <div className="edit-board body">
                        <div className="edit-board field name">
                            <div className="edit-board label-container">
                                <label
                                    htmlFor="name-input"
                                    className="edit-board label"
                                    id="name-label">
                                    Name
                                </label>
                            </div>
                            <div className="edit-board input-container">
                                <span>
                                    <input
                                        type="text"
                                        className="edit-board input name"
                                        id="name-input"
                                        placeholder='Like "Places to Go" or "Recipes to Make"'
                                        value={`${this.state.title}`}
                                        onChange={this.update('title')}
                                    />
                                    <div className="edit-board error-container">
                                        <div className="edit-board error">
                                            <span className="edit-board error-content"></span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="edit-board field description">
                            <div className="edit-board label-container">
                                <label
                                    htmlFor="description-input"
                                    className="edit-board label"
                                    id="description-label">
                                    Description
                                </label>
                            </div>
                            <div className="edit-board input-container">
                                <span>
                                    <textarea
                                        className="edit-board input description"
                                        id="description-input"
                                        placeholder="What's your board about?"
                                        value={`${this.state.description}`}
                                        onChange={this.update('description')}
                                        rows="3"
                                    />
                                    <div className="edit-board error-container">
                                        <div className="edit-board error">
                                            <span className="edit-board error-content"></span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="edit-board footer">
                        <div className="edit-board footer-part left">
                            {this.state.title === "" ?
                                <div className="create-board error-container">
                                    <div className="create-board error">
                                        Don't forget to name your board!
                                </div>
                                </div>
                                : null}
                        </div>
                        <div className="edit-board footer-part right">
                                {/* to={`/boards/${this.state.id}`} */}
                            <a
                                className="edit-board button cancel"
                                onClick={this.handleCancel}
                            >
                                Cancel
                            </a>
                            <button
                                className="edit-board button save"
                                onClick={this.handleSave}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditBoardForm;


