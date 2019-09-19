import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import ModifyList from '../components/ModifyList'
import { fetchUserInfo } from '../actions/UserActions';
import { selectUserInfo } from '../selectors/userSelector'

const mapStateToProps = state => ({
    userInfo: selectUserInfo(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchUserInfo: () => {
        dispatch(fetchUserInfo(ownProps))
    }
  })

const ModifyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyList)

export default ModifyListContainer