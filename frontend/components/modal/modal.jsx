import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CreateBoardContainer from '../boards/create_board_container';
import EditProfileContainer from '../profile/edit_profile_container';

function Modal({ modal, closeModal, openModal }) {
    if (!modal) return null;
    let component, switchFormValue, clickBackground;
    switch (modal) {
        case 'login':
            switchFormValue = "Sign Up"
            component = <LoginFormContainer />;
            clickBackground = null;
            break;
        case 'signup':
            switchFormValue = "Lig in"
            component = <SignupFormContainer />;
            clickBackground = null;
            break;
        case ('createboard'):
            component = <CreateBoardContainer />;
            clickBackground = closeModal;
            break;      
        case ('editprofile'):
            component = <EditProfileContainer currentUser={modal.currentUser} />
            clickBackground = closeModal;
            break;
        default:
            return null;
    };

    return (
        <div className="modal-container" >
            <div className="modal-background" id={modal} onClick={clickBackground}>
                <div className="modal-child" id={`${modal}-child`} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
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