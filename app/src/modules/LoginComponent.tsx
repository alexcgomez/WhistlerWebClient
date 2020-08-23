import React from 'react';

export class LoginComponent extends React.PureComponent {
  render() {
    return (
      <div className={'div-form'}>
        <form>
          <img src='logo.png' alt='whistler-logo'/>
          <input type='text'/>
          <input type='password'/>
          <button>Login</button>
          <button>Register</button>
        </form>
      </div>
    );
  }
}
