import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import PinBoardContainer from '../boards/pin_board_container';
import CreateBoardContainer from '../boards/create_board_container';
// import RecentPinContainer from '../pins/recent_pin_container';
// import EditProfileContainer from '../users/edit_profile_container';

function Modal({ modal, closeModal, openModal }) {
    if (!modal) {
        return null;
    }
    let component, clickBackground;
    switch (modal.modal) {
        case 'login':
            component = <LoginFormContainer />;
            clickBackground = null;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            clickBackground = null;
            break;
        case ('pinboard'):
            component =
                <PinBoardContainer
                    pinId={modal.pinId}
                />;
            clickBackground = closeModal;
            break;
        case ('createboard'):
            component = <CreateBoardContainer
                currentUser={modal.currentUser} />;
            clickBackground = closeModal;
            break;
        // case ('successPin'):
        //     component = <RecentPinContainer boardId={modal.boardId}
        //         pinId={modal.pinId} />
        // case ('editprofile'):
        //     component = <EditProfileContainer currentUser={modal.currentUser} />
        //     break;
        default:
            return null;
    }

    return (
        <div className="modal-background">
            {component}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);