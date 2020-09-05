import React from 'react';
import './Login.scss'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='login-container'>
      <img src={'logo.png'} alt={'Whistler-logo'}/>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" aria-describedby="emailHelp"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
              else.</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control"/>
        </div>
        <Link to={'/register'}><button type="button" className="btn btn-secondary">Register</button></Link>
        <Link to={'/home'}><button type="submit" className="btn btn-primary">Login</button></Link>
      </form>
    </div>

  );
}

export default Login;
