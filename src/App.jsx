import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomePageContainer from './containers/HomePageContainers';
import ModifyListContainer from './containers/ModifyListContainer';
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Employee Management Application
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className="App-intro">
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/modify-list/:id" component={ModifyListContainer} />
          <Route path="/modify-list/" component={ModifyListContainer} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
