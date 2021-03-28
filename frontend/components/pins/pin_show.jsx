import React from 'react';
import { Link } from 'react-router-dom';
import CreateBoardsPinsForm from '../boards/create_boards_pins_container';
import EditPinFormContainer from '../pins/edit_pin_form_container';
// import EditPinForm from '../pins/edit_pin_form';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.pin;
        this.state = {
            fadeInName: false,
            showCreateOptions: false,
            showEditOptions: false,
            success: '',
            ask: '',
            deleted: false
        };

        this.goBack = this.goBack.bind(this);
        // this.openNewBoardPin = this.openNewBoardPin.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.hide = this.hide.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.hideEditModal = this.hideEditModal.bind(this);

    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId);
    }

    toggleShow() {
        // debugger;
        this.setState({ showCreateOptions: !this.state.showCreateOptions })
    }
    hide(e) {
        if (e && e.relatedTarget) {
            e.relatedTarget.click();
        }
        this.setState({ showCreateOptions: false });
    }
    showEditModal() {
        // debugger;
        this.setState({ showEditOptions: !this.state.showEditOptions })
    }
    hideEditModal(e) {
        if (e && e.relatedTarget) {
            e.relatedTarget.click();
        }
        this.setState({ showEditOptions: false });
    }

    editPinModal() {
        // debugger;
        return (
            <EditPinFormContainer
                // title={this.props.pin.title}
                // body={this.state.body}
                pin={this.props.pin}
            // boardId={this.props.pin.board_id}
            />
        )
    }
    // //extra
    // toggleShow() {
    //     // debugger;
    //     this.setState({ showCreateOptions: !this.state.showCreateOptions })
    // }
    // hide(e) {
    //     if (e && e.relatedTarget) {
    //         e.relatedTarget.click();
    //     }
    //     this.setState({ showCreateOptions: false });
    // }


    goBack(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.goBack();
    }

    // openNewBoardPin() {
    //     // debugger;
    //     // e.preventDefault();
    //     this.props.openModal("new-board-pin", this.props.params.pinId);
    // }


    render() {
        // debugger
        const { pin, currentUserId, openEditPin, openNewBoardPin, modal, openModal, closeModal } = this.props; //openNewBoardPin
        if (!pin) return <div style={{ "paddingTop": "65px" }}>Loading...</div>;

        // debugger
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
        // debugger;
        // const editPinLink = (pin.userId === currentUserId) ? (
        //     <a
        //         className="pin-show edit-pin-link"
        //         onClick={() => openEditPin(this.props.pin)}
        //     >
        //         <i className="fas fa-pencil-alt edit-pin-icon"></i>
        //     </a>
        // ) : (
        //     null
        // );

        

        const pinTitle = (pin.url !== "") ? (
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

        const urlLink = pin.url;
        const linkto = (pin.url === "") ? (
            <a
                href={pin.url}
                target="_blank"
                style={{ "color": "black" }} //"text-decoration": "none",
            >
                www.{urlLink.slice(12, 20)}...
            </a>        ) : (
                <h3 style={{ "color": "gray" }}>The link is not available.</h3>
        );
        /// DO NOT DELETE
        //const pinSource = (pin.url === "") ? (
        //     <a
        //         href={pin.url}
        //         target="_blank"
        //         className="pin-show source-link"
        //     >
        //         <div>{pin.url}</div>
        //     </a>
        // ) : (
        //     <div className="pin-show source-link">
        //         <div>Uploaded by&nbsp;
        //     <Link to={`/${pinOwner.username}`}>
        //                 <strong>{pinOwnerFullName}</strong>
        //             </Link>
        //         </div>
        //     </div>
        // );

        // debugger
        const creatorPhoto = (
            <Link
                // to={`/${pinOwner.username}`}
                to={`/users/${pinOwner.id}`}
                className="pin-show profile-link-frame"
            >
                <img src={pinOwner.photo} className="pin-show profile-link-photo" />
                <div className="pin-show overlay"></div>
            </Link>
        );

        // const name = (pinOwner.id === currentUserId) ? (
        //     "You"
        // ) : (
        //     { pinOwnerFullName }
        // )

        // debugger
        const pinInfo = (
            <div className="pin-show creator-info">
                <Link
                    to={`/users/${pinOwner.id}`}
                    className="pin-show link"
                >
                    <strong>{pinOwnerFullName}</strong>
                </Link>
                <span>&nbsp;| From &nbsp;</span>
                <Link
                    // to={`/${pinOwner.id}/${pin.boardTitle}`}
                    to={`/boards/${pin.boardId}`} //to be conti
                    className="pin-show link"
                >
                    <strong>{pin.boardTitle} board</strong>
                </Link>
            </div>
        );
        // debugger;
        return (
            <div className="pin-show main-container"
                onClick={this.goBack}>
                <a
                    className="pin-show goback-button"
                    onClick={this.goBack}
                    >
                    <i className="fas fa-long-arrow-alt-left" style={{ fontSize: "170%" }}></i>
                </a>
                <div className="pin-show wrapper"
                    onClick={this.goBack}>
                    <div className="pin-show container"
                        onClick={(e) => e.stopPropagation()}>
                        <div className="pin-show first-half">
                            <div className="pin-show photo-area">
                                {imgLink}
                                <div className="pin-show overlay"></div>
                            </div>
                        </div>
                        <div className="pin-show second-half">
                            
                            <div className="utility">
                                <div className="edit">
                                    <a
                                        className="edit-pin-button"
                                        onClick={this.showEditModal}
                                        onBlur={this.hideEditModal}
                                    >
                                        <div >
                                            <i className="far fa-edit" style={{ color: "black", fontSize: "200%" }}></i>
                                        </div>
                                    </a>
                                    <div  style={{
                                        // id="create-pinboard-container"
                                        visibility: this.state.showEditOptions ?
                                            "visible" :
                                            "hidden"
                                    }}>
                                        <div className="modal-container" >
                                            <div className="modal-background" id={modal} onClick={closeModal}>
                                                <div className="modal-child" id={`${modal}-child`} onClick={e => e.stopPropagation()}>
                                                    {this.editPinModal()}
                                                </div>
                                            </div>
                                        </div>

                                        {/* <h3 >
                                {this.editBoardModal()}
                            </h3> */}
                                        {/* <div >
                                <div id="create-pin-button">
                                </div>
                            </div> */}
                                    </div>
                                </div>
                                {/* className="pin-show nav-bar" */}
                                {/* {editPinLink} */}
                                {/* {this.editPinModal()} */}
                                
                                {/* <EditPinFormContainer 
                                // pinId={pin.id}
                                title={this.state.title}
                                /> */}
                                {/* <EditPinForm pinId={pin.id} /> */}

                                {/* <div></div>
                                <a
                                    className="pin-show save-board-pin-link"
                                    // onClick={() => openNewBoardPin(this.props.pin)}
                                    onClick={() => openNewBoardPin(pinId)}
                                    // onClick={() => openNewBoardPin(pin.id)}
                                    // onClick={this.openNewBoardPin()}3
                                    // onClickk={<CreateBoardsPinsForm pin={pin.id} //no />}
                                >
                                    <div className="pin-show save-board-pin-text">Save</div>
                                </a> */}
                                {/* <button */}
                                <a
                                    // className="pin-show-save-board-pin-link"
                                    // className="profile-header-link" // ??? 
                                    // className="profile-icon-container-shadow-two" // was 
                                    className="xxx"
                                    onClick={this.toggleShow}
                                    onBlur={this.hide}
                                >
                                        {/* className="profile-icon-container-shadow" */}
                                        <div >
                                            {/* className="profile-icon-container" */}
                                            {/* <i style={{ "fontFamily": "serif" }}>+</i> */}
                                            <i className="fas fa-thumbtack save-icon" style={{ color: "#e60023", fontSize: "200%" }}></i>
                                            {/* className="pin-show save-board-pin-text" */}
                                        </div>
                                </a>
                                {/* </button> */}
                                <div id="create-pinboard-container" style={{
                                    visibility: this.state.showCreateOptions ?
                                        "visible" :
                                        "hidden"
                                }}>
                                    <h3 >
                                        {/* //className="option-label" id="create-board"> */}
                                        <CreateBoardsPinsForm pinId={pin.id} />
                                    </h3>
                                    <div id="create-options-triangle">
                                        <svg width="24" height="24">
                                            <path d="M0 24 L12 12 L24 24"></path>
                                        </svg>
                                    </div>
                                </div>
                                {/* <CreateBoardsPinsForm pinId={pin.id} /> */}
                                {/* <div className="pin-show save-board-pin-text">Save</div> */}

                            </div>
                            <div className="pin-show info">
                                {linkto}
                                {pinTitle}
                                <div className="pin-show description">
                                    {pin.description}
                                </div>
                            </div>
                            <div className="pin-show creator">
                                {creatorPhoto}
                                {pinInfo}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PinShow;