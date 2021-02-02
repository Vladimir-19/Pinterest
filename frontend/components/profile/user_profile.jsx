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
    }

            //extra
            // componentWillUnmount() {
            //     window.removeEventListener("scroll", this.handleScroll);
            // }

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
        this.props.openModal({ modal: 'editprofile', currentUser: this.props.currentUser })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.boards.length != this.props.boards.length) {
            this.props.fetchBoards();
        }
    }


    render() {
        const { currentUser, boards, pins, openModal, closeModal, user } = this.props;

        if (this.state.loading) {
            return <LoadingIcon />;
        }

        if (this.state.openBoard == true && this.state.openBoardId) {
            return <Redirect to={`/boards/${boards.board.openBoardId}`} />
        }

        const name = currentUser.firstName && currentUser.lastName ? <div><span>{currentUser.firstName}</span><span>{currentUser.lastName}</span></div> : <span>Add Your Name</span>;

        const profilePic = currentUser.photoUrl ? (
            <img className="create-pin-profile-image" src={currentUser.photoUrl} />
        ) : (
                <div className="create-pin-profile-image"><i className="fas fa-user-circle"></i></div>
            );

        const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))
        // const currentUserPins = pins.filter(pin => (pin.userId === currentUser.id))
        const personalInfo = (currentUser.location && currentUser.description) ? (
            <div id="profile-personal">
                <h4>{currentUser.location} · {currentUser.description}</h4>
            </div>
        ) : null;

        if (boards.length > 0 && this.state.pins === 'fetched') {
            return (
                <>
                    <div id='user-header'>
                        <div id='user-photo'>
                            {profilePic}
                        </div>
                        <div id='user-text'>
                            {name}
                        </div>
                        
                        <div id="profile-follows-spacer-container" >
                            <div id="profile-follows">
                                <div id="profile-followers-container">
                                    {/* <Link to={`/${user.username}/followers`} className="profile-follows-link"> */}
                                        <h4>1,000,000 followers </h4>
                                    {/* </Link> */}
                                </div>
                                <div> • </div>
                                <div id="profile-following-container">
                                    {/* <Link to={`/${user.username}/following`} className="profile-follows-link"> */}
                                        <h4> 1 following</h4>
                                    {/* </Link> */}
                                </div>
                            </div>

                            <div id="profile-personal-container">
                                {personalInfo}
                                <h4>personal info</h4>
                            </div>
                        </div>
                    </div>
                    <ProfileNavBar
                        currentUser={currentUser}  //USER IS NOT DEFINED
                        openModal={openModal}
                        closeModal={closeModal}
                    />
                    <p>You have  boards!</p>
                    <ul id='board-list'>
                        {/* THIS IS LOOK OF A BOARD AKA board index container  */}
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
                        {/* <div className='edit-create-button-wrapper'>
                            <button
                                className="plus-board"
                                onClick={this.handleClick}
                            >
                                <i className="fas fa-plus"></i>
                            </button>
                            <button className="plus-board"
                                onClick={this.handleEdit}>
                                <i className="fas fa-pencil-alt"></i>
                            </button>
                        </div> */}
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
                        {/* <button className="plus-board"
                            onClick={this.handleEdit}>
                            <i className="fas fa-pencil-alt"></i>
                        </button> */}
                    </div>
                </>
            );
        }
    }
}