import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { fetchAllUsers } from '../actions/UserActions';

const mapStateToProps = (state) => ({
  userInfo: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllUsers: () => {
    dispatch(fetchAllUsers());
  },
});

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomePageContainer;
