// import React from "react";
// import { Link } from "react-router-dom";
// import { withRouter } from 'react-router-dom';

// // import ShowDropdown from "./show_sropdown_container";
// import DropdownContainer from "./show_sropdown_container";

// import EditPinForm from './edit_pin_form';

// class PinShow extends React.Component {
//     constructor(props) {
//         super(props);

//         // this.goBack = this.goBack.bind(this);
//         // //this 
//         // this.hideBoardList = this.hideBoardList.bind(this);
//         // this.selectBoard = this.selectBoard.bind(this);
//         // this.handleSave = this.handleSave.bind(this);

//     }
//     // // this 
//     // hideBoardList(e) {
//     //     this.setState({ boardList: false });
//     // }

//     // handleSave(e) {
//     //     e.stopPropagation();
//     //     const details = Object.assign({}, this.state);
//     //     delete details["photoPreview"];
//     //     delete details["board"];
//     //     delete details["boardList"];

//     //     const formData = new FormData();
//     //     for (let key in details) {
//     //         formData.append(`pin[${key}]`, details[key])
//     //     };

//     //     const pinToBoard = (boardPin) => this.props.pinToBoard(boardPin);
//     //     const boardId = this.state.boardId;

//     //     return this.props.processForm(formData)
//     //         .then(res => (pinToBoard({
//     //             "board_id": boardId,
//     //             "pin_id": parseInt(Object.keys(res.pin)[0])
//     //         })))
//     //         .then(() => window.history.go(-1));
//     // }

//     // to make API calls (the component has been mounted and is available to the DOM)
//     componentDidMount() {
//         // this.props.fetchPin(this.props.match.params.pinId);
//         this.props.fetchPin(this.props.match.params.pinId);
//         // //this         
//         // this.props.fetchBoards();
//         // this.props.fetchPins();

//     }

//     goBack(e) {
//         e.preventDefault();
//         e.stopPropagation();
//         this.props.history.goBack();
//     }

//     // onChange()
//     render() {
//         const { pin, users, currentUserId, openEditPin, openNewBoardPin } = this.props;
//         if (!pin)
//             return <div style={{ "paddingTop": "65px" }}>Loading...</div>;

//         //     //this
//         // const  clickSave = (this.state.boardIdi == null) ? (null) : (this.handleSave);

//         const pinOwner = pin.user || { email: "" };
//         const pinOwnerFullName = `${pinOwner.firstName} ${pinOwner.lastName}`;
//         const imgLink = (pin.url === "") ? (
//             <div className="pin-show pin-link">
//                 <img src={pin.photo} className="pin-show pin-photo" />
//             </div>
//         ) : (
//                 <a
//                     href={pin.url}
//                     target="_blank"
//                     className="pin-show pin-link url">
//                     <img src={pin.photo} className="pin-show pin-photo" />
//                 </a>
//             );
//         const editPinLink = (pin.userId === currentUserId) ? (
//             // <a className="pin-show edit-pin-link"
//             //     onClick={() => openEditPin(pin.id)}>
//             //     <i className="fas fa-pencil-alt edit-pin-icon"></i>
//             // </a>
//             <EditPinForm 
//                 key={pin.id + pin.title}
//                 pin={pin}
//                 updatePin={this.props.updatePin}
//                 />
//         ) : (
//                 null
//             );

//         const pinSource = (pin.url === "") ? (
//             <a
//                 href={pin.url}
//                 target="_blank"
//                 className="pin-show source-link"
//             >
//                 <div>{pin.url}</div>
//             </a>
//             ) : (
//                 <div className="pin-show source-link">
//                     <div> Uploaded by&nbsp;
//                         <Link to={`/${pinOwner.email}`}>
//                             <strong>{pinOwnerFullName}</strong>
//                         </Link>
//                     </div>
//                 </div>
//             );
//         const pinTitle = (pin.url === "") ? (
//             <div className="pin-show title">{pin.title}</div>
//         ) : (
//                 <a
//                     href={pin.url}
//                     target="_blank"
//                     className="pin-show title">
//                     {pin.title}
//                 </a>
//             );

//         const pinCreatePhoto = (
//             <Link
//                 to={`/${pinOwner.email}`}
//                 className="pin-show profile-link-frame">
//                 <img src={pinOwner.photo} className="pin-show profile-link-photo" />
//                 <div className="pin-show overlay"></div>
//             </Link>
//         );
//         const name = (pinOwner.id === currentUserId) ? (
//             "You"
//         ) : (
//                 { pinOwnerFullName }
//             )

//         const pinCreditText = (
//             <div className="pin-show credit-summary">
//                 <Link
//                     to={`/${pinOwner.email}`}
//                     className="pin-show credit-link"
//                 >
//                     <strong>{pinOwnerFullName}</strong>
//                 </Link>
//                 {/* <span>&nbsp;saved to&nbsp;</span> */} 
    
//                 <Link
//                     to={`/${pinOwner.email}/${pin.boardTitle}`}
//                     className="pin-show credit-link">
//                     <strong>{pin.boardTitle}</strong>
//                 </Link>
//             </div>
//         );

//         return (
//             <div
//                 className="pin-show main-container"
//                 onClick={this.goBack}>
//                 <a
//                     className="pin-show back-button"
//                     onClick={this.goBack}>
//                     <i className="fas fa-arrow-left back-icon"></i>
//                 </a>
//                 <div className="pin-show wrapper"
//                     onClick={this.goBack}>
//                         {/* this */}
//                     {/* <div onClick={this.hideBoardList}> */}

