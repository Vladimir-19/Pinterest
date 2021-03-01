import React from 'react';
import { Link } from 'react-router-dom';
// import LoadingIcon from '../loading/loading';
import { Redirect } from 'react-router-dom';
import ProfileNavBar from './profile_nav_bar';
//exutra


export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pins: '',
            // loading: true,
            openBoard: false,
            openBoardId: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        //
        this.handleScroll = this.handleScroll.bind(this);
        // this.newBoard = this.newBoard.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards()
        this.props.fetchPins().then(() => this.setState({ pins: 'fetched', loading: false }))
        //
        window.addEventListener("scroll", this.handleScroll);
        // const _userId = this.props.match.params.userId;
        // const fetchUser = (userId) => this.props.fetchSingleUser(userId);
        // this.props.fetchAllUsers().then(res => {
        //         const user = Object.values(res.users).find(user => user.id === _userId);
        //         return fetchUser(user.id);
        //     });
    }

            // extra
            componentWillUnmount() {
                window.removeEventListener("scroll", this.handleScroll);
            }

            handleScroll() {
                const { prevScrollPos } = this.state;
                const currentScrollPos = window.pageYOffset;
                const fadeInName = (prevScrollPos < currentScrollPos - 50);

                this.setState({
                    fadeInName
                });
            }

            newBoard() {
                this.props.openModal("createboard");
            }

    handleButton(e) {
        let board = (e.currentTarget);
        const boardId = (board.getAttribute('value'))
        if (boardId) {
            this.setState({ openBoard: true, openBoardId: boardId })
        } 
        
    }

    handleClick() {
        // this.props.openModal({ modal: 'createboard', currentUser: this.props.currentUser })
        this.props.openModal("createboard");
    }

    handleEdit() {
        // this.props.openModal({ modal: 'editprofile', currentUser: this.props.currentUser })
        this.props.openModal("editprofile")
    }

    componentDidUpdate(prevProps) {
        if (prevProps.boards.length != this.props.boards.length) {
            this.props.fetchBoards();
        }
    }


    render() {
        const { currentUser, boards, pins, openModal, closeModal, users, email } = this.props;
        const user = users.find(user => user.id === currentUser.id);

        if (this.state.loading) {
            return <LoadingIcon />;
        }

        if (this.state.openBoard == true && this.state.openBoardId) {
            return <Redirect to={`/boards/${this.state.openBoardId}`} />
        }

        const name = currentUser.firstName && currentUser.lastName ? 
            <div>
                <span>{currentUser.firstName}</span><span>{currentUser.lastName}</span>
            </div> : <span>Add Your Name</span>;

        const profilePic = user.photo ? (
            <img className="user-profile-image" src={user.photo} />
        ) : (
                <div className="user-profile-image">
                    <i className="fas fa-user-circle"></i>
                </div>
            );

        // var searchText = 'food'
        // let win1 = window.open("//" + "google.com/search?q=" + searchText, '_blank');
        // style = {{ "color": "#8e8e8e" }}
        const userLocation = (user.location) ? (
            window.open("//" + "google.com/search?q=" + user.location, '_blank')
        ) : (<i style={{ "color": "#8e8e8e" }}>Add your location</i> );
        const userDescription = (currentUser.description) ? (
            <div >
                {currentUser.description}
            </div>
        ) : (<i style={{ "color": "#8e8e8e" }}>Describe your account</i>);


        const currentUserBoards = boards.filter(board => (board.userId === currentUser.id)) // ????
        // const currentUserPins = pins.filter(pin => (pin.userId === currentUser.id))

        if (boards.length > 0 && this.state.pins === 'fetched') {
            // debugger;
            return (
                <>
                    {/* id='user-header' */}
                    <div id="profile-image-container"> 
                        {/* id="profile-image-frame" */}
                        <div id="profile-image-frame" >
                            {profilePic}
                        </div>
                    </div>
                    <div id="user-text">
                        {name}
                        {/* {user} */}
                    </div>

                    {/* <div id="profile-follows-spacer-container" > */}
                    {/* <div id="profile-follows"> */}
                    <div id="profile-personal-followers">
                        {/* <Link to={`/${user.username}/followers`} className="profile-follows-link"> */}
                        <h4>1 000  followers • 1 following</h4>
                        {/* </Link> */}
                    </div>
                    {/* <div id="profile-following-container">
                                    <Link to={`/${user.username}/following`} className="profile-follows-link">
                                        <h4> 1 following</h4>
                                    </Link>
                                </div> */}
                    {/* </div> */}

                    {/* <div id="profile-personal-container"> */}
                        <div id="profile-personal">
                            <h4>{userLocation} | {userDescription}</h4>
                        </div>
                        {/* <h4>personal info</h4> */}
                        {/* <Link to="https://www.google.com/maps"> */}
                    {/* </div> */}
                    <div  > 
                        {/* id="profile-nav-bar" */}
                        <ProfileNavBar
                            currentUser={currentUser}  //USER IS NOT DEFINED
                            user={user}
                            openModal={openModal}
                            closeModal={closeModal}
                            // handleEdit={this.handleEdit}
                        />
                        <button
                            // className="profile-header-link"
                            onClick={this.handleEdit}>
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                        {/* <Link to="/settings#profile" className="profile-header-link">
                            <div className="profile-icon-container-shadow">
                                <div className="profile-icon-container">
                                    <i className="fas fa-pencil-alt" id="edit-profile-icon"></i>
                                </div>
                            </div>
                        </Link> */}

                    </div>
                    <ul id='board-list'>
                        {currentUserBoards.map((board, id) => {
                            let pinArr;
                            let allPins;
                            let imageTag =
                                <div id='pin-image-wrapper1'>
                                    <div className='pin-noimg'>do I need this?</div> 
                                </div>
                            if (board.pinIds.length > 0) {
                                pinArr = board.pinIds.map(pinId => {
                                    return pins[pinId]
                                }
                                )
                                if (pinArr.length > 0) {
                                    allPins = pinArr.map((pin, idx) => {
                                        if (idx < 3 && pin != 'undefined') {
                                            return <img key={idx} id='pin-image1' src={pin.photo} />
                                        }
                                    })
                                    imageTag =
                                        <div id='pin-image-wrapper'>
                                        {/* key={board.id} */}
                                            {allPins}
                                        </div>
                                }
                            }
                            return (
                                <div key={board.id} value={board.id} id='board-show-list' onClick={this.handleButton}> 
                                    {/* key={board.id} */}
                                    {imageTag}
                                    <div  id='board-text'>
                                        <li>{board.title}</li>  
                                        {/* key={board.id} */}
                                        <p>{board.pinIds.length} Pins</p>
                                        {/* key={board.id} */}
                                    </div>
                                </div>
                            )
                        })}
                        <div className='edit-create-button-wrapper'>
                            {/* <button
                                className="plus-board"
                                onClick={this.handleClick}
                            >
                                <i className="fas fa-plus"></i>
                            </button> */}
                            {/* <button className="plus-board"
                            onClick={this.handleEdit}>
                            <i className="fas fa-pencil-alt"></i>
                        </button> */}
                        </div>
                        
                    </ul>
                </>
            )
        } else {
            return (
                <>
                    <div id='user-header'>
                        <div id='user-photo'>
                            {profilePic}
                        </div>
                        <div id='user-text'>
                            {name}
                        </div>
                    </div>
                    <ProfileNavBar
                        user={user}  //USER IS NOT DEFINED
                        openModal={openModal}
                        closeModal={closeModal}
                        />
                    <p>You don't have any boards yet!</p>
                    <div className='edit-create-button-wrapper'>
                        <button
                            className="plus-board"
                            onClick={this.handleClick}
                            // onClick={this.newBoard}
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                        <button className="plus-board"
                            onClick={this.handleEdit}>
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                    </div>
                </>
            );
        }
    }
}

// import React from "react";
// import { Link } from "react-router-dom";

// import ProfileHeader from "./profile_header";
// import ProfileContent from "./profile_content";

// class UserProfile extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         const username = this.props.match.params.username;
//         const fetchUser = (userId) => this.props.fetchSingleUser(userId);

//         this.props.fetchAllUsers()
//             .then(res => {
//                 const user = Object.values(res.users).find(user => user.username === username);
//                 return fetchUser(user.id);
//             });
//     }

//     render() {
//         const { currentUser, users, username, boards, pins, openModal, closeModal } = this.props;
//         const user = users.find(user => user.username === username);

//         return (
//             <div id="profile-background">
//                 <div id="profile-container">
//                     <div id="profile">
//                         <div id="profile-header-container">
//                             <ProfileHeader
//                                 currentUser={currentUser}
//                                 user={user}
//                                 openModal={openModal}
//                                 closeModal={closeModal}
//                             />
//                         </div>
//                         <div id="profile-content-container">
//                             <ProfileContent
//                                 user={user}
//                                 boards={boards}
//                                 pins={pins}
//                                 openModal={openModal}
//                                 closeModal={closeModal}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// };

// export default UserProfile;