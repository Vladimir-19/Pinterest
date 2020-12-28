//from old file
import React from "react";

class CreatePinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.pin, {
            photoPreview: null,
            boardId: null,
            boardList: false
        });

        this.hideBoardList = this.hideBoardList.bind(this);
        this.toggleBoardList = this.toggleBoardList.bind(this);
        this.selectBoard = this.selectBoard.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
    }


//wtf
    // componentDidMount() {
    //     this.props.fetchBoards();
    // }

    hideBoardList(e) {
        this.setState({ boardList: false });
    }

    toggleBoardList() {
        this.setState({ boardList: !this.state.boardList });
    }

    selectBoard(e) {
        this.setState({ boardId: e.currentTarget.value, boardList: false });
        // this.setState({ boardId: e.target.value, boardList: false});
        // this.setState({selectBoard: board.title, currentBoard: board.id})
    }

    handleSave(e) {
        e.stopPropagation();
        const details = Object.assign({}, this.state);
        delete details["photoPreview"];
        delete details["board"];
        delete details["boardList"];

        const formData = new FormData();
        for (let key in details) {
            formData.append(`pin[${key}]`, details[key])
        };

        const pinToBoard = (boardPin) => this.props.pinToBoard(boardPin);
        const boardId = this.state.boardId;

        return this.props.processForm(formData)
            .then(res => (pinToBoard({
                "board_id": boardId,
                "pin_id": parseInt(Object.keys(res.pin)[0])
            })))
            .then(() => window.history.go(-1));
    }

    uploadImage() {
        document.getElementById("image-upload-input").click();
    }

    deleteImage() {
        this.setState({ photoPreview: null });
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        // const file = e.target.files[0];
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
        const { currentUser, boards, errors, formType } = this.props;

        const klass = (this.state.boardList) ? 'show' : 'hide';
        const dropdownLabel = (this.state.boardId === null) ? (
            "Select"
        ) : (
                boards.find(board => board.id === this.state.boardId).title
                // boards.find(board => board.id === this.state.boardId)
            );

        const clickSave = (this.state.boardId === null) ? (
            null
        ) : (
                this.handleSave
            );

        const boardListItems = (boards.length > 0) ? (
            boards.map(board => {
                const firstPinImage = (board.firstPin !== undefined) ? (
                    <img src={`${board.firstPin.photo}`}
                        className="board-li pin-photo" />
                ) : (
                        <div className="board-li pin-photo"></div>
                    );
                const secret = (board.secret) ? 'show ish' : 'hide';

                return (
                    <li
                        key={board.id}
                        className="create-pin board-list-item"
                        value={board.id}
                        onClick={this.selectBoard}
                    >
                        <div className="create-pin board-li content">
                            <div className="board-li pin-photo-frame">
                                {firstPinImage}
                                <div></div>
                            </div>
                            <div className="board-li title">{board.title}</div>
                            <div className={`board-li secret-icon-container ${secret}`}>
                                <i className="fas fa-lock board-li secret-icon"></i>
                            </div>
                        </div>
                    </li>
                )
            }
            )
        ) : (
                null
            );

        const displayImage = (this.state.photoPreview) ? (
            <div className="create-pin" id="image-uploaded-container">
                <img src={this.state.photoPreview} className="create-pin" id="photo" />
                <div className="create-pin" id="delete-image-button-container">
                    <button className="create-pin" id="delete-image-button" onClick={this.deleteImage}>
                        <div className="create-pin" id="trash-icon-container">
                            <i className="fas fa-trash create-pin" id="trash-icon"></i>
                        </div>
                    </button>
                </div>
            </div>
        ) : (
                <div className="create-pin" id="image-upload-container">
                    <div className="create-pin" id="image-upload-area" onClick={this.uploadImage}>
                        <div className="create-pin" id="image-upload-area-border">
                            <div className="create-pin" id="upload-icon-container">
                                <i className="fas fa-arrow-circle-up" id="upload-icon"></i>
                            </div>
                            <div className="create-pin" id="instruction">
                                Click to upload
            </div>
                        </div>
                        <div className="create-pin" id="upload-recommendation">
                            Recommendation: Use high-quality .jpg files less than 2 MB
        </div>
                    </div>
                    <input
                        type="file"
                        onChange={this.handleFile}
                        className="create-pin"
                        id="image-upload-input" />
                </div>
            );

        return (
            <div id="create-pin-background" onClick={this.hideBoardList}>
                <div id="create-pin-container">
                    <div className="create-pin" id="sizing">
                        <div className="create-pin" id="header"
                            onClick={e => e.stopPropagation()}>
                            <div
                                className="create-pin"
                                id="buttons"
                                onClick={this.toggleBoardList}
                                onBlur={this.hideBoardList}
                            >
                                <div className="create-pin" id="select-board-dropdown">
                                    <div className="create-pin" id="select-board-label">
                                        <div className="create-pin" id="selected-board">
                                            {dropdownLabel}
                                        </div>
                                    </div>
                                    <div className="create-pin" id="dropdown-icon-container">
                                        <i className="fas fa-angle-down" id="dropdown-icon"></i>
                                    </div>
                                </div>
                                <div className="create-pin" id="save-button" onClick={clickSave}>
                                    <div className="create-pin" id="save-button-label">
                                        Save
                                    </div>
                                </div>
                                <div className={`create-pin board-list container ${klass}`}>
                                    <div className="create-pin board-list triangle">
                                        <svg width="24" height="24">
                                            <path d="M0 24 L12 12 L24 24"></path>
                                        </svg>
                                    </div>
                                    <div className="create-pin board-list header">
                                        <div className="create-pin board-list title">
                                            All boards
                    </div>
                                    </div>
                                    <ul className="create-pin board-list">
                                        {boardListItems}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="create-pin" id="content">
                            <div className="create-pin" id="image-container">
                                {displayImage}
                            </div>
                            <div className="create-pin" id="details-container">
                                <div className="create-pin" id="title-container">
                                    <input
                                        type="text"
                                        className="create-pin"
                                        id="title"
                                        placeholder="Add your title"
                                        value={this.state.title}
                                        onChange={this.changeInput("title")} />
                                </div>
                                <div className="create-pin" id="user-container">
                                    <div className="create-pin" id="user-image-frame">
                                        <img
                                            src={currentUser.photo}
                                            alt="profile-icon"
                                            className="create-pin"
                                            id="user-image" />
                                    </div>
                                    <div className="create-pin" id="username">
                                        {currentUser.firstName} {currentUser.lastName}
                                    </div>
                                </div>
                                <div className="create-pin" id="description-container">
                                    <textarea
                                        rows="1"
                                        className="create-pin"
                                        id="description"
                                        placeholder="Tell everyone what your Pin is about"
                                        value={this.state.description}
                                        onChange={this.changeInput("description")} />
                                </div>
                                <div className="create-pin" id="url-container">
                                    <textarea
                                        rows="1"
                                        className="create-pin"
                                        id="url"
                                        placeholder="Add a destination link"
                                        value={this.state.url}
                                        onChange={this.changeInput("url")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePinForm;

            // import React from 'react';
            // import { Link } from 'react-router-dom';
            // // import LoadingIcon from '../loading/loading';

            // export default class CreatePin extends React.Component {
            //     constructor(props) {
            //         super(props);
            //         this.state = {
            //             pin: {
            //                 title: '',
            //                 description: '',
            //                 sourceLink: '',
            //                 userId: this.props.currentUser.id,
            //                 photoFile: null,
            //                 photoUrl: null,
            //             },
            //             clicked: false,
            //             toggleSelect: 'Choose a board',
            //             currentBoard: 0,
            //             boardId: 0,
            //             pinned: false
            //         }
            //         this.handleSubmit = this.handleSubmit.bind(this);
            //         this.handleFile = this.handleFile.bind(this);
            //         this.handleDrop = this.handleDrop.bind(this);
            //         this.handleDragEnter = this.handleDragEnter.bind(this);
            //         this.handleDragOver = this.handleDragOver.bind(this);
            //         this.closeDropdown = this.closeDropdown.bind(this);
            //         this.handleClick = this.handleClick.bind(this);
            //         this.toggleSelect = this.toggleSelect.bind(this);
            //         this.handleButton = this.handleButton.bind(this);
            //     }

            //     componentDidMount() {
            //         this.props.fetchBoards();
            //         this.props.fetchPins();
            //     }



            //     handleSubmit(e) {
            //         e.preventDefault();
            //         this.setState({ loading: true })
            //         const formData = new FormData();
            //         formData.append('pin[title]', this.state.title);
            //         formData.append('pin[description]', this.state.description);
            //         formData.append('pin[userId]', this.state.userId);
            //         formData.append('pin[photo]', this.state.photoFile);
            //         formData.append('pin[source_link]', this.state.sourceLink);
            //         this.setState({ boardId: e.currentTarget.value })
            //         this.props.createPin(formData).then((action) => this.props.pinToBoard({ pinId: action.pin.id, boardId: this.state.boardId }) && this.props.history.push(`/pins/${action.pin.id}`))
            //     }

            //     closeDropdown() {
            //         this.setState({ clicked: false }, () => {
            //             document.removeEventListener('click', this.closeDropdown);
            //             document.getElementById("dropdown-child2").style.width = '';
            //             document.getElementById("dropdown-button1").style.width = '';
            //         })
            //     }

            //     handleClick(e) {
            //         e.preventDefault();
            //         this.setState({ clicked: true }, () => {
            //             document.addEventListener("click", this.closeDropdown);
            //             document.getElementById("dropdown-child2").style.width = '0px';
            //             document.getElementById("dropdown-button1").style.width = '250px';
            //         });
            //     }

            //     toggleSelect(board) {
            //         this.setState({ toggleSelect: board.title, currentBoard: board.id })
            //     }

            //     handleButton(e) {
            //         e.preventDefault();

            //         this.handleSubmit(e);
            //     }

            //     handleDragOver(e) {
            //         e.preventDefault();
            //         e.stopPropagation();
            //     }

            //     handleDragEnter(e) {
            //         e.preventDefault();
            //         e.stopPropagation();
            //     }

            //     handleDrop(e) {
            //         e.preventDefault();
            //         e.stopPropagation();
            //         let file = e.dataTransfer.files[0];
            //         const fileReader = new FileReader();
            //         fileReader.onloadend = () => {
            //             this.setState({ photoFile: file, photoUrl: fileReader.result });
            //         };
            //         if (file) {
            //             fileReader.readAsDataURL(file)
            //         }
            //     };

            //     handleFile(e) {
            //         const file = e.target.files[0];
            //         const fileReader = new FileReader();
            //         fileReader.onloadend = () => {
            //             this.setState({ photoFile: file, photoUrl: fileReader.result });
            //         };
            //         if (file) {
            //             fileReader.readAsDataURL(file);
            //         }
            //     }

            //     handleUpdate(field) {
            //         return e => {
            //             this.setState({ [field]: e.currentTarget.value })
            //         }
            //     }

            //     render() {
            //         const { currentUser, boards } = this.props;

            //         // if (this.state.loading) {
            //         //     return <LoadingIcon />;
            //         // }

            //         const preview = this.state.photoUrl ? <img className='testing' src={this.state.photoUrl} /> : <label><i className="fas fa-arrow-circle-up"></i>
            //     Drag and drop or click to upload
            //     <input id="pinFile" onChange={this.handleFile} type="file" /></label>

            //         const name = currentUser.firstName && currentUser.lastName ? 'currentUser.fname currentUser.lname' : null;

            //         // const pinMessage = (this.state.pinned == true) ?
            //         //   <p id='success-message-pin'>Redirecting to your new pin...pleasebe patient ;)</p>
            //         // : null;

            //         const profilePic = currentUser.photoUrl ? (
            //             <img className="create-pin-profile-image" src={currentUser.photoUrl} />
            //         ) : (
            //                 <i className="fas fa-user-circle"></i>
            //             );

            //         const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))

            //         const dropdown = (currentUserBoards.length > 0) ? (
            //             <div className="dropdown">
            //                 <div className="dropdown-child">
            //                     <div id="dropdown-button1" onClick={this.handleClick}>
            //                         <span id='selected-dropdown'>{this.state.toggleSelect}</span><i className="fas fa-chevron-down"></i>
            //                         {this.state.clicked ? (
            //                             <ul onClick={(e) => e.stopPropagation()} className="dropdown-ul">
            //                                 <p id='all-boards'>All boards</p>
            //                                 {currentUserBoards.map((board, idx) => (
            //                                     <div key={idx} id='dropdown-list-wrapper'>
            //                                         <li onClick={() => this.toggleSelect(board)}>{board.title}</li>
            //                                         <button value={board.id} onClick={(e) => this.handleButton(e)}>save</button>
            //                                     </div>
            //                                 ))}
            //                             </ul>
            //                         ) : null}
            //                     </div>
            //                     <div id="dropdown-child2">
            //                         {(this.state.toggleSelect !== 'Choose a board') ? (
            //                             <button className="dropdown-button2" value={this.state.currentBoard} onClick={(e) => this.handleSubmit(e)}>Save</button>
            //                         ) : <button className="dropdown-button2" value={this.state.currentBoard} onClick={(e) => this.handleSubmit(e)}>Save</button>}
            //                     </div>
            //                 </div>
            //             </div>
            //         ) : <button className='link-board-modal' onClick={() => this.props.openModal({ modal: 'createboard', currentUser: this.props.currentUser })}>You don't have any boards to pin to yet! Click to create one now</button>;


            //         return (
            //             <div className="create-pin">
            //                 <div className="create-pin-container">
            //                     <form className="create-form">
            //                         <div className="create-pin-catherine">
            //                             <div className="create-text">
            //                                 <div className="create-pin-dropdown">
            //                                     {dropdown}
            //                                 </div>
            //                                 {/* {pinMessage} */}
            //                                 <h1>
            //                                     <input
            //                                         className="create-pin-title"
            //                                         type="text"
            //                                         onChange={this.handleUpdate('title')}
            //                                         placeholder="Add your title"
            //                                     />
            //                                 </h1>
            //                                 <div className='create-pin-image'>{profilePic}</div>
            //                                 {/* <p>{name}</p> */}
            //                                 <p className='create-pin-p'>
            //                                     <input
            //                                         className="create-pin-body"
            //                                         type="text"
            //                                         onChange={this.handleUpdate('description')}
            //                                         placeholder="tell everyone what your Pin is about"
            //                                     />
            //                                 </p>
            //                                 <p className='create-pin-p2'>
            //                                     <input
            //                                         className="create-pin-link"
            //                                         type="text"
            //                                         onChange={this.handleUpdate('sourceLink')}
            //                                         placeholder="Add a destination link"
            //                                     />
            //                                 </p>
            //                             </div>
            //                             <div id="upload-space"
            //                                 onDrop={this.handleDrop}
            //                                 onDragEnter={this.handleDragEnter}
            //                                 onDragOver={this.handleDragOver}>
            //                                 {preview}
            //                             </div>
            //                         </div>
            //                         <div className='pin-show-button-wrapper'>
            //                             <Link to='/'>
            //                                 <div className='plus-board'>
            //                                     <i className="fas fa-arrow-left"></i>
            //                                 </div>
            //                             </Link>
            //                         </div>
            //                     </form>
            //                 </div>
            //             </div>
            //         );
            //     }
            // }