//                     <div className="pin-show container"
//                         onClick={(e) => e.stopPropagation()}>

//                         <div id='dropdown-pin-show'><DropdownContainer pinId={pin.id} /></div>
//                         {/* <div id='dropdown-pin-show'><ShowDropdown pinId={pin.id} /></div> */}

//                             {/* this */}
//                             {/* <div
//                                 className="create-pin"
//                                 id="buttons"
//                                 onClick={this.toggleBoardList}
//                                 onBlur={this.hideBoardList}
//                             >
//                                 <div className="create-pin" id="select-board-dropdown">
//                                     <div className="create-pin" id="select-board-label">
//                                         <div className="create-pin" id="selected-board">
//                                             {dropdownLabel}
//                                         </div>
//                                     </div>
//                                     <div className="create-pin" id="dropdown-icon-container">
//                                         <i className="fas fa-angle-down" id="dropdown-icon"></i>
//                                     </div>
//                                 </div>
//                                 <div className="create-pin" id="save-button" onClick={clickSave}>
//                                     <div className="create-pin" id="save-button-label">
//                                         Save
//                                     </div>
//                                 </div>
//                                 <div className={`create-pin board-list container ${klass}`}>
//                                     <div className="create-pin board-list triangle">
//                                         <svg width="24" height="24">
//                                             <path d="M0 24 L12 12 L24 24"></path>
//                                         </svg>
//                                     </div>
//                                     <div className="create-pin board-list header">
//                                         <div className="create-pin board-list title">
//                                             All boards
//                                         </div>
//                                     </div>
//                                     <ul className="create-pin board-list">
//                                         {boardListItems}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div> */}
//                         {/* stop */}
//                         <div className="pin-show first-half">
//                             <div className="pin-show link-area">
//                                 {imgLink}
//                                 <div className="pin-show overlay"></div>
//                             </div>
//                         </div>
//                         <div className="pin-show second-half">
//                             <div className="pin-show nav-bar">
//                                 here 
//                                 {/* <div className="create-pin" id="select-board-dropdown">
//                                     <div className="create-pin" id="select-board-label">
//                                         <div className="create-pin" id="selected-board">
//                                             {dropdownLabel}
//                                         </div>
//                                     </div>
//                                     <div className="create-pin" id="dropdown-icon-container">
//                                         <i className="fas fa-angle-down" id="dropdown-icon"></i>
//                                     </div>
//                                 </div> */}

//                                 {editPinLink} 
//                                 <div> openNewBoardPin</div>
//                                 <a
                                    
//                                     className="pin-show save-board-pin-link"
//                                     onClick={() => openNewBoardPin(pin.id)}>
//                                     <div className="pin-show save-board-pin-text">Save</div>
//                                 </a>
//                             </div>
//                             <div className="pin-show info">
//                                 {pinSource}
//                                 {pinTitle}
//                                 <div className="pin-show description">
//                                     {pin.description}
//                                 </div>
//                             </div>
//                             <div className="pin-show credit">
//                                 {pinCreatePhoto}
//                                 {pinCreditText}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             // </div> //this
//         )
//     }
// }

// // export default PinShow;
// export default withRouter(PinShow)

import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.board  
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId);
    }

    goBack(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.goBack();
    }

    render() {
        const { pin, users, currentUserId, openEditPin, openNewBoardPin } = this.props;
        if (!pin) return <div style={{ "paddingTop": "65px" }}>Loading...</div>;

        const pinOwner = pin.user || { username: "" };
        const pinOwnerFullName = `${pinOwner.firstName} ${pinOwner.lastName}`;
        const imgLink = (pin.url === "") ? (
            <div
                className="pin-show pin-link"
            >
                <img src={pin.photo} className="pin-show pin-photo" />
            </div>
        ) : (
                <a
                    href={pin.url}
                    target="_blank"
                    className="pin-show pin-link url"
                >
                    <img src={pin.photo} className="pin-show pin-photo" />
                </a>
            );
        const editPinLink = (pin.userId === currentUserId) ? (
            <a
                className="pin-show edit-pin-link"
                onClick={(pin) => openEditPin(pin.id)}
            >
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
                    <div>Uploaded by&nbsp;
            <Link to={`/${pinOwner.username}`}>
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
                    className="pin-show title"
                >
                    {pin.title}
                </a>
            );

        const pinCreditPhoto = (
            <Link
                to={`/${pinOwner.username}`}
                className="pin-show profile-link-frame"
            >
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
                    to={`/${pinOwner.username}`}
                    className="pin-show credit-link"
                >
                    <strong>{pinOwnerFullName}</strong>
                </Link>
                <span>&nbsp;saved to&nbsp;</span>
                <Link
                    to={`/${pinOwner.username}/${pin.boardTitle}`}
                    className="pin-show credit-link"
                >
                    <strong>{pin.boardTitle}</strong>
                </Link>
            </div>
        );

        return (
            <div className="pin-show main-container"
                onClick={this.goBack}>
                <a
                    className="pin-show back-button"
                    onClick={this.goBack}
                >
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
                                    onClick={() => openNewBoardPin(pin.id)}
                                >
                                    <div className="pin-show save-board-pin-text">Save</div>
                                </a>
                            </div>
                            <div className="pin-show info">
                                {pinSource}
                                {pinTitle}
                                <div className="pin-show description">
                                    {pin.description}
                                    <div>                <h1> Id: {pin.id}</h1></div>
                                </div>
                            </div>
                            <div className="pin-show credit">
                                {pinCreditPhoto}
                                {pinCreditText}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PinShow;