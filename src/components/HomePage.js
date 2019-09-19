import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({userInfo, actions}) {
  const users = userInfo.users;
  console.log(typeof actions);
  actions();
  return (
    <div className="HomePage">
        
      {users.map(user => (
        <React.Fragment>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.designation}</div>
        <div>{user.exp}</div>
        <div>{user.skillset}</div>
        <Link to={{ pathname: '/modify-list', id: user.id }}> Edit </Link>
        </React.Fragment>
      ))}
        
    </div>
  );
}

export default HomePage;
