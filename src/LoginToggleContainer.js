import { connect } from 'react-redux';
import { toggleIsLoggedIn } from './redux/';
import LoginToggle from './LoginToggle';

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
  toggleIsLoggedIn: () => dispatch(toggleIsLoggedIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginToggle);
