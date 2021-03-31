import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
// import SearchbarContainer from '../Searchbar/searchbar_container';
import { Link, NavLink } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import { fetchAllUsers, fetchUser } from "../../actions/user_actions";
import SearchBar from '../searchBar/searchbar_container';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout, openModal, closeModal } = this.props;

        const profilePhoto = ((currentUser) && (currentUser.photo)) ? ( // photoUrl
            <img className="nav-profile-image" src={currentUser.photo} /> //// photoUrl
        ) : (
                <div 
                className='nav-profile-image'
                    // className="icon-container-shadow"
                >
                    <i className="far fa-user-circle"
                    style={{ "fontSize": "38px", "color": "#8e8e8e" }}></i>
                </div>
            );

        if (currentUser) {
            return (
                <div className="nav-container">
                    <ul className="nav-ul">
                        <li className="nav-lis">
                            <a key="1" className="nav-link-home-logo" href="#">XXX</a> 
                            <a key="2" className="nav-link-home" href="#">
                                Home
                            </a>
                            <NavLink to="/following" className="nav-bar-link">
                                <div className="nav-link-home">
                                    Following
                                </div>
                            </NavLink>
                            <div
                                className="nav-bar-search-container" id="search">
                                {/* SearchContainer */}
                                <SearchBar />
                                {/* <h6>i'm a search bar insode inside navbar.jsx</h6> */}
                            </div>
                            <div >
                                <NavLink
                                    to={`/users/${currentUser.id}`}
                                    // key="3" // THIS IS id: 3 == vladimir@solovey.com
                                    className="nav-link-home"
                                    href="#"
                                >
                                    {/* profilePic */}
                                    {profilePhoto}
                                </NavLink>
                            </div>
                            <div id="github">
                                <a href="https://github.com/Vladimir-19/Painterist" target="_blank" 
                                className="nav-bar-link"
                                >
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i className="fab fa-github"
                                                style={{ "fontSize": "32px", "color": "#8e8e8e" }}></i>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="nav-bar-button" id="linkedin">
                                <a href="https://github.com/Vladimir-19" target="_blank" className="nav-bar-link">
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i 
                                            // className="fab fa-linkedin"
                                                style={{ "fontSize": "36px", "color": "#8e8e8e", "fontWeight" : "100" }}
                                            >in</i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div 
                                className="icon-container-shadow">
                                <NavLink
                                    to="/"
                                    // className="fas fa-sign-out-alt fa-2x"
                                    className="nav-link-home"
                                    onClick={logout}
                                    replace
                                    style={{"color" : "gray"}}
                                >
                                    <i className="fas fa-sign-out-alt"
                                        style={{ "fontSize": "32px", "color": "#8e8e8e", "padding" : "12px"}}
                                    ></i>
                                </NavLink>
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
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

