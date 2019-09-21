import React from 'react';
import PropTypes from 'prop-types';
import EditForm from './EditForm';

function ModifyList({ userInfo, updateUserInfo, createUserInfo }) {
  if (Object.keys(userInfo).length) {
    return <EditForm info={userInfo} userAction={updateUserInfo} />;
  }

  return <EditForm userAction={createUserInfo} />;
}

ModifyList.defaultProps = {
  userInfo: {},
};

ModifyList.propTypes = {
  updateUserInfo: PropTypes.func.isRequired,
  createUserInfo: PropTypes.func.isRequired,
  userInfo: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ModifyList;
