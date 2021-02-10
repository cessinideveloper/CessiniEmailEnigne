import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
//Code Spliting
const NewCamp = React.lazy(() => import('./components/Dashboard/CreateCampaigns/newCam'));
const SignMain = React.lazy(() => import('./components/signInPage'));
const Dashboard = React.lazy(() => import ('./components/Dashboard/dashBoard'));

function App() {
  return (
    <div className="primaryWindow">
      <Suspense fallback={<p>Loading.....</p>}>
        <Switch>
          <Route path="/dashboard/newcamp/maileditor">
            <NewCamp />
          </Route>
          
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          
          <Route path="/">
            <SignMain />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App
