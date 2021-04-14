import React from 'react';
import { Link } from 'react-router-dom';
import CreateBoardsPinsForm from '../boards/create_boards_pins_container';
import EditPinFormContainer from '../pins/edit_pin_form_container';
import { closeModal } from '../../actions/modal_actions'

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.pin;
        this.state = {
            fadeInName: false,
            showCreateOptions: false,
            showEditOptions: false,
        };

        this.goBack = this.goBack.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.hide = this.hide.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.hideEditModal = this.hideEditModal.bind(this);
    }


    componentDidMount() {
        this.props.startLoading();
        this.props.fetchPin(this.props.match.params.pinId);
        setTimeout(() => this.props.stopLoading(), 600);
    }

    toggleShow() {
        this.setState({ showCreateOptions: !this.state.showCreateOptions })
    }

    hide(e) {
        if (e && e.relatedTarget) {
            e.relatedTarget.click();
        }
        this.setState({ showCreateOptions: false });
    }

    showEditModal() {
        this.setState({ showEditOptions: !this.state.showEditOptions })
    }
    
    hideEditModal(e) {
        if (e && e.relatedTarget) {
            e.relatedTarget.click();
        }
        this.setState({ showEditOptions: false });
    }

    editPinModal() {
        return (
            <EditPinFormContainer
                pin={this.props.pin}
            />
        )
    }

    goBack(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.goBack();
    }

    render() {
        const { pin, currentUserId, modal, openModal, closeModal, loading } = this.props; //openNewBoardPin
       
        if (!pin) return <div style={{ "paddingTop": "65px" }}> <h2>Loading...</h2></div>;

        const loader = (loading) ? (
            <div className="loading-background">
                <div className="loader"></div>
            </div>
        ) : null;

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
        const linkto = (pin.url !== "") ? (
            <a
                href={pin.url}
                target="_blank"
                style={{ "color": "black" }} //"text-decoration": "none",
            >
                www.{urlLink.slice(11, 22)}...
            </a>        
            ) : (
                <h3 style={{ "color": "gray" }}>Link was not provided.</h3>
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
                    to={`/boards/${pin.boardId}`} 
                    className="pin-show link"
                >
                    <strong>{pin.boardTitle} board</strong>
                </Link>
            </div>
        );

        if (pin.userId === currentUserId) {
            return (
                <div className="pin-show main-container"
                    onClick={this.goBack}>
                    <a
                        className="pin-show goback-button"
                        onClick={this.goBack}
                    >
                        <i className="fas fa-long-arrow-alt-left" style={{ fontSize: "170%" }}></i>
                    </a>
                    {loader}
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
                                        <div style={{
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
                                        </div>
                                    </div>
                                    <a
                                        className="xxx"
                                        onClick={this.toggleShow}
                                        onBlur={this.hide}
                                    >
                                        <div >
                                            <i className="fas fa-thumbtack save-icon" style={{ color: "#e60023", fontSize: "200%" }}></i>
                                        </div>
                                    </a>
                                    <div id="create-pinboard-container" style={{
                                        visibility: this.state.showCreateOptions ?
                                            "visible" :
                                            "hidden"
                                    }}>
                                        <h3 >
                                            <CreateBoardsPinsForm pinId={pin.id} />
                                        </h3>
                                        <div id="create-options-triangle">
                                            <svg width="24" height="24">
                                                <path d="M0 24 L12 12 L24 24"></path>
                                            </svg>
                                        </div>
                                    </div>
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

        } else {
            return (
                <div className="pin-show main-container"
                    onClick={this.goBack}>
                    {loader}
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
                                    <a
                                        className="xxx"
                                        onClick={this.toggleShow}
                                        onBlur={this.hide}
                                    >
                                        <div >
                                            <i className="fas fa-thumbtack save-icon" style={{ color: "#e60023", fontSize: "200%" }}></i>
                                        </div>
                                    </a>
                                    <div id="create-pinboard-container" style={{
                                        visibility: this.state.showCreateOptions ?
                                            "visible" :
                                            "hidden"
                                    }}>
                                        <h3 >
                                            <CreateBoardsPinsForm pinId={pin.id} />
                                        </h3>
                                        <div id="create-options-triangle">
                                            <svg width="24" height="24">
                                                <path d="M0 24 L12 12 L24 24"></path>
                                            </svg>
                                        </div>
                                    </div>
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
}

export default PinShow;