import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);

    }

    handleSave(e) {
        e.preventDefault();
        // debugger
        this.props.processForm(this.state)
    }

    render() {
        const { board } = this.props;

        return (

            <div >

                <form >
                    <div >
                        {formTitle}
                    </div>

                    <div>
                        <label
                            htmlFor="name-input"
                            id="name-label">
                            Name
                                </label>
                        <div>
                            <span>
                                <input
                                    type="text"
                                    id="name-input"
                                    placeholder='Like "Places to Go" or "Recipes to Make"'
                                    value={`${this.board.title}`}
                                    onChange={this.update('title')}
                                // onChange={() => this.update('title')}
                                />
                            </span>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="description-input"
                            id="description-label">
                            Description
                                </label>
                        <div>
                            {/* <span>
                                <textarea
                                    id="description-input"
                                    placeholder="What's your board about?"
                                    value={`${this.state.description}`}
                                    onChange={this.update('description')}
                                    rows="3"
                                />
                                <div>
                                    <span className="edit-board error-content"></span>
                                </div>
                            </span> */}
                        </div>
                    </div>

                    <div>
                        <div>
                            
                        </div>
                        <div >
                            
                            <button
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

export default withRouter(Edit);