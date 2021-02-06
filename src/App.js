import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

const SignMain = React.lazy(() => import('./components/signInPage'));
const Dashboard = React.lazy(() => import ('./components/Dashboard/dashBoard'));

function App() {
  return (
    <div className="primaryWindow">
      <Suspense fallback={<p>Loading.....</p>}>
        <Switch>
          <Route exact path="/">
            <SignMain />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App