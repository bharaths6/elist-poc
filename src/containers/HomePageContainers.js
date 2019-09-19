import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import HomePage from '../components/HomePage';
import { fetchAllUsers } from '../actions/UserActions'
import { selectUserInfo } from '../selectors/userSelector';

const mapStateToProps = state => ({
    // sideeffect ???
    userInfo: selectUserInfo(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: () => {
        dispatch(fetchAllUsers(ownProps))
    }
  })

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomePageContainer