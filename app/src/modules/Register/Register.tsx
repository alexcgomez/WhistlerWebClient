import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CreateUser } from '../../actions/User/CreateUserActions';
import { RootState } from '../../reducers/RootReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


function Register() {
  const newUser = useSelector((state:RootState)=>state.createUser)

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }
    dispatch(CreateUser(user))
  }

  return (
    <div className='register-container'>
      <img src="logo.svg" alt={"Whistler-logo"} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" required={true}
                 onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" required={true}
                 onChange={(e) => setLastName(e.target.value)}/>
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" required={true}
                 onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" required={true}
                 onChange={(e) => setPassword(e.target.value)}/>
        </div>

        {newUser.error? <div className="alert alert-danger" role="alert">
          <FontAwesomeIcon icon={faExclamationCircle} />
          <span>     </span>
         This email already exists!
        </div>: null}

        <div className="register-buttons">
          <button type="submit" className="btn btn-sm btn-block">Register
          </button>

          <p className="forgot-password text-right">
            Already registered? <Link to={'/'}>Sign in</Link>
          </p>
        </div>

      </form>
    </div>
  );
}

export default Register;
