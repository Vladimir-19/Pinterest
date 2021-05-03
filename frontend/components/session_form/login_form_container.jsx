import { connect } from 'react-redux';
import { loginDemoUser, loginUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import LoginForm from './LoginForm';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(loginUser(user)),
        switchForm: () => dispatch(openModal('signup')),
        closeModal: () => dispatch(closeModal()),
        loginDemoUser: () => dispatch(loginDemoUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);