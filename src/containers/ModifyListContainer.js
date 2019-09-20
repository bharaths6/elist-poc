import { connect } from 'react-redux';
import ModifyList from '../components/ModifyList';
import { fetchUserInfo } from '../actions/UserActions';

const mapStateToProps = (state, props) => ({
  userInfo: state,
  empId: props.match.params.id,
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchUserInfo: () => {
    dispatch(fetchUserInfo(props.match.params.id));
  },
});

const ModifyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModifyList);

export default ModifyListContainer;
