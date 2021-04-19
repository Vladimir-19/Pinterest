import React from "react";
import { Link, NavLink } from "react-router-dom";


class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this._getInitialState();

        this._getInitialState = this._getInitialState.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    _getInitialState() {
        const user = this.props.currentUser;
        const initialState = Object.assign({}, {
            id: user.id,
            first_name: user.firstName || "",
            last_name: user.lastName || "",
            username: user.username,
            email: user.email,
            description: user.description || "",
            location: user.location || "",
            photo: user.photo,
            photoPreview: null
        });

        return initialState
    }

    handleCancel(e) {
        e.preventDefault();

        this.setState(this._getInitialState);
    }

    handleDone(e) {
        e.preventDefault();
        const details = Object.assign({}, this.state);
        delete details["id"];
        delete details["photoPreview"];
        if (!this.state.photoPreview) {
            delete details["photo"];
        }

        const formData = new FormData();
        for (let key in details) {
            formData.append(`user[${key}]`, details[key])
        }
        this.props.updateUser(formData, this.state.id)
            .then(() => location.reload(false))
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photo: file, photoPreview: fileReader.result });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    changeInput(field) {
        return (
            e => this.setState({ [field]: e.currentTarget.value })
        );
    }

    render() {
        const { currentUser } = this.props;
        const profilePhoto = (this.state.photo) ? (
            <img src={this.state.photo} alt="profile_photo" className="edit-profile" id="photo" />
        ) : (
                <i className="far fa-user-circle" style={{ "fontSize": "80px", "color": "#575252"}}></i>
            );
        const displayPhoto = (this.state.photoPreview) ? (
            <img src={this.state.photoPreview} className="edit-profile" id="photo" />
        ) : (
                profilePhoto
            );

        let currentState = Object.assign({}, this.state);
        const disabled = (JSON.stringify(currentState) === JSON.stringify(this._getInitialState())) ? "disabled" : "";
        return (
            <div id="settings-container">
                <form id="edit-profile-form">
                    <div className="edit-profile" id="header-border">
                        <div className="edit-profile" id="header-flex">
                            <div className="edit-profile" id="title-container">
                                <div className="edit-profile" id="title">
                                    <h4 className="edit-profile" id="title-label">Edit Profile</h4>
                                    <div className="edit-profile" id="subtitle">
                                        People on Pinterest will get to know you with the info below
                                    </div>          
                                </div>
                            </div>
                            <div className="edit-profile" id="buttons-container">
                                <div className="edit-profile" id="buttons">
                                    <div className="edit-profile button-container">
                                        <button
                                            className={`edit-profile done button ${disabled}`}
                                            id="done-button"
                                            onClick={this.handleDone}
                                        >
                                            <div className={`edit-profile done button-label ${disabled}`}>Done</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edit-profile" id="photo-change-container">
                        <div className="edit-profile" id="photo-container-size">
                            <div className="edit-profile" id="photo-frame">
                                {displayPhoto}
                            </div>
                        </div>
                        <div className="edit-profile" id="change-photo-button">
                            <input
                                type="file"
                                onChange={this.handleFile}
                                className="edit-profile button"
                                id="change-button"
                            />
                            <a
                                className="edit-profile button"
                                id="change-photo"
                                onClick={() => document.getElementById("change-button").click()}
                            >
                                <div className="edit-profile button-label" id="change-photo">Change</div>
                            </a>
                        </div>
                    </div>
                    <div className="edit-profile" id="name-container">
                        <div className="edit-profile" id="full-name">
                            <div className="edit-profile" id="first-name-wrapper">
                                <div className="edit-profile" id="first-name-container">
                                    <div className="edit-profile field-container" id="first-name">
                                        <div className="edit-profile label-container">
                                            <label className="edit-profile label">First name</label>
                                        </div>
                                        <div className="edit-profile input-container">
                                            <input
                                                type="text"
                                                placeholder="Ex. Jo"
                                                value={this.state.first_name}
                                                onChange={this.changeInput("first_name")}
                                                className="edit-profile input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edit-profile" id="last-name-wrapper">
                                <div className="edit-profile" id="last-name-container">
                                    <div className="edit-profile field-container" id="last-name">
                                        <div className="edit-profile label-container">
                                            <label className="edit-profile label">Last name</label>
                                        </div>
                                        <div className="edit-profile input-container">
                                            <input
                                                type="text"
                                                placeholder="Ex. Jo"
                                                value={this.state.last_name}
                                                onChange={this.changeInput("last_name")}
                                                className="edit-profile input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edit-profile" id="email-wrapper">
                        <div className="edit-profile" id="email-container">
                            <div className="edit-profile field-container" id="email">
                                <div className="edit-profile label-container">
                                    <label className="edit-profile label">Email</label>
                                </div>
                                <div className="edit-profile input-container">
                                    <input
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.changeInput("email")}
                                        className="edit-profile input"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edit-profile" id="description-wrapper">
                        <div className="edit-profile" id="description-container">
                            <div className="edit-profile field-container" id="description">
                                <div className="edit-profile label-container">
                                    <label className="edit-profile label">Description</label>
                                </div>
                                <div className="edit-profile input-container">
                                    <textarea
                                        placeholder="Tell us a little bit about your page"
                                        value={this.state.description}
                                        onChange={this.changeInput("description")}
                                        className="edit-profile input"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edit-profile label-container">
                        <label className="edit-profile label">location</label>
                    </div>
                    <div className="edit-profile input-container">
                        <input
                            type="text"
                            placeholder="Ex. New York City"
                            value={this.state.location}
                            onChange={this.changeInput("location")}
                            className="edit-profile input"
                        />
                    </div>
                </form>
            </div>
        )
    }
};

export default EditProfileForm;