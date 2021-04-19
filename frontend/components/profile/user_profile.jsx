import React from 'react';
import { Redirect } from 'react-router-dom';
import ProfileNavBar from './profile_nav_bar';
import UserDetails from './user_details';


export default class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            pins: '',
            openBoard: false,
            openBoardId: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        //
        this.handleScroll = this.handleScroll.bind(this); //// 04/03
    }
    

    componentDidMount() {
        this.props.startLoading(); 
        this.props.fetchBoards()
        this.props.fetchPins().then(() => this.setState({ pins: 'fetched', loading: false }))
        setTimeout(() => this.props.stopLoading(), 800);
        //
        window.addEventListener("scroll", this.handleScroll); //// 04/03
    }

    // extra //// 04/03
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() { //// 04/03
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
        this.props.openModal("createboard");
    }

    handleEdit() {
        this.props.openModal("editprofile")
    }

    componentDidUpdate(prevProps) {
        if (prevProps.boards.length != this.props.boards.length) {
            this.props.fetchBoards();
        }
    }


    render() {
        const { currentUser, boards, pins, openModal, closeModal, users, loading } = this.props;

        const loader = (loading) ? (
            <div className="loading-background">
                <div className="loader"></div>
            </div>
        ) : null;

        const user = users.find(user => user.id === currentUser.id);

        if (this.state.loading) {
            return <LoadingIcon />;
        }

        if (this.state.openBoard == true && this.state.openBoardId) {
            return <Redirect to={`/boards/${this.state.openBoardId}`} />
        }

        const name = user.firstName && user.lastName ?
            <div>
                {user.firstName} {user.lastName}
            </div> : <span>Add Your Name</span>;

        const profilePic = user.photo ? (
            <img className="user-profile-image" src={user.photo} />
        ) : (
            <div className="user-profile-image">
                <i className="far fa-user-circle"></i>
            </div>
        );


        const currentUserBoards = boards.filter(board => (board.userId === user.id)) 
        return (
            <>
                {loader}
                <div id="profile-image-container">
                    <div id="profile-image-frame" >
                        {profilePic}
                    </div>
                </div>
                <div id="user-text">
                    {name}
                </div>
                <div id="profile-personal-followers">
                    {/* <Link to={`/${user.username}/followers`} className="profile-follows-link"> */}
                    <h4>1 000  followers • 1 following</h4>
                    {/* </Link> */}
                </div>
                <div id="profile-personal">
                    <UserDetails user={user} />
                </div>
                <div >
                    <ProfileNavBar
                        currentUser={currentUser}  
                        user={user}
                        openModal={openModal}
                        closeModal={closeModal}
                    />
                </div>
                <ul id='board-list'>
                    {currentUserBoards.map((board, id) => {
                        let pinArr = [];
                        let allPins;
                        let imageTag =
                            <div id='pin-image-wrapper1'>
                            </div>
                        if (board.pinIds.length > 0 && pinArr.length == 0) {
                            pinArr = board.pinIds.map(pinId => {
                                return pins[pinId]
                            }
                            )
                            if (pinArr.length > 0) {
                                allPins = pinArr.map((pin, idx) => {
                                    if (idx < 3 && pin !== undefined) { 
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
                                {imageTag}
                                <div id='board-text'>
                                    <li>{board.title}</li>
                                    <p>{board.pinIds.length} Pins</p>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </>
        );
    }
}
