import React, { useState } from 'react';
import './Login.scss';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="login-container">
      <Logo maxWidth="200px" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control form-control-sm" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>

          <label>Password</label>
          <input type="password" className="form-control form-control-sm" onChange={(e) => setPassword(e.target.value)} />
        </div>

        {submitted && !email && (
          <div className="alert alert-danger" role="alert" style={{ textAlign: 'left' }}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            <span> </span>
            Please the email is required
          </div>
        )}

        {submitted && password.length < 6 && email.length !== 0 && (
          <div className="alert alert-danger" role="alert" style={{ textAlign: 'left' }}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            <span> </span>
            The password must be longer (6 characters)
          </div>
        )}

        <div className="login-buttons">
          <Link to={'/register'}>
            <button type="button" className="btn btn-sm">
              Register
            </button>
          </Link>
          <button type="submit" className="btn btn-sm">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
