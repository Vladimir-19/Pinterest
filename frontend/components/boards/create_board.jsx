import React from "react";

class CreateBoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;

        this.update = this.update.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(e) {
        this.setState({ "title": e.currentTarget.value });
    }

    updateDescription(e) {
        this.setState({"description": e.currentTarget.value });
    }

    renderErrors() {
        return (
            <ul > 
                {this.props.errors.map((error, i) => (
                    <li
                        className="session-errors"
                        key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleCreate(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => location.reload());
    }

    render() {
        const { errors, formType } = this.props;

        return (
            <div id="create-board-container">
                <div className="create-board" id="sizing">
                    <div >
                    <div className="create-board" id="header">
                        <h1 className="create-board" id="header-title-container">
                            Create board
                        </h1>
                    </div>
                    <div className="create-board" id="body">
                        <div className="create-board" id="form-container">
                            <form className="create-board" id="form" onSubmit={null}>
                                <div className="create-board" id="fields">
                                    <div className="create-board field-container" id="name">
                                        <div className="create-board label-container">
                                            <label
                                                htmlFor="name-input"
                                                className="create-board label"
                                                id="name-label">
                                                <div className="create-board label-content">
                                                    Name
                                                </div>
                                            </label>
                                        </div>
                                        <div className="create-board input-container">
                                            <span>
                                                <input
                                                    type="text"
                                                    className="create-board name-input"
                                                    // id="name-input"
                                                    placeholder='Like "Places to Go" or "Recipes to Make"'
                                                    onChange={this.update}
                                                />
                                                <div className="create-board error-container">
                                                    <div className="create-board error">
                                                            {this.renderErrors()}
                                                    </div>
                                                </div>
                                            </span>
                                        </div>

                                        <div className="create-board label-container">
                                            <label
                                                htmlFor="name-input"
                                                className="create-board label"
                                                id="name-label">
                                                <div className="create-board label-content">
                                                    Description
                                                </div>
                                            </label>
                                        </div>
                                        <div className="create-board input-container">
                                            <span>
                                                <input
                                                    type="text"
                                                    className="create-board name-input"
                                                    id="name-input"
                                                    placeholder="What's your board about?"
                                                    onChange={this.updateDescription}
                                                    style={{
                                                        "height" : "59px",
                                                        "marginTop" : "20px"
                                                    }}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="create-board footer">
                                    <div className="create-board container">
                                        <button
                                            className="create-board button"
                                            id="create"
                                            onClick={this.handleCreate}
                                        >
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBoardForm;
