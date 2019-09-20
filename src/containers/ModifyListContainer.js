import { connect } from 'react-redux';
import ModifyList from '../components/ModifyList';
import { fetchUserInfo } from '../actions/UserActions';

// const mapStateToProps = (state, props) => ({
//   userInfo: state.users.find((user) => {
//     debugger;
//     return user.id === props.match.params.id;
//   }),
//   empId: props.match.params.id,
// });

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
