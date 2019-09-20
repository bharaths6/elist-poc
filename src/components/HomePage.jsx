import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchAllUsers } = this.props;
    fetchAllUsers();
  }

  deleteUser(userId) {
    const confirmDelete = window.confirm('Are you sure you want to delete ?');
    if (confirmDelete) {
      const { deleteUserById } = this.props;
      deleteUserById(userId);
    }
  }

  render() {
    const { userInfo } = this.props;
    return (
      <div className="HomePage">
        <Link to={{ pathname: '/modify-list/' }}> Create </Link>

        {userInfo.map((user) => (
          <React.Fragment key={user.id}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.designation}</div>
            <div>{user.exp}</div>
            <div>{user.skillset}</div>
            <Link to={{ pathname: `/modify-list/${user.id}` }}> Edit </Link>
            <button type="button" onClick={() => this.deleteUser(user.id)}>Delete</button>
          </React.Fragment>
        ))}

      </div>
    );
  }
}

HomePage.defaultProps = {
  userInfo: [],
};

HomePage.propTypes = {
  userInfo: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  fetchAllUsers: PropTypes.func.isRequired,
  deleteUserById: PropTypes.func.isRequired,
};

export default HomePage;
