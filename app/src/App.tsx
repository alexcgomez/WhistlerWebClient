import React from 'react';
import './App.scss'
import { useDispatch } from 'react-redux';
import { GetUser } from './actions/UserActions';


function App() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(GetUser('dd0b9d0a-7144-4d56-a904-c8a9660c6505'))

  return (
    <div className="App">
      <button onClick={handleClick}>GetUser!</button>
    </div>
  );
}

export default App;
