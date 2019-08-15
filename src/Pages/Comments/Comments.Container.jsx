import { connect } from 'react-redux';
import Comments from './Comments';
import { getComments } from './Comments.Actions';

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { getComments },
)(Comments);