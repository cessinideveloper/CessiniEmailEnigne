
import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import SignMain from 'src\components\SignInPage\signMain.js';
import DashBoard from './Dashboard/dashBoard';

function App() {

  return (
    <div className="primaryWindow">
      <Switch>
        <Route path="/dashboard" render={() => <DashBoard></DashBoard>}></Route>
        <Route path="/" render={() => <SignMain></SignMain>}></Route>
      </Switch>
    </div>
  );
}

export default App