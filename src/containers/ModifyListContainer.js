import { connect } from 'react-redux';
import ModifyList from '../components/ModifyList';
import { updateUserInfo, createUserInfo } from '../actions/UserActions';

const mapStateToProps = (state, props) => ({
  userInfo: state.users.find((user) => user.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: (userInfo) => {
    dispatch(updateUserInfo(userInfo));
  },
  createUserInfo: (userInfo) => {
    dispatch(createUserInfo(userInfo));
  },
});


const ModifyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModifyList);

export default ModifyListContainer;
