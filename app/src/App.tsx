import React from 'react';
import './App.scss'
import Login from './modules/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './modules/Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
