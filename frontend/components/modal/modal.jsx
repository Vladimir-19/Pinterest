import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CreateBoardsPinsContainer from '../boards/create_boards_pins_container';
import CreateBoardContainer from '../boards/create_board_container';
import DeletePinFormContainer from '../pins/delete_pin_form_container';
// import RecentPinContainer from '../pins/recent_pin_container';
// import EditProfileContainer from '../users/edit_profile_container';

function Modal({ modal, closeModal, openModal }) {
    if (!modal) return null;

    let component, switchFormValue, altModal, clickBackground;
    switch (modal) {
        case 'login':
            switchFormValue = "Sign Up"
            altModal = "signup"
            component = <LoginFormContainer />;
            clickBackground = null;
            break;
        case 'signup':
            switchFormValue = "Lig in"
            altModal = "login"
            component = <SignupFormContainer />;
            clickBackground = null;
            break;
        case ('pinboard'):
            component =
                <CreateBoardsPinsContainer
                    pinId={modal.pinId}
                />;
            clickBackground = closeModal;
            break;
        case 'new-board-pin':
            component = <CreateBoardsPinsContainer />;
            clickBackground = closeModal;
            break;
        case ('createboard'):
            // component = <CreateBoardContainer
            //     currentUser={modal.currentUser} 
            //     />;
            // clickBackground = closeModal;
            // break;
            // component = <CreateBoardContainer />;
            // clickBackground = closeModal;
            component = <CreateBoardContainer />;
            clickBackground = closeModal;
            break;
            break;
        // case ('successPin'):
            // component = <RecentPinContainer boardId={modal.boardId}
            //     pinId={modal.pinId} />
        // case ('editprofile'):
        //     component = <EditProfileContainer currentUser={modal.currentUser} />
        //     break;
        case "delete-pin":
            component = <DeletePinFormContainer />;
            clickBackground = () => openModal('edit-pin');
            break;
        default:
            return null;
    };

    const switchFormButton = (switchFormButton) ? (
        <button className="switch-form-button" onClick={() => openModal(altModal)}>
            <div className="switch-form-value">
                {switchFormValue}
            </div>
        </button>
    ) : null;

    return (
        <div className="modal-container" >
            <div className="modal-background" id={modal} onClick={clickBackground}>
                <div className="modal-child" id={`${modal}-child`} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
                {/* <div className="modal-child-two" onClick={e => e.stopPropagation()}>
                    {switchFormButton}
                </div> */}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);