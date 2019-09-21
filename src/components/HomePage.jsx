import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

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
        <Button variant="contained" color="primary" component={Link} to="/modify-list/">
          <AddIcon />
          Add New User
        </Button>
        {userInfo.map((user) => (
          <Card key={user.id}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {user.name.charAt(0)}
                </Avatar>
              }
              title={user.name}
              subheader={ `${user.designation},  ${user.exp}`}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Skillset:
                {user.skillset}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={() => this.deleteUser(user.id)}>
                <DeleteIcon /> Delete
              </IconButton>
              <IconButton aria-label="share" component={Link} to={`/modify-list/${user.id}`}>
                <EditIcon /> Edit
              </IconButton>
            </CardActions>
          </Card>
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
