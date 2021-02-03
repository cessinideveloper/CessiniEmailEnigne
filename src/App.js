
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NewCam from './components/Dashboard/CreateCampaigns/newCam'//'../newCampaign/newCam'
import LoadedCamp from './components/Dashboard/LoadedCampaigns/loadedCampaign'
import EmailListForm from './components/Dashboard/CreateEmailList/emailListForm'
import TwoLists from './components/Dashboard/Email_Campaign_Lists/twoLists'
import './App.css';
import SignMain from './components/signInPage';
import DashBoard from './components/Dashboard/dashBoard';
import './css_modules/global.css'

function App() {

  return (
    <div className="primaryWindow">
      <Switch>
        <Route exact path="/dashboard"  render={() => <DashBoard></DashBoard>}></Route>
        <Route path="/dashboard/newcamp" render={() =><NewCam></NewCam>}></Route>
        <Route path="/dashboard/loadedcamp" render={() =><LoadedCamp></LoadedCamp>}></Route>
        <Route path="/dashboard/newemaillist" render={() => <EmailListForm></EmailListForm>}></Route>
        
        <Route path="/" render={() => <SignMain></SignMain>}></Route>

      </Switch>
    </div>
  );
}

export default App