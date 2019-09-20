import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ModifyList extends React.Component {
  constructor(props) {
    super(props);
    this.userInfo = [];
  }

  componentDidMount() {
    const { fetchUserInfo, empId } = this.props;
    fetchUserInfo(empId);
  }

  render() {
    const { userInfo } = this.props;
    debugger;
    return (
      <div className="List">
        Modify List

        <>
          <div>{userInfo.name}</div>
          <div>{userInfo.designation}</div>
          <div>{userInfo.exp}</div>
        </>

        <Link to="/">Home</Link>

      </div>
    );
  }
}

ModifyList.defaultProps = {
  userInfo: {},
};

ModifyList.propTypes = {
  userInfo: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  empId: PropTypes.string.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
};

export default ModifyList;
