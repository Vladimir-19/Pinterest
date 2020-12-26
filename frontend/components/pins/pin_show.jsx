import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    // to make API calls (the component has been mounted and is available to the DOM)
    componentDidMount() {
        this.props.fetchBoards();
        this.props.fetchPins();
        this.props.fetchPin(this.props.match.params.pinId);
        this.props.clearPinErrors();
    }


    goBack(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.goBack();
    }

    render() {
        const { pin, users, currentUserId, openEditPin, openNewBoardPin } = this.props;
        if (!pin)
            return <div style={{ "paddingTop": "65px" }}>Loading...</div>;

        const pinOwner = pin.user || { email: "" };
        const pinOwnerFullName = `${pinOwner.firstName} ${pinOwner.lastName}`;
        const imgLink = (pin.url === "") ? (
            <div className="pin-show pin-link">
                <img src={pin.photo} className="pin-show pin-photo" />
            </div>
        ) : (
                <a
                    href={pin.url}
                    target="_blank"
                    className="pin-show pin-link url">
                    <img src={pin.photo} className="pin-show pin-photo" />
                </a>
            );
        const editPinLink = (pin.userId === currentUserId) ? (
            <a className="pin-show edit-pin-link"
                onClick={() => openEditPin(pin.id)}>
                <i className="fas fa-pencil-alt edit-pin-icon"></i>
            </a>
        ) : (
                null
            );

        const pinSource = (pin.url === "") ? (
            <a
                href={pin.url}
                target="_blank"
                className="pin-show source-link"
            >
                <div>{pin.url}</div>
            </a>
        ) : (
                <div className="pin-show source-link">
                    <div> Uploaded by&nbsp;
            <Link to={`/${pinOwner.email}`}>
                            <strong>{pinOwnerFullName}</strong>
                        </Link>
                    </div>
                </div>
            );
        const pinTitle = (pin.url === "") ? (
            <div className="pin-show title">{pin.title}</div>
        ) : (
                <a
                    href={pin.url}
                    target="_blank"
                    className="pin-show title">
                    {pin.title}
                </a>
            );

        const pinCreatePhoto = (
            <Link
                to={`/${pinOwner.email}`}
                className="pin-show profile-link-frame">
                <img src={pinOwner.photo} className="pin-show profile-link-photo" />
                <div className="pin-show overlay"></div>
            </Link>
        );
        const name = (pinOwner.id === currentUserId) ? (
            "You"
        ) : (
                { pinOwnerFullName }
            )

        const pinCreditText = (
            <div className="pin-show credit-summary">
                <Link
                    to={`/${pinOwner.email}`}
                    className="pin-show credit-link"
                >
                    <strong>{pinOwnerFullName}</strong>
                </Link>
                <span>&nbsp;saved to&nbsp;</span>
                <Link
                    to={`/${pinOwner.email}/${pin.boardTitle}`}
                    className="pin-show credit-link">
                    <strong>{pin.boardTitle}</strong>
                </Link>
            </div>
        );

        return (
            <div
                className="pin-show main-container"
                onClick={this.goBack}>
                <a
                    className="pin-show back-button"
                    onClick={this.goBack}>
                    <i className="fas fa-arrow-left back-icon"></i>
                </a>
                <div className="pin-show wrapper"
                    onClick={this.goBack}>
                    <div className="pin-show container"
                        onClick={(e) => e.stopPropagation()}>
                        <div className="pin-show first-half">
                            <div className="pin-show link-area">
                                {imgLink}
                                <div className="pin-show overlay"></div>
                            </div>
                        </div>
                        <div className="pin-show second-half">
                            <div className="pin-show nav-bar">
                                {editPinLink}
                                <a
                                    className="pin-show save-board-pin-link"
                                    onClick={() => openNewBoardPin(pin.id)}>
                                    <div className="pin-show save-board-pin-text">Save</div>
                                </a>
                            </div>
                            <div className="pin-show info">
                                {pinSource}
                                {pinTitle}
                                <div className="pin-show description">
                                    {pin.description}
                                </div>
                            </div>
                            <div className="pin-show credit">
                                {pinCreatePhoto}
                                {pinCreditText}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// export default PinShow;
export default withRouter(PinShow)
            // import React from 'react';
            // import { Link } from 'react-router-dom';
            // // import DropdownContainer from '../dropdown/dropdown_container';
            // import { withRouter } from 'react-router-dom';

            // class PinShow extends React.Component {
            //     constructor(props) {
            //         super(props);
            //         this.state = {
            //             success: '',
            //             ask: '',
            //             deleted: false
            //         }
            //         this.deletePin = this.deletePin.bind(this);
            //         this.deleteForSure = this.deleteForSure.bind(this);
            //         this.checkPin = this.checkPin.bind(this);
            //     }

            //     componentDidMount() {
            //         this.props.fetchBoards();
            //         this.props.fetchPins();
            //         this.props.fetchPin(this.props.match.params.pinId);
            //         this.props.clearPinErrors();
            //     }

            //     deletePin(e) {
            //         // e.preventDefault();
            //         if (this.state.ask === 'Are you sure?') {
            //             this.deleteForSure(e)
            //         } else {
            //             this.setState({ ask: 'Are you sure?' })
            //         }
            //     }

            //     deleteForSure(e) {
            //         // e.preventDefault();
            //         this.props.deletePin(this.props.pin.id).then(() => this.checkPin())
            //     }

            //     checkPin() {
            //         if (this.props.errors.length === 0) {
            //             this.props.history.push('/');
            //         } else {
            //             this.setState({ ask: '' })
            //         }
            //     }

            //     renderErrors() {
            //         return (
            //             <ul>
            //                 {this.props.errors.map((error, i) => (
            //                     <li className="session-errors"
            //                         key={`error-${i}`}>
            //                         {error}
            //                     </li>
            //                 ))}
            //             </ul>
            //         );
            //     }

            //     render() {
            //         const { pins, pin, currentUser, board } = this.props;

            //         if (!pin) return null;

            //         if (this.state.success === 'Your pin was successfully deleted!')
            //             return (
            //                 <p>{this.state.success}</p>
            //             )

            //         return (
            //             <div className="arrow-wrapper">
            //                 <div className="pin-show-wrapper">
            //                     <div className="pin-show-container">
            //                         <div className="pin-show-text">
            //                             {/* <div id='dropdown-pin-show'><DropdownContainer pinId={pin.id} /></div> */}
            //                             <div id='pin-show-details'>
            //                                 {this.renderErrors()}
            //                                 {pin.sourceLink != "undefined" ? <a href={`http://${pin.sourceLink}`} target='_blank'>{pin.sourceLink}</a> : null}
            //                                 {pin.title != "undefined" ? <h1>{pin.title}</h1> : null}
            //                                 {pin.description != "undefined" ? <p>{pin.description}</p> : null}
            //                             </div>
            //                         </div>
            //                         <div className="pin-show-image">
            //                             <img className="pin-show-item" src={pin.photoUrl} />
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className='pin-show-button-wrapper'>
            //                     <Link to='/'>
            //                         <div className='plus-board'>
            //                             <i className="fas fa-arrow-left"></i>
            //                         </div>
            //                     </Link>
            //                     {pin.title != "undefined" ? <button className='plus-board' onClick={this.deletePin}>
            //                         <i className='fas fa-trash-alt'></i>
            //                     </button>
            //                         : null}
            //                     {this.state.ask === 'Are you sure?' ? <p className='are-you-sure'>{this.state.ask}</p> : null}
            //                 </div>
            //             </div>
            //         );


            //     }
            // }

            // export default withRouter(PinShow);