import React, { useState } from 'react';
import './Login.scss';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Authenticate } from '../../actions/Auth/AuthActions';
import { useDispatch } from 'react-redux';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    dispatch(Authenticate(email, password));
  }

  return (
    <div className="login-container">
      <Logo maxWidth="250px" />

      <form onSubmit={(e) => handleSubmit(e)}>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control form-control-sm" aria-describedby="emailHelp"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)} required />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>

          <label>Password</label>
          <input type="password" className="form-control form-control-sm"
            onChange={(e) => setPassword(e.target.value)} required />
        </div>

        {submitted && !email && (
          <div className="alert alert-danger" role="alert" style={{ textAlign: 'center' }}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            <span>Please the email is required</span>
          </div>
        )}

        {submitted && password.length < 6 && email.length !== 0 && (
          <div className="alert alert-danger" role="alert" style={{ textAlign: 'center' }}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            <span>The password must be longer (6 characters)</span>
          </div>
        )}

        <div className="login-buttons">
          <button type="submit" className="btn btn-sm">
            Login
          </button>
          <p className="forgot-password text-right">
            New user? <Link to={'/register'}>Register here</Link>
          </p>
        </div>

      </form>
    </div>
  );
}

{/* TODO: Stop form-control validation if onChange is raised after submit */}

export default Login;
