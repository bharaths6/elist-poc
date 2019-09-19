import React from 'react';
import { Link } from 'react-router-dom'

class ModifyList extends React.Component {

  constructor(props) {
    super(props);
    this.users = [];
  }
  componentDidMount() {
    const empId = this.props.match.params.id;
    this.props.fetchUserInfo(empId)
  }

  render() {
    return (
    
      <div className="List">
        Modify List
  
        {this.users.map(user => (
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
}

// function ModifyList({userInfo, actions}) {
//   const users = userInfo;
//   return (
    
//     <div className="List">
//       Modify List

//       {users.map(user => (
//         <React.Fragment>
//         <div>{user.name}</div>
//         <div>{user.designation}</div>
//         <div>{user.exp}</div>
//         </React.Fragment>
//       ))}

//       <Link to='/'>Home</Link>

//     </div>
//   );
// }

export default ModifyList;
