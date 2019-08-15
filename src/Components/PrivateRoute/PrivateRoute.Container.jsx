import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { },
)(PrivateRoute);