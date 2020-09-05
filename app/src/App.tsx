import React from 'react';

import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './modules/LoginComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={LoginComponent}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
