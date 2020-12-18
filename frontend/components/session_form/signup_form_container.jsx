import { connect } from 'react-redux';
import { loginDemoUser, signupUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignUpForm from './SignUpForm'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        // navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signupUser(user)),
        switchForm: () => dispatch(openModal('login')),
        closeModal: () => dispatch(closeModal()),
        loginDemoUser: () => dispatch(loginDemoUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);