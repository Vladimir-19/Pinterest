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

        this.handleScroll = this.handleScroll.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.hide = this.hide.bind(this);
        this.newBoard = this.newBoard.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleEdit() {
        // this.props.openModal({ modal: 'editprofile', currentUser: this.props.currentUser })
        this.props.openModal("editprofile")
    }

    handleScroll() {
        const { prevScrollPos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const fadeInName = (prevScrollPos < currentScrollPos - 50);

        this.setState({
            fadeInName
        });
    }

    toggleShow() {
        let that = this;
        // debugger;
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
                        // className="profile-icon-container"
                        className="profile-icon-container-shadow"
                        onClick={this.handleEdit}>
                        <i className="fas fa-pencil-alt" ></i>
                    </button>
                    {/* <Link to="/settings#profile" className="profile-header-link">
                        <div className="profile-icon-container-shadow">
                            <div className="profile-icon-container">
                                <i className="fas fa-pencil-alt" id="edit-profile-icon"></i>
                            </div>
                        </div>
                    </Link> */}
                    <button
                        // className="profile-header-link"
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
                                <NavLink to="/pin-builder">
                                    <div className="option-container-shadow">
                                        <div className="option-container">
                                            <h3 className="option-label" id="create-pin">Create Pin</h3>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div id="create-options-triangle">
                            <svg width="24" height="24">
                                <path d="M0 24 L12 12 L24 24"></path>
                            </svg>
                        </div>
                    </div>
                <div>
                            <div className="profile-header-button" id="edit-profile">
                                {/* <Link to="/settings#profile" className="profile-header-link">
                                    <div className="profile-icon-container-shadow">
                                        <div className="profile-icon-container">
                                            <i className="fas fa-user-edit" id="edit-profile-icon" ></i>
                                        </div>
                                    </div>
                                </Link> */}
                            
                            </div>
                        </div>
                    {/* </div>  */}
                    {/* <div id="nav-bar-name-container">
                        <div id="nav-bar-name-fixed">
                            <div id="nav-bar-name" className={this.state.fadeInName ? "transitionIn" : "transitionOut"}>
                                
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default ProfileNavBar;