import React from 'react';
import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './modules/Login/Login';
import Register from './modules/Register/Register';
import Dashboard from './modules/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/dashboard' exact component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
