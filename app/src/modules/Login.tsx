import React, { FormEvent, useState } from 'react';
import './Login.scss';
import { GetUser } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

interface Credentials {
  username: string;
  password: string;
}

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(credentials);
    dispatch(GetUser(credentials.username));
  }

  return (
    <div>
      <form className={'loginForm'} onSubmit={handleSubmit}>
        <p>Whistler</p>
        <label>Email</label>
        <input id={'email'}
               type={'text'}
               onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}/>
        <label>Password</label>
        <input id={'password'}
               type={'password'}
               onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}/>
        <button type={'submit'}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
