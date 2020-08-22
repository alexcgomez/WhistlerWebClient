import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

async function getUsers() {
  const res = await fetch('http://localhost:8080/v1/users');
  const users = await res.json()
console.log(users)
  return users;
}

ReactDOM.render(
  <React.StrictMode>
    <App users={getUsers()}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
