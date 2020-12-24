
import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import SignMain from './components/signInPage';
import DashBoard from './components/Dashboard/dashBoard';
import './css_modules/global.css'

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