import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
// import SearchbarContainer from '../Searchbar/searchbar_container';
import { Link, NavLink } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import { fetchAllUsers, fetchSingleUser } from "../../actions/user_actions"


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout, openModal, closeModal } = this.props;

        const profilePhoto = ((currentUser) && (currentUser.photoUrl)) ? (
            <img className="nav-profile-image" src={currentUser.photoUrl} />
        ) : (
                <div className='nav-profile-image'>
                    <i className="fas fa-user-circle" 
                    style={{ "fontSize": "23px", "color": "#8e8e8e" }}></i>
                </div>
            );

        if (currentUser) {
            return (
                <div className="nav-container">
                    <ul className="nav-ul">
                        <li className="nav-lis">
                            <a key="1" className="nav-link-home-logo" href="#"></a>
                            <a key="2" className="nav-link-home" href="#">
                                Home
                            </a>
                            <NavLink to="/following" className="nav-bar-link">
                                <div className="nav-link-home">
                                    Following
                                </div>
                            </NavLink>
                            <div>
                                {/* <SearchbarContainer /> */} 
                                    {/* or */}
                            {/* className="nav-bar-search-container" id="search"> */}
                                {/* SearchContainer */}
                                <h6>i'm a search bar insode inside navbar.jsx</h6>
                            </div>
                            <div className='icon-wrapper'>
                                <Link
                                    to={`/users/${currentUser.id}`}
                                    // key="3" // THIS IS id: 3 == vladimir@solovey.com
                                    className="nav-link-home"
                                    href="#"
                                >
                                    {/* profilePic */}
                                    {profilePhoto}
                                </Link>
                            </div>
                            <div className="nav-bar-button" id="github">
                                <a href="https://github.com/Vladimir-19/Painterist" target="_blank" className="nav-bar-link">
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i className="fab fa-github-square" id="networking-icon"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="nav-bar-button" id="linkedin">
                                <a href="https://github.com/Vladimir-19" target="_blank" className="nav-bar-link">
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i className="fab fa-linkedin" id="networking-icon"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div >
                                <Link 
                                    to="/" 
                                    className="fas fa-sign-out-alt fa-2x"
                                    onClick={logout}
                                    replace>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

