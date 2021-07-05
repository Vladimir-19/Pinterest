import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { Link, NavLink } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import SearchBar from '../searchBar/searchbar_container';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout, openModal, closeModal } = this.props;

        const profilePhoto = ((currentUser) && (currentUser.photo)) ? ( 
            <img className="nav-profile-image" src={currentUser.photo} /> // photoUrl
        ) : (
            <div className='nav-profile-image'>
                <i className="far fa-user-circle"
                    style={{ "fontSize": "38px", "color": "#575252" }}></i>
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
                            <div
                                className="nav-bar-search-container" id="search">
                                <SearchBar />
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
                                <a href="https://github.com/Vladimir-19/Pinterest" target="_blank"
                                className="nav-bar-link"
                                >
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i className="fab fa-github"
                                                style={{ "fontSize": "32px", "color": "#575252" }}></i>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="nav-bar-button" id="linkedin">
                                <a href="https://www.linkedin.com/in/vladimir-salavei-081a43212/" target="_blank" className="nav-bar-link">
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i 
                                                style={{ "fontSize": "36px", "color": "#575252", "fontWeight" : "100" }}
                                            >in</i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div 
                                className="icon-container-shadow">
                                <NavLink
                                    to="/"
                                    className="nav-link-home"
                                    onClick={logout}
                                    replace
                                    style={{"color" : "gray"}}
                                >
                                    <i className="fas fa-sign-out-alt"
                                        style={{ "fontSize": "32px", "color": "#575252", "padding" : "12px"}}
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
    logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

