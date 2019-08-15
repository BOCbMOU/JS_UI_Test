import { connect } from 'react-redux';
import Users from './Users';
import { getSelf } from './Users.Actions';

const stateToProps = state => ({
  user: state.user,
});

export default connect(
  stateToProps,
  { getSelf },
)(Users);