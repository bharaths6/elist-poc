import React from 'react';
import { Link } from 'react-router-dom'

function ModifyList({userInfo, actions}) {
  debugger;
  const users = userInfo.users;
  return (
    
    <div className="List">
      Modify List

      {users.map(user => (
        <React.Fragment>
        <div>{user.name}</div>
        <div>{user.designation}</div>
        <div>{user.exp}</div>
        </React.Fragment>
      ))}

      <Link to='/'>Home</Link>

    </div>
  );
}

export default ModifyList;
