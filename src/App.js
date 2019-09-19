import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

import HomePageContainer from './containers/HomePageContainers';
import ModifyListContainer from './containers/ModifyListContainer';

function App() {
  return (
    <div className="App">      
      {/* <HomePageContainer/> */}
      <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={HomePageContainer} />
            <Route path="/modify-list" component={ModifyListContainer} />
            <Redirect to="/" />
          </Switch>
        </div>
    </div>
  );
}

export default App;
