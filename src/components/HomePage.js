import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render () {
    return (
      <div className="HomePage">
          
        {this.props.userInfo.map( (user,index) => (
          <React.Fragment key={index}>
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>{user.designation}</div>
          <div>{user.exp}</div>
          <div>{user.skillset}</div>
          <Link to={{ pathname: `/modify-list/${user.id}` }}> Edit </Link>
          </React.Fragment>
        ))}

      </div>
    )    
  }
}

export default HomePage;
