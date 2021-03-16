
import React from 'react';
import { Link } from 'react-router-dom';
import CreateBoardsPinsForm from '../boards/create_boards_pins_container';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.pin;
        this.state = {
            fadeInName: false,
            showCreateOptions: false
        };

        this.goBack = this.goBack.bind(this);
        // this.openNewBoardPin = this.openNewBoardPin.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.hide = this.hide.bind(this);

    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId);
    }
//extra
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
        const { pin, currentUserId, openEditPin, openNewBoardPin } = this.props; //openNewBoardPin
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
                onClick={() => openEditPin(pin.id)}
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

        const urlLink = pin.url;
        const linkto = (pin.url === "") ? (urlLink.slice(8, 20)) : (
            <a
                href={pin.url}
                target="_blank"
                // className="pin-show title"
                style={{ "color": "black" }} //"text-decoration": "none",
            >
                www.{pin.title}...
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
         
        // debugger
        const pinCreditText = (
            <div className="pin-show credit-summary">
                <Link
                    to={`/${pinOwner.id}`}
                    className="pin-show credit-link"
                >
                    <strong>{pinOwnerFullName}</strong>
                </Link>
                <span>&nbsp;saved to&nbsp;</span>
                <Link
                    // to={`/${pinOwner.id}/${pin.boardTitle}`}
                    to={`/boards/${pin.boardId}`} //to be conti
                    className="pin-show credit-link"
                >
                    <strong>{pin.boardTitle}</strong>
                </Link>
            </div>
        );

        // debugger;
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
                            <div >
                                {/* className="pin-show nav-bar" */}
                                {editPinLink}
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
                                    <div >
                                        {/* className="profile-icon-container-shadow" */}
                                        <div >
                                            {/* className="profile-icon-container" */}
                                            {/* <i style={{ "fontFamily": "serif" }}>+</i> */} 
                                            <i className="fas fa-thumbtack save-icon" style={{ color: "#e60023", fontSize: "200%"}}></i>
                                            {/* className="pin-show save-board-pin-text" */}
                                        </div>
                                    </div>
                                    </a>
                                {/* </button> */}
                                <div id="create-pinboard-container" style={{
                                    visibility: this.state.showCreateOptions ?
                                        "visible" :
                                        "hidden"
                                }}>
                                    <h3 >
                                        {/* className="option-label" id="create-board"> */}
                                        <CreateBoardsPinsForm pinId={pin.id} />
                                    </h3>
                                    <div >
                                        {/* id="create-options" */}
                                        <div  >
                                            {/* id="create-board-button" tabIndex="0" */}
                                            <div >
                                                {/* className="option-container-shadow" */}
                                                <div >
                                                    {/* className="option-container" */}
                                                    <h3 >
                                                        {/* className="option-label" id="create-board"> */}
                                                        {/* <CreateBoardsPinsForm pinId={pin.id} /> */}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="create-pin-button">
                                            {/* <NavLink to="/pin-builder">
                                                <div className="option-container-shadow">
                                                    <div className="option-container">
                                                        <h3 className="option-label" id="create-pin">Create Pin</h3>
                                                    </div>
                                                </div>
                                            </NavLink> */}
                                        </div>
                                    </div>
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