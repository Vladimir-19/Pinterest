import React from "react";
import { Link, NavLink } from "react-router-dom";

class ProfileNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollPos: window.pageYOffset,
            fadeInName: false,
            showCreateOptions: false
        };

        this.toggleShow = this.toggleShow.bind(this);
        this.hide = this.hide.bind(this);
        this.newBoard = this.newBoard.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    handleEdit() {
        this.props.openModal("editprofile")
    }

    toggleShow() {
        let that = this;
        this.setState({ showCreateOptions: !this.state.showCreateOptions })
    }

    hide(e) {
        if (e && e.relatedTarget) {
            e.relatedTarget.click();
        }
        this.setState({ showCreateOptions: false });
    }

    newBoard() {
        this.props.openModal("createboard");
    }

    render() {
        const { user, openModal, closeModal } = this.props;

        return (
            <div id="profile-nav-bar">
                <div className="profile-header-link">
                    <button
                        className="profile-icon-container-shadow"
                        onClick={this.handleEdit}>
                        <i className="fas fa-pencil-alt" ></i>
                    </button>
                    <button
                        className="profile-icon-container-shadow-two"
                        onClick={this.toggleShow}
                        onBlur={this.hide}
                    >
                        <div className="profile-icon-container-shadow">
                            <div className="profile-icon-container">
                                <i style={{"fontFamily" : "serif"}}>+</i>
                            </div>
                        </div>
                    </button>
                        <div id="create-options-container" style={{
                        visibility: this.state.showCreateOptions ?
                            "visible" :
                            "hidden"
                        }}>
                        <div id="create-options">
                            <div id="create-board-button" tabIndex="0" onClick={this.newBoard}>
                                <div className="option-container-shadow">
                                    <div className="option-container">
                                        <h3 className="option-label" id="create-board">Create board</h3>
                                    </div>
                                </div>
                            </div>
                            <div id="create-pin-button">
                                <Link 
                                    to="/pin-builder"
                                    style={{ "textDecoration" : "none"}}>
                                    <div className="option-container-shadow">
                                        <div className="option-container">
                                            <h3 className="option-label" id="create-pin">Create Pin</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileNavBar;