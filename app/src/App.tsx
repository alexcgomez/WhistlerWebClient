import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './modules/Login/Login';
import Register from './modules/Register/Register';
import Dashboard from './modules/Dashboard/Dashboard';
import { PrivateRoute } from './utils/PrivateRoute';
import { useSelector } from 'react-redux';
import { RootState } from './reducers/RootReducer';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.authentication.authenticatedData?.loggedIn);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} isLoggedIn={isLoggedIn}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
